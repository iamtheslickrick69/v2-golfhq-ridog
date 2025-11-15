"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pageTransition, pageTransitionSettings } from "@/lib/animations";
import { ShoppingBag, Star, Calendar, Award } from "lucide-react";

export default function ProShopPage() {
  const myBag = [
    {
      category: "Driver",
      brand: "TaylorMade",
      model: "Stealth 2",
      year: 2023,
      performance: "+12 yards vs previous driver",
      rating: 5
    },
    {
      category: "Irons",
      brand: "Titleist",
      model: "T100",
      year: 2022,
      performance: "67% GIR",
      rating: 4
    },
    {
      category: "Putter",
      brand: "Scotty Cameron",
      model: "Newport 2",
      year: 2021,
      performance: "1.8 putts per hole",
      rating: 5
    },
  ];

  const instructors = [
    {
      name: "Riley B",
      title: "PGA Professional",
      specialty: "Mental Game & Course Management",
      rate: 120,
      rating: 5.0,
      reviews: 127
    },
    {
      name: "Sarah Chen",
      title: "LPGA Teaching Pro",
      specialty: "Short Game Wizard",
      rate: 95,
      rating: 4.9,
      reviews: 84
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      transition={pageTransitionSettings}
      className="min-h-screen bg-gradient-to-br from-white via-bg-secondary to-bg-tertiary"
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Pro Shop 🛍️</h1>

        {/* My Bag */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Bag</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {myBag.map((club, i) => (
              <Card key={i} hoverable>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-golf-green-pale text-golf-green-dark rounded-full text-sm font-medium">
                      {club.category}
                    </span>
                    <div className="flex items-center">
                      {Array.from({ length: club.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{club.brand}</h3>
                    <p className="text-gray-600">{club.model}</p>
                    <p className="text-sm text-gray-500">{club.year}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-golf-green font-medium">{club.performance}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Book a Lesson</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instructors.map((instructor, i) => (
              <Card key={i} hoverable>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{instructor.name}</h3>
                      <p className="text-gray-600">{instructor.title}</p>
                      <p className="text-sm text-gray-500 mt-1">{instructor.specialty}</p>
                    </div>
                    <Award className="w-8 h-8 text-golf-green" />
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{instructor.rating}</span>
                        <span className="text-sm text-gray-600">({instructor.reviews} reviews)</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">${instructor.rate}/hour</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Lesson
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
