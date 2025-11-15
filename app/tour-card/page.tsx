"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { pageTransition, pageTransitionSettings } from "@/lib/animations";
import { currentUser, trophyBalls } from "@/lib/mock-data";
import { Trophy, Award, TrendingUp, Target } from "lucide-react";

export default function TourCardPage() {
  const levels = [
    { name: 'Bronze', xp: 0, color: 'bg-orange-300' },
    { name: 'Silver', xp: 2500, color: 'bg-gray-300' },
    { name: 'Gold', xp: 5000, color: 'bg-yellow-300' },
    { name: 'Platinum', xp: 10000, color: 'bg-purple-300' },
    { name: 'Black Card', xp: 25000, color: 'bg-black' },
  ];

  const earnedTrophies = trophyBalls.filter(t => t.earned);
  const availableTrophies = trophyBalls.filter(t => !t.earned);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      transition={pageTransitionSettings}
      className="min-h-screen bg-gradient-to-br from-white via-bg-secondary to-bg-tertiary"
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Tour Card 🏆</h1>

        {/* Current Status */}
        <Card className="mb-8 bg-gradient-to-br from-yellow-50 to-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold">{currentUser.tourCard.level} Member</h2>
              <p className="text-gray-600">Rank #{currentUser.tourCard.rank} • {currentUser.tourCard.memberNumber}</p>
            </div>
            <Award className="w-16 h-16 text-yellow-500" />
          </div>
          <ProgressBar
            current={currentUser.tourCard.xp}
            max={currentUser.tourCard.nextLevelXp}
          />
        </Card>

        {/* Level Progression */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Level Progression</h2>
          <div className="space-y-3">
            {levels.map((level, i) => {
              const isUnlocked = currentUser.tourCard.xp >= level.xp;
              const isCurrent = currentUser.tourCard.level === level.name;

              return (
                <Card key={level.name} className={isCurrent ? 'ring-2 ring-golf-green' : ''}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${level.color} rounded-full flex items-center justify-center`}>
                        {isUnlocked ? (
                          <Trophy className="w-6 h-6 text-white" />
                        ) : (
                          <span className="text-white font-bold">{i + 1}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{level.name}</h3>
                        <p className="text-sm text-gray-600">
                          {level.xp.toLocaleString()} XP required
                        </p>
                      </div>
                    </div>
                    {isCurrent && (
                      <span className="px-3 py-1 bg-golf-green text-white rounded-full text-sm font-medium">
                        Current
                      </span>
                    )}
                    {isUnlocked && !isCurrent && (
                      <span className="text-golf-green font-medium">✓ Unlocked</span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Trophy Balls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Earned Trophy Balls ({earnedTrophies.length})</h2>
            <div className="space-y-3">
              {earnedTrophies.map((trophy) => (
                <Card key={trophy.id} className="bg-gradient-to-r from-golf-green-pale to-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-golf-green rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{trophy.name}</h4>
                      <p className="text-sm text-gray-600">{trophy.requirement}</p>
                      {trophy.date && (
                        <p className="text-xs text-gray-500 mt-1">Earned: {trophy.date}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Available Trophy Balls ({availableTrophies.length})</h2>
            <div className="space-y-3">
              {availableTrophies.map((trophy) => (
                <Card key={trophy.id} className="opacity-60">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">{trophy.name}</h4>
                      <p className="text-sm text-gray-600">{trophy.requirement}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
