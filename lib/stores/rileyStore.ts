import { create } from "zustand";

interface Message {
  id: string;
  role: "user" | "riley";
  content: string;
  timestamp: Date;
}

interface RileyStore {
  messages: Message[];
  isTyping: boolean;
  addMessage: (role: "user" | "riley", content: string) => void;
  setTyping: (typing: boolean) => void;
  clearMessages: () => void;
}

export const useRileyStore = create<RileyStore>((set) => ({
  messages: [
    {
      id: "1",
      role: "riley",
      content: "What's up Jason! Ready to work on that game? How can I help you today?",
      timestamp: new Date(),
    },
  ],
  isTyping: false,
  addMessage: (role, content) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Date.now().toString(),
          role,
          content,
          timestamp: new Date(),
        },
      ],
    })),
  setTyping: (typing) => set({ isTyping: typing }),
  clearMessages: () => set({ messages: [] }),
}));
