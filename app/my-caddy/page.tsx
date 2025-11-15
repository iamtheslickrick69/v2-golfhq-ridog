"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { pageTransition } from "@/lib/animations/presets";
import { useRileyStore } from "@/lib/stores/rileyStore";
import { RileyMessage } from "@/components/riley/RileyMessage";
import { RileyTypingIndicator } from "@/components/riley/RileyTypingIndicator";
import { RileyQuickReplies } from "@/components/riley/RileyQuickReplies";
import { Input, Button } from "@/components/ui";
import { rileyQuickReplies, getRileyTip, rileyLessons } from "@/lib/mock-data/riley-responses";

export default function MyCaddyPage() {
  const { messages, isTyping, addMessage, setTyping } = useRileyStore();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    addMessage("user", userMessage);

    // Simulate Riley typing
    setTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Get a contextual response
    let rileyResponse = await getRileyTip();

    // Simple keyword-based responses for demo
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("handicap")) {
      rileyResponse =
        "Your handicap is trending down! You're at 8.2 right now, and based on your recent rounds, you're on track to hit single digits by spring. Keep up the great work!";
    } else if (lowerMessage.includes("round") || lowerMessage.includes("recent")) {
      rileyResponse =
        "Your last round at Fox Hollow was solid - 78! You had 3 birdies and your driving was money. Only 2 penalties, which is great. Want me to break down your stats?";
    } else if (lowerMessage.includes("tee time") || lowerMessage.includes("book")) {
      rileyResponse =
        "Perfect timing! Fox Hollow has slots open tomorrow morning at 7:30 and 8:00. Black Desert has afternoon times at 2:00. What sounds good?";
    } else if (lowerMessage.includes("drill") || lowerMessage.includes("practice")) {
      rileyResponse =
        "Let's work on your putting! Here's a great drill: Set up 5 balls at 3 feet from the hole in a circle. Make all 5 in a row before moving back to 5 feet. This builds confidence on those short putts.";
    } else if (lowerMessage.includes("slice")) {
      rileyResponse =
        "Let's fix that slice! Check out my 'Fix Your Slice in 3 Steps' lesson. The main thing: strengthen your grip slightly and make sure you're not cutting across the ball. Want me to break down the full drill?";
    } else if (lowerMessage.includes("course") || lowerMessage.includes("recommend")) {
      rileyResponse =
        "Based on your recent play, I'd recommend Sand Hollow's Links course this week. It's playing well, conditions are great, and it's a bit more forgiving than the Championship course. Plus, twilight rates are killer right now!";
    }

    addMessage("riley", rileyResponse);
    setTyping(false);
  };

  const handleQuickReply = (option: string) => {
    addMessage("user", option);
    setTyping(true);

    setTimeout(async () => {
      const response = await getRileyTip();
      addMessage("riley", response);
      setTyping(false);
    }, 1500);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-soft flex flex-col"
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            My Caddy - Riley B
          </h1>
          <p className="text-gray-600 mt-1">
            Your AI golf coach and companion
          </p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 overflow-hidden flex flex-col max-w-4xl w-full mx-auto">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {messages.map((message) => (
            <RileyMessage
              key={message.id}
              role={message.role}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && <RileyTypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="px-4 md:px-6">
          <RileyQuickReplies
            options={rileyQuickReplies.slice(0, 4)}
            onSelect={handleQuickReply}
          />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white p-4 md:p-6">
          <div className="max-w-4xl mx-auto flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask Riley anything about golf..."
              className="flex-1"
            />
            <Button onClick={handleSend} className="flex-shrink-0">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lessons Preview */}
      <div className="bg-white border-t border-gray-200 p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Featured Lessons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rileyLessons.slice(0, 3).map((lesson) => (
              <div
                key={lesson.id}
                className="p-4 border border-gray-200 rounded-xl hover:border-golf-green transition-colors duration-200 cursor-pointer"
              >
                <h4 className="font-semibold text-gray-900">{lesson.title}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {lesson.duration} • {lesson.difficulty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
