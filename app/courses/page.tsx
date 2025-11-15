"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { pageTransition, pageTransitionSettings } from "@/lib/animations";
import { utahCourses } from "@/lib/mock-data";
import { MapPin, Star, DollarSign } from "lucide-react";

export default function CoursesPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      transition={pageTransitionSettings}
      className="min-h-screen bg-gradient-to-br from-white via-bg-secondary to-bg-tertiary"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Course Reviews 🏌️</h1>
          <p className="text-gray-600">The Letterboxd of golf courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {utahCourses.map((course) => (
            <Card key={course.id} hoverable>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {course.location.city}, {course.location.region}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.ratings.overall}</span>
                    <span className="text-sm text-gray-600">
                      ({course.ratings.totalReviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-600">Par:</span>{" "}
                    <span className="font-medium">{course.details.par}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Holes:</span>{" "}
                    <span className="font-medium">{course.details.holes}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Slope:</span>{" "}
                    <span className="font-medium">{course.details.slope}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Yardage:</span>{" "}
                    <span className="font-medium">{course.details.yardage.mens.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>
                      ${course.pricing.weekday.morning} - ${course.pricing.weekend.morning}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "{course.highlights.localTip}"
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.amenities.slice(0, 3).map((amenity, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-golf-green-pale text-golf-green-dark text-xs rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
