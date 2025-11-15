import { Course } from './types';

export const utahCourses: Course[] = [
  {
    id: "fox-hollow",
    name: "Fox Hollow Golf Course",
    location: {
      address: "1400 N 200 E, American Fork, UT 84003",
      city: "American Fork",
      region: "Utah Valley",
      coordinates: { lat: 40.4137, lng: -111.7677 }
    },
    details: {
      holes: 18,
      par: 72,
      yardage: {
        championship: 7016,
        mens: 6574,
        womens: 5404
      },
      slope: 130,
      rating: 72.3,
      architect: "Gene Bates",
      yearBuilt: 1993
    },
    ratings: {
      overall: 4.5,
      conditions: 4.6,
      food: 4.2,
      service: 4.7,
      value: 4.4,
      pace: 3.8,
      totalReviews: 234
    },
    pricing: {
      weekday: { morning: 45, afternoon: 38, twilight: 28 },
      weekend: { morning: 58, afternoon: 48, twilight: 35 }
    },
    amenities: ["Driving Range", "Practice Green", "Pro Shop", "Restaurant", "Cart Rental"],
    highlights: {
      signatureHole: 7,
      description: "Elevated tee with stunning mountain views",
      localTip: "Book early morning to avoid afternoon winds"
    }
  },
  {
    id: "black-desert",
    name: "Black Desert Resort",
    location: {
      address: "1500 Black Desert Dr, Ivins, UT 84738",
      city: "Ivins",
      region: "Southern Utah",
      coordinates: { lat: 37.1586, lng: -113.6794 }
    },
    details: {
      holes: 18,
      par: 72,
      yardage: {
        championship: 7400,
        mens: 6800,
        womens: 5600
      },
      slope: 142,
      rating: 74.8,
      architect: "Tom Weiskopf",
      yearBuilt: 2022
    },
    ratings: {
      overall: 4.8,
      conditions: 4.9,
      food: 4.6,
      service: 4.8,
      value: 3.9,
      pace: 4.2,
      totalReviews: 189
    },
    pricing: {
      weekday: { morning: 125, afternoon: 95, twilight: 75 },
      weekend: { morning: 165, afternoon: 125, twilight: 95 }
    },
    amenities: ["Driving Range", "Short Game Area", "Pro Shop", "Fine Dining", "Caddie Service"],
    highlights: {
      signatureHole: 15,
      description: "Desert canyon carry with red rock backdrop",
      localTip: "Stay left on #7, the desert swallows everything right"
    }
  },
  {
    id: "sand-hollow",
    name: "Sand Hollow Resort",
    location: {
      address: "5625 W Clubhouse Dr, Hurricane, UT 84737",
      city: "Hurricane",
      region: "Southern Utah",
      coordinates: { lat: 37.1019, lng: -113.3847 }
    },
    details: {
      holes: 36,
      par: 72,
      yardage: {
        championship: 7315,
        mens: 6900,
        womens: 5700
      },
      slope: 137,
      rating: 73.6,
      architect: "John Fought",
      yearBuilt: 2008
    },
    ratings: {
      overall: 4.7,
      conditions: 4.7,
      food: 4.4,
      service: 4.6,
      value: 4.3,
      pace: 3.9,
      totalReviews: 412
    },
    pricing: {
      weekday: { morning: 95, afternoon: 75, twilight: 55 },
      weekend: { morning: 115, afternoon: 95, twilight: 65 }
    },
    amenities: ["Driving Range", "Short Game Area", "Pro Shop", "Restaurant", "Bar"],
    highlights: {
      signatureHole: 5,
      description: "Island green surrounded by red sand",
      localTip: "Championship course plays tough, Links is more forgiving"
    }
  }
];
