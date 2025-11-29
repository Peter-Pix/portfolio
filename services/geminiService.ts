import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Fallback strategy: Try the latest fast model, fall back to the previous stable version
const MODELS_TO_TRY = ['gemini-2.5-flash', 'gemini-1.5-flash'];

const getClient = () => {
  if (!aiClient) {
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;
    
    if (!apiKey) {
      console.warn("API_KEY not found.");
      return null;
    }
    // Clean potential whitespace from key
    const cleanKey = apiKey.trim();
    aiClient = new GoogleGenAI({ apiKey: cleanKey });
  }
  return aiClient;
};

export const streamResponse = async function* (message: string) {
  const client = getClient();
  
  if (!client) {
    yield "Zajímá tě něco o AI nebo programování? Napiš Peťovi na ppix50@gmail.com";
    return;
  }

  let success = false;

  for (const modelName of MODELS_TO_TRY) {
    try {
      const chat = client.chats.create({
        model: modelName,
        config: {
          systemInstruction: AI_SYSTEM_INSTRUCTION,
          maxOutputTokens: 300, // Enforce brevity: ~120 words max
        }
      });

      const result = await chat.sendMessageStream({ message });
      
      for await (const chunk of result) {
        yield chunk.text;
      }
      
      success = true;
      break; // Stop loop if successful
      
    } catch (error: any) {
      console.warn(`Model ${modelName} failed. Details:`, error);
      
      // If it's not a rate limit/server error (e.g., auth error), stop immediately
      const isRateLimit = error?.message?.includes('429') || error?.status === 429;
      const isServerOverload = error?.message?.includes('503') || error?.status === 503;
      
      if (!isRateLimit && !isServerOverload) {
         // Break for non-retriable errors (like invalid API key)
         break;
      }
      // Otherwise, continue to the next model in the loop
    }
  }

  if (!success) {
    // Final fallback message if all models fail
    yield "Zajímá tě něco o AI nebo programování? Napiš Peťovi na ppix50@gmail.com";
  }
};