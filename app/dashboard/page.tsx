"use client";

import { currentUser, jasonRecentRounds, getRileyGreeting } from "@/lib/mock-data";
import { getTimeOfDay, calculateDaysAgo, cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  Calendar,
  MessageSquare,
  Users,
  BookOpen,
  TrendingDown,
  TrendingUp,
  Trophy,
  Target,
  Award,
  Zap,
  Activity,
  MapPin
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const timeOfDay = getTimeOfDay();
  const [rileyGreeting, setRileyGreeting] = useState("Hey there! Ready to level up your game?");
  const roundsToNextLevel = Math.ceil((currentUser.tourCard.nextLevelXp - currentUser.tourCard.xp) / 100);

  useEffect(() => {
    getRileyGreeting().then(setRileyGreeting);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2">
                Welcome back, {currentUser.name.split(' ')[0]}!
              </h1>
              <p className="text-lg text-[var(--text-secondary)]">
                {timeOfDay === 'morning' ? 'Good morning' : timeOfDay === 'afternoon' ? 'Good afternoon' : 'Good evening'}!
                You&apos;re {roundsToNextLevel} rounds from {currentUser.tourCard.level === 'Gold' ? 'Platinum' : 'the next level'}.
              </p>
            </div>
            <Link href="/journal/new">
              <Button size="lg" className="gap-2">
                <Calendar className="w-5 h-5" />
                Track New Round
              </Button>
            </Link>
          </div>
        </section>

        {/* Key Metrics Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Handicap Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-golf-green/10 rounded-full -mr-12 -mt-12" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-golf-green" />
                  <span className="text-sm font-medium text-[var(--text-secondary)]">Handicap Index</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">
                    {currentUser.profile.handicap.current}
                  </span>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-sm font-medium">-1.2</span>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-tertiary)] mt-1">
                  Down from {currentUser.profile.handicap.history[0]} this year
                </p>
              </div>
            </Card>

            {/* Rounds Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-12 -mt-12" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-[var(--text-secondary)]">Rounds Played</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">
                    {currentUser.stats.roundsThisYear}
                  </span>
                  <span className="text-sm text-[var(--text-tertiary)]">this year</span>
                </div>
                <p className="text-xs text-[var(--text-tertiary)] mt-1">
                  Average: {currentUser.stats.averageScore} strokes
                </p>
              </div>
            </Card>

            {/* Best Score Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full -mr-12 -mt-12" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-[var(--text-secondary)]">Personal Best</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">
                    {currentUser.stats.bestScore}
                  </span>
                  <span className="text-sm text-[var(--text-tertiary)]">strokes</span>
                </div>
                <p className="text-xs text-[var(--text-tertiary)] mt-1">
                  Set at Black Desert Resort
                </p>
              </div>
            </Card>

            {/* Trophy Balls Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full -mr-12 -mt-12" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-amber-600" />
                  <span className="text-sm font-medium text-[var(--text-secondary)]">Trophy Balls</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">
                    {currentUser.achievements.trophyBalls.filter(t => t.earned).length}
                  </span>
                  <div className="flex items-center gap-1 text-amber-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+2</span>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-tertiary)] mt-1">
                  Last month
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Tour Card & Riley Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tour Card Progress */}
            <Card className="lg:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">Tour Card</h3>
                <span className={cn(
                  "px-3 py-1 rounded-full text-sm font-semibold",
                  currentUser.tourCard.level === 'Gold'
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                )}>
                  {currentUser.tourCard.level}
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[var(--text-secondary)]">Progress to Platinum</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {currentUser.tourCard.xp} / {currentUser.tourCard.nextLevelXp} XP
                  </span>
                </div>
                <ProgressBar
                  value={currentUser.tourCard.xp}
                  max={currentUser.tourCard.nextLevelXp}
                />
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">Global Rank</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    #{currentUser.tourCard.rank.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">Member Number</span>
                  <span className="text-sm font-mono font-semibold text-[var(--text-primary)]">
                    {currentUser.tourCard.memberNumber}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">Member Since</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    Jan 2024
                  </span>
                </div>
              </div>

              <Link href="/tour-card" className="block mt-6">
                <Button variant="ghost" className="w-full justify-center">
                  View Full Tour Card
                </Button>
              </Link>
            </Card>

            {/* Riley's Daily Tip */}
            <Card className="lg:col-span-2 bg-gradient-to-br from-golf-green-pale via-white to-golf-green-pale/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-golf-green to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      Riley&apos;s Daily Insight
                    </h3>
                    <span className="px-2 py-0.5 bg-golf-green/20 text-golf-green text-xs font-semibold rounded-full">
                      NEW
                    </span>
                  </div>
                  <p className="text-[var(--text-primary)] leading-relaxed mb-4">
                    {rileyGreeting}
                  </p>
                  <div className="flex items-center gap-3">
                    <Link href="/my-caddy">
                      <Button className="gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Chat with Riley
                      </Button>
                    </Link>
                    <Link href="/my-caddy">
                      <Button variant="ghost" className="gap-2">
                        View All Tips
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/journal">
              <Card hover className="text-center h-full">
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-golf-green" />
                <h4 className="font-medium text-sm text-[var(--text-primary)]">My Journal</h4>
              </Card>
            </Link>
            <Link href="/my-caddy">
              <Card hover className="text-center h-full">
                <MessageSquare className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h4 className="font-medium text-sm text-[var(--text-primary)]">Ask Riley</h4>
              </Card>
            </Link>
            <Link href="/courses">
              <Card hover className="text-center h-full">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-orange-600" />
                <h4 className="font-medium text-sm text-[var(--text-primary)]">Find Courses</h4>
              </Card>
            </Link>
            <Link href="/community">
              <Card hover className="text-center h-full">
                <Users className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                <h4 className="font-medium text-sm text-[var(--text-primary)]">Community</h4>
              </Card>
            </Link>
            <Link href="/pro-shop">
              <Card hover className="text-center h-full">
                <Trophy className="w-8 h-8 mx-auto mb-3 text-amber-600" />
                <h4 className="font-medium text-sm text-[var(--text-primary)]">Pro Shop</h4>
              </Card>
            </Link>
            <Link href="/tour-card">
              <Card hover className="text-center h-full">
                <Award className="w-8 h-8 mx-auto mb-3 text-emerald-600" />
                <h4 className="font-medium text-sm text-[var(--text-primary)]">Tour Card</h4>
              </Card>
            </Link>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Recent Rounds</h2>
            <Link href="/journal">
              <Button variant="ghost" className="gap-2">
                View All Rounds
                <span className="text-lg">→</span>
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jasonRecentRounds.slice(0, 3).map((round) => (
              <Card key={round.id} hover className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-[var(--text-primary)] mb-1">
                      {round.course}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {calculateDaysAgo(round.date)}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-golf-green">{round.score}</div>
                    <div className="text-xs text-[var(--text-secondary)]">Par {round.par}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--text-primary)]">{round.stats.putts}</div>
                    <div className="text-xs text-[var(--text-secondary)]">Putts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--text-primary)]">{round.stats.fairways}</div>
                    <div className="text-xs text-[var(--text-secondary)]">Fairways</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--text-primary)]">{round.stats.greens}</div>
                    <div className="text-xs text-[var(--text-secondary)]">GIR</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Performance Insights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Performance Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-4">Strengths</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">Putting Average</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '85%' }} />
                    </div>
                    <span className="text-sm font-semibold text-green-600">32.1</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">GIR Percentage</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '68%' }} />
                    </div>
                    <span className="text-sm font-semibold text-green-600">68%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">Scrambling</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '72%' }} />
                    </div>
                    <span className="text-sm font-semibold text-green-600">72%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-4">Areas to Improve</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">Driving Accuracy</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '58%' }} />
                    </div>
                    <span className="text-sm font-semibold text-amber-600">58%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">Sand Saves</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '45%' }} />
                    </div>
                    <span className="text-sm font-semibold text-amber-600">45%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">3-Putt Avoidance</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '88%' }} />
                    </div>
                    <span className="text-sm font-semibold text-amber-600">88%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
