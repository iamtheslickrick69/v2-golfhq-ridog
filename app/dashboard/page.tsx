"use client";

import { motion } from "framer-motion";
import { currentUser, jasonRecentRounds, getRileyGreeting } from "@/lib/mock-data";
import { getTimeOfDay, calculateDaysAgo, getProgressPercentage } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { pageTransition, pageTransitionSettings, staggerContainer, fadeInUp } from "@/lib/animations";
import {
  Calendar,
  MessageSquare,
  Users,
  BookOpen,
  TrendingDown,
  TrendingUp,
  Trophy,
  Target,
  Activity,
  Award,
  BarChart3,
  Clock,
  MapPin,
  Zap,
  Star,
  Flag
} from "lucide-react";
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
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Hero Section - Welcome Banner */}
        <motion.section
          variants={fadeInUp}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-golf-green to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Trophy className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Good {timeOfDay}, {currentUser.name.split(' ')[0]}!
              </h1>
              <p className="text-xl text-white/90 mb-4">
                You're {roundsToNextLevel} rounds from reaching {currentUser.tourCard.level === 'Gold' ? 'Platinum' : 'the next level'}!
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold">{currentUser.tourCard.level} Member</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">Rank #{currentUser.tourCard.rank}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Stats Overview */}
        <motion.section
          variants={staggerContainer}
          className="mb-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div variants={fadeInUp}>
              <Card hoverable>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-golf-green">{currentUser.stats.roundsThisYear}</div>
                    <div className="text-sm text-gray-600 mt-1">Rounds Played</div>
                  </div>
                  <Activity className="w-10 h-10 text-golf-green/30" />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hoverable>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{currentUser.stats.averageScore}</div>
                    <div className="text-sm text-gray-600 mt-1">Avg Score</div>
                  </div>
                  <BarChart3 className="w-10 h-10 text-blue-600/30" />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hoverable>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-purple-600">{currentUser.stats.bestScore}</div>
                    <div className="text-sm text-gray-600 mt-1">Best Score</div>
                  </div>
                  <Award className="w-10 h-10 text-purple-600/30" />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hoverable>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center text-3xl font-bold text-green-600">
                      {currentUser.profile.handicap.current}
                      <TrendingDown className="w-6 h-6 ml-1" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Handicap</div>
                  </div>
                  <Target className="w-10 h-10 text-green-600/30" />
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column - Tour Progress & Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tour Card Progress */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-golf-green" />
                Tour Card Progress
              </h2>
              <Card>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Level {currentUser.tourCard.level}</h3>
                      <p className="text-sm text-gray-600">Member #{currentUser.tourCard.memberNumber}</p>
                    </div>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">
                      {currentUser.tourCard.level}
                    </span>
                  </div>

                  <ProgressBar
                    current={currentUser.tourCard.xp}
                    max={currentUser.tourCard.nextLevelXp}
                  />

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-golf-green">{currentUser.tourCard.xp}</div>
                      <div className="text-xs text-gray-600 mt-1">Current XP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{currentUser.tourCard.nextLevelXp - currentUser.tourCard.xp}</div>
                      <div className="text-xs text-gray-600 mt-1">XP to Next</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">#{currentUser.tourCard.rank}</div>
                      <div className="text-xs text-gray-600 mt-1">Global Rank</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.section>

            {/* Quick Actions */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-golf-green" />
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link href="/journal/new">
                  <Card hoverable className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 bg-golf-green/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-golf-green" />
                    </div>
                    <h4 className="font-semibold text-sm">Track Round</h4>
                  </Card>
                </Link>

                <Link href="/my-caddy">
                  <Card hoverable className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 bg-blue-600/10 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Ask Riley</h4>
                  </Card>
                </Link>

                <Link href="/community">
                  <Card hoverable className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 bg-purple-600/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Find Players</h4>
                  </Card>
                </Link>

                <Link href="/courses">
                  <Card hoverable className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 bg-orange-600/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Courses</h4>
                  </Card>
                </Link>
              </div>
            </motion.section>

            {/* Recent Rounds */}
            <motion.section variants={fadeInUp}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Clock className="w-5 h-5 text-golf-green" />
                  Recent Rounds
                </h2>
                <Link href="/journal" className="text-sm text-golf-green hover:underline font-medium">
                  View all →
                </Link>
              </div>
              <div className="space-y-3">
                {jasonRecentRounds.slice(0, 3).map((round) => (
                  <Card key={round.id} hoverable>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-golf-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Flag className="w-6 h-6 text-golf-green" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{round.course}</h4>
                            <p className="text-sm text-gray-600">{calculateDaysAgo(round.date)}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-center">
                            <div className="font-bold text-golf-green">{round.stats.putts}</div>
                            <div className="text-xs text-gray-600">Putts</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-blue-600">{round.stats.fairways}</div>
                            <div className="text-xs text-gray-600">Fairways</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-purple-600">{round.stats.greens}</div>
                            <div className="text-xs text-gray-600">GIR</div>
                          </div>
                        </div>

                        <div className="text-center border-l pl-6">
                          <div className="text-4xl font-bold text-golf-green">{round.score}</div>
                          <div className="text-sm text-gray-600">Par {round.par}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Riley & Achievements */}
          <div className="space-y-6">
            {/* Riley's Daily Tip */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-golf-green" />
                Riley's Daily Tip
              </h2>
              <Card className="bg-gradient-to-br from-golf-green-pale to-white border-2 border-golf-green/20">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-golf-green rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🏌️</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-golf-green mb-1">Riley B.</h3>
                    <p className="text-sm text-gray-600">Your AI Caddy</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{rileyGreeting}</p>
                <Link href="/my-caddy">
                  <button className="w-full bg-golf-green text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-golf-green/90 transition-colors">
                    Chat with Riley
                  </button>
                </Link>
              </Card>
            </motion.section>

            {/* Performance Insights */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-golf-green" />
                Performance Insights
              </h2>
              <Card>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Handicap Trend</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingDown className="w-4 h-4" />
                      <span className="text-sm font-bold">-0.5</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Avg Score Trend</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingDown className="w-4 h-4" />
                      <span className="text-sm font-bold">-2.3</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">Putting Average</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingDown className="w-4 h-4" />
                      <span className="text-sm font-bold">-1.5</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.section>

            {/* Achievements Preview */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-golf-green" />
                Recent Achievements
              </h2>
              <Card>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Birdie Streak</h4>
                      <p className="text-xs text-gray-600">3 birdies in a row</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Eagle Eye</h4>
                      <p className="text-xs text-gray-600">Hit from 150+ yards</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Consistency King</h4>
                      <p className="text-xs text-gray-600">5 rounds under 80</p>
                    </div>
                  </div>
                </div>

                <Link href="/tour-card" className="block mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full text-golf-green font-semibold hover:underline text-sm">
                    View All Achievements →
                  </button>
                </Link>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
