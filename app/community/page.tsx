"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Calendar, Target } from "lucide-react";
import { pageTransition, staggerContainer, staggerItem } from "@/lib/animations/presets";
import { Card, Badge, Button } from "@/components/ui";
import { activeCompetitions } from "@/lib/mock-data/competitions-data";
import { Competition } from "@/lib/mock-data/types";

export default function CommunityPage() {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCompetitions(activeCompetitions);
      setLoading(false);
    }, 500);
  }, []);

  const getStatusBadge = (status: string) => {
    if (status === "active") return <Badge variant="success">Active</Badge>;
    if (status === "upcoming") return <Badge variant="info">Upcoming</Badge>;
    return <Badge variant="default">Completed</Badge>;
  };

  const getTypeIcon = (type: string) => {
    if (type === "tournament") return <Trophy className="w-5 h-5" />;
    if (type === "league") return <Users className="w-5 h-5" />;
    return <Target className="w-5 h-5" />;
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
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Stymie League
          </h1>
          <p className="text-gray-600 mt-2">
            Compete in tournaments, join leagues, and find playing partners
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1,247</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-xl">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-sm text-gray-600">Active Competitions</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Events This Month</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Competitions */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Competitions & Events
        </h2>
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
            {competitions.map((comp) => (
              <motion.div key={comp.id} variants={staggerItem}>
                <Card hover className="cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-golf-green-pale rounded-xl text-golf-green">
                        {getTypeIcon(comp.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {comp.name}
                          </h3>
                          {getStatusBadge(comp.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {comp.description}
                        </p>
                        {comp.date && (
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            {comp.date}
                          </div>
                        )}
                        {comp.startDate && comp.endDate && (
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            {comp.startDate} - {comp.endDate}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-golf-green">
                          {comp.participants}
                        </div>
                        <div className="text-sm text-gray-600">Participants</div>
                      </div>
                      {comp.status === "active" || comp.status === "upcoming" ? (
                        <Button size="sm">Join</Button>
                      ) : null}
                    </div>
                  </div>

                  {/* Requirements or Prizes */}
                  {comp.requirements && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm font-semibold text-gray-700 mb-2">
                        Requirements:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {comp.requirements.map((req, i) => (
                          <Badge key={i} variant="default">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {comp.prizes && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm font-semibold text-gray-700 mb-2">
                        Prizes:
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        {comp.prizes.first && (
                          <div>
                            <div className="text-gray-600">1st Place</div>
                            <div className="font-semibold">{comp.prizes.first}</div>
                          </div>
                        )}
                        {comp.prizes.second && (
                          <div>
                            <div className="text-gray-600">2nd Place</div>
                            <div className="font-semibold">{comp.prizes.second}</div>
                          </div>
                        )}
                        {comp.prizes.third && (
                          <div>
                            <div className="text-gray-600">3rd Place</div>
                            <div className="font-semibold">{comp.prizes.third}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
