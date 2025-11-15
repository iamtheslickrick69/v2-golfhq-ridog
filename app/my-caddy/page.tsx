"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pageTransition, pageTransitionSettings } from "@/lib/animations";
import { MessageSquare, BookOpen, Target, Zap, Trophy } from "lucide-react";
import { getRileyGreeting, getRileyTip } from "@/lib/mock-data";
import { getTimeOfDay } from "@/lib/utils";

export default function MyCaddyPage() {
  const [messages, setMessages] = useState<Array<{ role: 'riley' | 'user', content: string }>>([
    { role: 'riley', content: getRileyGreeting(getTimeOfDay()) }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');

    // Simulate Riley's response
    setTimeout(() => {
      const response = getRileyTip('driving');
      setMessages(prev => [...prev, { role: 'riley', content: response }]);
    }, 1000);
  };

  const lessons = [
    { title: "Fix Your Slice", duration: "12 min", difficulty: "Beginner" },
    { title: "Putting Basics", duration: "8 min", difficulty: "Beginner" },
    { title: "Bunker Play Mastery", duration: "15 min", difficulty: "Intermediate" },
    { title: "Course Management 101", duration: "20 min", difficulty: "Advanced" },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      transition={pageTransitionSettings}
      className="min-h-screen bg-gradient-to-br from-white via-bg-secondary to-bg-tertiary"
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Caddy - Riley B 🏌️</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 p-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        msg.role === 'user'
                          ? 'bg-golf-green text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask Riley anything..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-golf-green"
                  />
                  <Button onClick={sendMessage}>Send</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Lessons & Content */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-semibold mb-4">Popular Lessons</h3>
              <div className="space-y-3">
                {lessons.map((lesson, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-golf-green" />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{lesson.title}</h4>
                        <p className="text-xs text-gray-600">{lesson.duration} • {lesson.difficulty}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="secondary" className="w-full justify-start">
                  <Target className="w-5 h-5 mr-2" />
                  Practice Drills
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <Zap className="w-5 h-5 mr-2" />
                  Take Quiz
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <Trophy className="w-5 h-5 mr-2" />
                  View Progress
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
