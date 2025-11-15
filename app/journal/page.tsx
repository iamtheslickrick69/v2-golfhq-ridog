"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Calendar, TrendingDown, Trophy } from "lucide-react";
import Link from "next/link";
import { pageTransition, staggerContainer, staggerItem } from "@/lib/animations/presets";
import { Card, Button, Badge } from "@/components/ui";
import { jasonRecentRounds } from "@/lib/mock-data/rounds-data";
import { Round } from "@/lib/mock-data/types";

export default function JournalPage() {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading rounds
    setTimeout(() => {
      setRounds(jasonRecentRounds);
      setLoading(false);
    }, 500);
  }, []);

  const getScoreColor = (differential: string) => {
    const diff = parseInt(differential);
    if (diff <= 0) return "text-green-600";
    if (diff <= 5) return "text-blue-600";
    if (diff <= 10) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-soft p-4 md:p-8"
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Golf Journal
            </h1>
            <p className="text-gray-600 mt-2">
              Track your rounds, earn trophy balls, see your progress
            </p>
          </div>
          <Link href="/journal/new">
            <Button>
              <Plus className="w-5 h-5 mr-2" />
              Track Round
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">47</div>
                <div className="text-sm text-gray-600">Rounds This Year</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-xl">
                <TrendingDown className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">79</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">74</div>
                <div className="text-sm text-gray-600">Best Score</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4/18</div>
                <div className="text-sm text-gray-600">Trophy Balls</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Rounds */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Rounds</h2>
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card h-32 skeleton" />
            ))}
          </div>
        ) : (
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {rounds.map((round) => (
              <motion.div key={round.id} variants={staggerItem}>
                <Card hover className="cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Course and Date */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {round.course}
                      </h3>
                      <p className="text-sm text-gray-600">{round.date}</p>
                      {round.notes && (
                        <p className="text-sm text-gray-600 mt-1 italic">
                          "{round.notes}"
                        </p>
                      )}
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div
                          className={`text-3xl font-bold ${getScoreColor(
                            round.differential
                          )}`}
                        >
                          {round.score}
                        </div>
                        <div className="text-sm text-gray-600">
                          {round.differential} to par
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-gray-600">Putts</div>
                          <div className="font-semibold">{round.stats.putts}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Fairways</div>
                          <div className="font-semibold">{round.stats.fairways}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Greens</div>
                          <div className="font-semibold">{round.stats.greens}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">XP</div>
                          <div className="font-semibold text-golf-green">
                            +{round.xpEarned}
                          </div>
                        </div>
                      </div>

                      {/* Trophy Balls */}
                      {round.trophyBalls.length > 0 && (
                        <div>
                          <Badge variant="warning">
                            <Trophy className="w-3 h-3 mr-1" />
                            Trophy Ball!
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
