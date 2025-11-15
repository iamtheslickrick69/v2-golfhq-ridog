"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Calendar, Award } from "lucide-react";
import { pageTransition, staggerContainer, staggerItem } from "@/lib/animations/presets";
import { Card, Badge, Button } from "@/components/ui";
import { myBag } from "@/lib/mock-data/equipment-data";
import { instructors } from "@/lib/mock-data/instructors-data";
import { Equipment, Instructor } from "@/lib/mock-data/types";

export default function ProShopPage() {
  const [bag, setBag] = useState<Equipment[]>([]);
  const [teachers, setTeachers] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBag(myBag);
      setTeachers(instructors);
      setLoading(false);
    }, 500);
  }, []);

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
            Pro Shop
          </h1>
          <p className="text-gray-600 mt-2">
            Track your gear, book instructors, and find deals
          </p>
        </div>

        {/* My Bag Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">My Bag</h2>
            <Button variant="secondary" size="sm">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add Club
            </Button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card h-48 skeleton" />
              ))}
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {bag.map((club) => (
                <motion.div key={club.id} variants={staggerItem}>
                  <Card hover className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <Badge variant="default">{club.category}</Badge>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < club.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900">
                        {club.brand} {club.model}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{club.year}</p>

                      <div className="flex-1">
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="font-semibold">{club.rounds}</span> rounds
                        </div>
                        {club.notes && (
                          <p className="text-sm text-gray-700 italic">
                            "{club.notes}"
                          </p>
                        )}
                      </div>

                      {/* Stats */}
                      {club.stats && Object.keys(club.stats).length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {Object.entries(club.stats).slice(0, 2).map(([key, value]) => (
                              <div key={key}>
                                <div className="text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </div>
                                <div className="font-semibold">{String(value)}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Instructors Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Book an Instructor
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="glass-card h-64 skeleton" />
              ))}
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {teachers.slice(0, 4).map((instructor) => (
                <motion.div key={instructor.id} variants={staggerItem}>
                  <Card hover className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {instructor.name}
                          </h3>
                          <p className="text-sm text-gray-600">{instructor.title}</p>
                          <Badge variant="success" className="mt-1">
                            {instructor.certification}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{instructor.rating}</span>
                          <span className="text-sm text-gray-600">
                            ({instructor.reviews})
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 mb-3">{instructor.bio}</p>

                      <div className="mb-3">
                        <div className="text-sm font-semibold text-gray-700 mb-1">
                          Specialties:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {instructor.specialties.slice(0, 3).map((specialty, i) => (
                            <Badge key={i} variant="info">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm mb-4">
                        <div>
                          <div className="text-gray-600">Hourly Rate</div>
                          <div className="font-bold text-golf-green">
                            ${instructor.hourlyRate}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600">Experience</div>
                          <div className="font-semibold">{instructor.experience}</div>
                        </div>
                      </div>

                      <Button className="w-full mt-auto">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Lesson
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
