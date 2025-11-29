import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.warn("API_KEY not found in environment variables. Chat functionality will be limited.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const streamResponse = async function* (message: string) {
  const client = getClient();
  
  if (!client) {
    yield "Jsem ScrolloBot, Petrův AI manažer. Bohužel mi momentálně chybí spojení s centrálou (API klíč). Zkus to prosím později nebo napiš Petrovi přímo na email.";
    return;
  }

  try {
    const chat = client.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
      }
    });

    const result = await chat.sendMessageStream({ message });
    
    for await (const chunk of result) {
      yield chunk.text;
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "Omlouvám se, došlo k drobnému výpadku v matrixu. Můžeme to zkusit znovu?";
  }
};