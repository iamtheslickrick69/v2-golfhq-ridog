"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pageTransition, pageTransitionSettings } from "@/lib/animations";
import { jasonRecentRounds } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { Plus, Upload, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function JournalPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      transition={pageTransitionSettings}
      className="min-h-screen bg-gradient-to-br from-white via-bg-secondary to-bg-tertiary"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Golf Journal 📖</h1>
          <div className="flex space-x-3">
            <Button variant="secondary">
              <Upload className="w-5 h-5 mr-2" />
              Upload Scorecard
            </Button>
            <Link href="/journal/new">
              <Button>
                <Plus className="w-5 h-5 mr-2" />
                New Round
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-golf-green">{jasonRecentRounds.length}</div>
              <div className="text-sm text-gray-600 mt-1">Total Rounds</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {Math.round(jasonRecentRounds.reduce((sum, r) => sum + r.score, 0) / jasonRecentRounds.length)}
              </div>
              <div className="text-sm text-gray-600 mt-1">Average Score</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {Math.min(...jasonRecentRounds.map(r => r.score))}
              </div>
              <div className="text-sm text-gray-600 mt-1">Best Round</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="flex items-center justify-center text-3xl font-bold text-green-600">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-sm text-gray-600 mt-1">Improving</div>
            </div>
          </Card>
        </div>

        {/* Rounds List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Your Rounds</h2>
          {jasonRecentRounds.map((round) => (
            <Card key={round.id} hoverable>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{formatDate(round.date)}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{round.course}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Score:</span>{" "}
                      <span className="font-medium">{round.score} ({round.differential})</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Putts:</span>{" "}
                      <span className="font-medium">{round.stats.putts}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Fairways:</span>{" "}
                      <span className="font-medium">{round.stats.fairways}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">GIR:</span>{" "}
                      <span className="font-medium">{round.stats.greens}</span>
                    </div>
                  </div>
                  {round.notes && (
                    <p className="text-sm text-gray-600 mt-3 italic">{round.notes}</p>
                  )}
                </div>
                <div className="text-right ml-4">
                  <div className="text-4xl font-bold text-golf-green">{round.score}</div>
                  <div className="text-sm text-gray-600">Par {round.par}</div>
                  <div className="mt-2 text-xs text-gray-500">+{round.xpEarned} XP</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
