"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pageTransition, pageTransitionSettings } from "@/lib/animations";
import { Users, Trophy, Calendar, MessageSquare } from "lucide-react";

export default function CommunityPage() {
  const competitions = [
    {
      id: 1,
      name: "Utah Desert Challenge",
      description: "Play all 3 desert courses in November",
      participants: 234,
      status: "active",
      progress: "2/3 courses"
    },
    {
      id: 2,
      name: "Turkey Trot Scramble",
      description: "Thanksgiving weekend best ball tournament",
      participants: 48,
      status: "upcoming",
      date: "Nov 28, 2024"
    },
  ];

  const forums = [
    { title: "Equipment Reviews", posts: 1234, category: "gear" },
    { title: "Course Conditions", posts: 892, category: "courses" },
    { title: "Swing Help", posts: 2341, category: "improvement" },
    { title: "Local Meetups", posts: 456, category: "social" },
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Stymie League 🏌️</h1>
          <p className="text-gray-600">Community competitions and tournaments</p>
        </div>

        {/* Active Competitions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Active Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitions.map((comp) => (
              <Card key={comp.id} hoverable>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="w-5 h-5 text-golf-green" />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        comp.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {comp.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{comp.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{comp.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {comp.participants} participants
                      </div>
                      {comp.date && (
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {comp.date}
                        </div>
                      )}
                    </div>
                    {comp.progress && (
                      <div className="mt-3 text-sm">
                        <span className="font-medium text-golf-green">Your progress: {comp.progress}</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button className="w-full mt-4">
                  {comp.status === 'active' ? 'View Details' : 'Register'}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Forums */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Community Forums</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {forums.map((forum, i) => (
              <Card key={i} hoverable>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-6 h-6 text-golf-green" />
                    <div>
                      <h4 className="font-semibold">{forum.title}</h4>
                      <p className="text-sm text-gray-600">{forum.posts.toLocaleString()} posts</p>
                    </div>
                  </div>
                  <span className="text-golf-green">→</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
