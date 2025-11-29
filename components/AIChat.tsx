import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { streamResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Ahoj! Jsem Petrův AI asistent. Zeptej se mě na cokoliv ohledně jeho práce.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Add a temporary loading placeholder
      setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);
      
      const stream = streamResponse(userMessage);
      let fullResponse = '';

      for await (const chunk of stream) {
        if (chunk) {
          fullResponse += chunk;
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMsg = newMessages[newMessages.length - 1];
            if (lastMsg.isStreaming) {
              lastMsg.text = fullResponse;
            }
            return newMessages;
          });
        }
      }

      // Finalize message
      setMessages(prev => {
        const newMessages = [...prev];
        const lastMsg = newMessages[newMessages.length - 1];
        if (lastMsg.isStreaming) {
          lastMsg.isStreaming = false;
        }
        return newMessages;
      });

    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Omlouvám se, něco se pokazilo.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-96 h-[500px] bg-dark-surface border border-dark-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-dark-border bg-dark-bg/50 backdrop-blur flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-white flex items-center gap-2">
                  Petr AI <Sparkles size={14} className="text-accent" />
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-accent text-white rounded-br-none' 
                        : 'bg-dark-bg border border-dark-border text-slate-300 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                    {msg.isStreaming && <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-accent animate-pulse" />}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-dark-border bg-dark-bg/50">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Zeptej se na zkušenosti..."
                  className="w-full bg-dark-bg border border-dark-border rounded-xl py-3 px-4 pr-12 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-accent hover:text-white disabled:opacity-50 disabled:hover:text-accent transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-accent text-white rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center z-50 hover:bg-accent-hover transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
};

export default AIChat;