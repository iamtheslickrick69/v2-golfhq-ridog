"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, Trophy, ShoppingBag, MessageCircle, MapPin } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "My Caddy",
    description: "Riley B - Your AI golf coach and companion",
    href: "/my-caddy",
    color: "bg-green-500",
  },
  {
    icon: BookOpen,
    title: "Golf Journal",
    description: "Track rounds, earn trophy balls, see your progress",
    href: "/journal",
    color: "bg-blue-500",
  },
  {
    icon: MapPin,
    title: "Course Reviews",
    description: "The Letterboxd of golf courses",
    href: "/courses",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    title: "Stymie League",
    description: "Compete in tournaments and find playing partners",
    href: "/community",
    color: "bg-orange-500",
  },
  {
    icon: Trophy,
    title: "Tour Card",
    description: "Level up and unlock exclusive perks",
    href: "/tour-card",
    color: "bg-yellow-500",
  },
  {
    icon: ShoppingBag,
    title: "Pro Shop",
    description: "Track gear, book instructors, find deals",
    href: "/pro-shop",
    color: "bg-red-500",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="text-golf-green">GolfHQ.ai</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your AI-powered golf digital country club. Riley B is your caddy,
              coach, and companion on every round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/my-caddy"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-golf-green rounded-xl hover:bg-golf-green-dark transition-colors duration-200"
              >
                Chat with Riley
              </Link>
              <Link
                href="/journal"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-golf-green bg-white border-2 border-golf-green rounded-xl hover:bg-golf-green-pale transition-colors duration-200"
              >
                Track a Round
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating golf ball decoration */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-white rounded-full opacity-5"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-white rounded-full opacity-5"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link href={feature.href}>
                <div className="glass-card p-6 h-full group cursor-pointer">
                  <div
                    className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* User Info Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="glass-card p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome back, Jason! ⛳
          </h2>
          <p className="text-gray-600 mb-6">
            You're <span className="font-semibold text-golf-green">2 rounds</span> away from{" "}
            <span className="font-semibold">Gold Level!</span>
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-golf-green">47</div>
              <div className="text-sm text-gray-600">Rounds This Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-golf-green">8.2</div>
              <div className="text-sm text-gray-600">Handicap</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-golf-green">4/18</div>
              <div className="text-sm text-gray-600">Trophy Balls</div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
