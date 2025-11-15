"use client";

import { motion } from "framer-motion";
import { currentUser, jasonRecentRounds, getRileyGreeting } from "@/lib/mock-data";
import { getTimeOfDay, calculateDaysAgo, getProgressPercentage } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { pageTransition, pageTransitionSettings, staggerContainer, fadeInUp } from "@/lib/animations";
import { Calendar, MessageSquare, Users, BookOpen, TrendingDown } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const timeOfDay = getTimeOfDay();
  const rileyGreeting = getRileyGreeting(timeOfDay);
  const progressPercent = getProgressPercentage(currentUser.tourCard.xp, currentUser.tourCard.nextLevelXp);
  const roundsToNextLevel = Math.ceil((currentUser.tourCard.nextLevelXp - currentUser.tourCard.xp) / 100);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={pageTransitionSettings}
      className="min-h-screen bg-gradient-to-br from-white via-bg-secondary to-bg-tertiary"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, {currentUser.name.split(' ')[0]}! 🏌️
          </h1>
          <p className="text-xl text-gray-600">
            You're {roundsToNextLevel} rounds from {currentUser.tourCard.level === 'Gold' ? 'Platinum' : 'the next level'}!
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Tour Card Widget */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Tour Card</h3>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  {currentUser.tourCard.level}
                </span>
              </div>
              <ProgressBar
                current={currentUser.tourCard.xp}
                max={currentUser.tourCard.nextLevelXp}
              />
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rank</span>
                  <span className="font-semibold">#{currentUser.tourCard.rank}</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-600">Member #</span>
                  <span className="font-semibold">{currentUser.tourCard.memberNumber}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Riley's Daily Tip */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-golf-green-pale to-white">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-golf-green rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏌️</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Riley's Daily Tip</h3>
                  <p className="text-gray-700">{rileyGreeting}</p>
                  <Link href="/my-caddy">
                    <button className="mt-4 text-golf-green font-medium hover:underline">
                      Chat with Riley →
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={fadeInUp} className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/journal/new">
              <Card hoverable className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-golf-green" />
                <h4 className="font-medium">Track Round</h4>
              </Card>
            </Link>
            <Link href="/my-caddy">
              <Card hoverable className="text-center">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h4 className="font-medium">Ask Riley</h4>
              </Card>
            </Link>
            <Link href="/community">
              <Card hoverable className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <h4 className="font-medium">Find Players</h4>
              </Card>
            </Link>
            <Link href="/courses">
              <Card hoverable className="text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <h4 className="font-medium">Browse Courses</h4>
              </Card>
            </Link>
          </div>
        </motion.div>

        {/* Recent Rounds */}
        <motion.div variants={fadeInUp} className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Recent Rounds</h2>
            <Link href="/journal" className="text-golf-green hover:underline">
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {jasonRecentRounds.slice(0, 3).map((round) => (
              <Card key={round.id} hoverable>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{round.course}</h4>
                    <p className="text-sm text-gray-600">{calculateDaysAgo(round.date)}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-golf-green">{round.score}</div>
                    <div className="text-sm text-gray-600">Par {round.par}</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Putts:</span> <span className="font-medium">{round.stats.putts}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Fairways:</span> <span className="font-medium">{round.stats.fairways}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">GIR:</span> <span className="font-medium">{round.stats.greens}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div variants={fadeInUp} className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Your Stats</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-golf-green">{currentUser.stats.roundsThisYear}</div>
                <div className="text-sm text-gray-600 mt-1">Rounds This Year</div>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{currentUser.stats.averageScore}</div>
                <div className="text-sm text-gray-600 mt-1">Average Score</div>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{currentUser.stats.bestScore}</div>
                <div className="text-sm text-gray-600 mt-1">Best Score</div>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="flex items-center justify-center text-3xl font-bold text-green-600">
                  {currentUser.profile.handicap.current}
                  <TrendingDown className="w-6 h-6 ml-1" />
                </div>
                <div className="text-sm text-gray-600 mt-1">Handicap</div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
