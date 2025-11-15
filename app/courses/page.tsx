"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Star, DollarSign } from "lucide-react";
import { pageTransition, staggerContainer, staggerItem } from "@/lib/animations/presets";
import { Card, Input, Badge } from "@/components/ui";
import { utahCourses } from "@/lib/mock-data/courses-data";
import { Course } from "@/lib/mock-data/types";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCourses(utahCourses);
      setLoading(false);
    }, 500);
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.location.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Course Reviews
          </h1>
          <p className="text-gray-600 mt-2">
            The Letterboxd of golf courses - Utah edition
          </p>
        </div>

        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses..."
            className="pl-12"
          />
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card h-64 skeleton" />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {filteredCourses.map((course) => (
              <motion.div key={course.id} variants={staggerItem}>
                <Card hover className="h-full cursor-pointer">
                  <div className="flex flex-col h-full">
                    {/* Course Name and Location */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {course.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        {course.location.city}, {course.location.region}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.ratings.overall)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">
                        {course.ratings.overall}
                      </span>
                      <span className="text-sm text-gray-600">
                        ({course.ratings.totalReviews} reviews)
                      </span>
                    </div>

                    {/* Course Details */}
                    <div className="grid grid-cols-3 gap-2 text-sm mb-4">
                      <div>
                        <div className="text-gray-600">Par</div>
                        <div className="font-semibold">{course.details.par}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Yardage</div>
                        <div className="font-semibold">
                          {course.details.yardage.mens}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-600">Slope</div>
                        <div className="font-semibold">{course.details.slope}</div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-2 mb-4">
                      <DollarSign className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-600">
                        Weekend: ${course.pricing.weekend.morning}
                      </span>
                    </div>

                    {/* Signature Hole */}
                    <div className="bg-golf-green-pale p-3 rounded-xl">
                      <div className="text-xs font-semibold text-golf-green-dark uppercase mb-1">
                        Signature Hole #{course.highlights.signatureHole}
                      </div>
                      <div className="text-sm text-gray-700">
                        {course.highlights.description}
                      </div>
                    </div>

                    {/* Local Tip */}
                    <div className="mt-3">
                      <Badge variant="info">Local Tip</Badge>
                      <p className="text-sm text-gray-600 mt-2 italic">
                        "{course.highlights.localTip}"
                      </p>
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
