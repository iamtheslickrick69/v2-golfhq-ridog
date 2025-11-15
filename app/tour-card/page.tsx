"use client";

import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, Award } from "lucide-react";
import { pageTransition, trophyEarned } from "@/lib/animations/presets";
import { Card, ProgressBar, Badge } from "@/components/ui";
import { useUserStore } from "@/lib/stores/userStore";

export default function TourCardPage() {
  const { user } = useUserStore();

  const levels = [
    { name: "Bronze", xp: 0, color: "bg-orange-400" },
    { name: "Silver", xp: 2500, color: "bg-gray-400" },
    { name: "Gold", xp: 5000, color: "bg-yellow-400" },
    { name: "Platinum", xp: 10000, color: "bg-blue-400" },
    { name: "Black Card", xp: 25000, color: "bg-black" },
  ];

  const earnedBalls = user.achievements.trophyBalls.filter((ball) => ball.earned);
  const unearnedBalls = user.achievements.trophyBalls.filter((ball) => !ball.earned);

  return (
    <motion.div
      className="min-h-screen bg-gradient-soft p-4 md:p-8"
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tour Card
          </h1>
          <p className="text-gray-600 mt-2">
            Level up and unlock exclusive perks
          </p>
        </div>

        {/* Current Level Card */}
        <Card className="mb-8 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-sm font-semibold uppercase mb-2">
                Current Level
              </div>
              <div className="text-4xl font-bold mb-2">
                {user.tourCard.level}
              </div>
              <div className="text-sm opacity-90">
                Member #{user.tourCard.memberNumber}
              </div>
              <div className="text-sm opacity-90 mt-1">
                Rank #{user.tourCard.rank} globally
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="flex justify-between text-sm mb-2">
                <span>{user.tourCard.xp} XP</span>
                <span>{user.tourCard.nextLevelXp} XP</span>
              </div>
              <ProgressBar
                value={user.tourCard.xp}
                max={user.tourCard.nextLevelXp}
                barColor="bg-white"
                className="mb-2"
              />
              <div className="text-sm opacity-90">
                {user.tourCard.nextLevelXp - user.tourCard.xp} XP to next level
              </div>
            </div>
          </div>
        </Card>

        {/* Levels Overview */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">All Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {levels.map((level, index) => (
            <Card
              key={level.name}
              className={`text-center ${
                user.tourCard.level === level.name
                  ? "ring-2 ring-golf-green"
                  : ""
              }`}
            >
              <div
                className={`w-16 h-16 ${level.color} rounded-full mx-auto mb-3 flex items-center justify-center`}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-gray-900">{level.name}</div>
              <div className="text-sm text-gray-600">{level.xp}+ XP</div>
            </Card>
          ))}
        </div>

        {/* Trophy Balls */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Trophy Balls ({earnedBalls.length}/{user.achievements.trophyBalls.length})
        </h2>

        {/* Earned Trophy Balls */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Earned</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {earnedBalls.map((ball) => (
            <motion.div
              key={ball.id}
              variants={trophyEarned}
              initial="initial"
              animate="animate"
            >
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-yellow-400 rounded-xl">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{ball.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {ball.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Earned: {ball.earnedDate}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Unearned Trophy Balls */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Not Yet Earned
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {unearnedBalls.map((ball) => (
            <Card key={ball.id} className="opacity-60">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-gray-200 rounded-xl">
                  <Trophy className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{ball.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {ball.description}
                  </p>
                  <div className="mt-2">
                    <Badge variant="default">{ball.requirement}</Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
