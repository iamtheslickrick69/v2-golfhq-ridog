"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Target, Users, ShoppingBag, BookOpen, Map, Award } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Target,
      title: "Dashboard",
      description: "Your personalized golf command center",
      href: "/dashboard",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "My Caddy - Riley B",
      description: "AI-powered lessons and coaching",
      href: "/my-caddy",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Golf Journal",
      description: "Smart scorecard tracking with trophy balls",
      href: "/journal",
      color: "text-purple-600"
    },
    {
      icon: Map,
      title: "Course Reviews",
      description: "The Letterboxd of golf courses",
      href: "/courses",
      color: "text-orange-600"
    },
    {
      icon: Trophy,
      title: "Stymie League",
      description: "Community competitions and tournaments",
      href: "/community",
      color: "text-red-600"
    },
    {
      icon: Award,
      title: "Tour Card",
      description: "Gamification with earned status",
      href: "/tour-card",
      color: "text-yellow-600"
    },
    {
      icon: ShoppingBag,
      title: "Pro Shop",
      description: "Equipment tracking and instructors",
      href: "/pro-shop",
      color: "text-indigo-600"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-bg-secondary to-bg-tertiary">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-golf-green/5 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-golf-green/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4">
            GolfHQ<span className="text-golf-green">.ai</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-2">
            AI-Powered Golf Digital Country Club
          </p>
          <p className="text-lg text-gray-500">
            Your AI caddy Riley B guides you through every aspect of your golf journey
          </p>
        </motion.div>

        {/* User Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16 card text-center"
        >
          <p className="text-xl mb-2">Welcome back, <span className="font-semibold text-golf-green">Jason Adams</span>!</p>
          <p className="text-gray-600">8 Handicap • Saint George, Utah • Gold Tour Card</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link href={feature.href}>
                  <div className="card hover:scale-105 cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className={`p-4 rounded-full bg-gray-50 mb-4 ${feature.color}`}>
                        <Icon size={32} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16 text-gray-500"
        >
          <p className="text-sm">Make it legendary. 🏌️⚡</p>
        </motion.div>
      </div>
    </main>
  );
}
