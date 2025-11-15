import { Course } from "./types";

export const utahCourses: Course[] = [
  {
    id: "fox-hollow",
    name: "Fox Hollow Golf Course",
    location: {
      address: "1400 N 200 E, American Fork, UT 84003",
      city: "American Fork",
      region: "Utah Valley",
      coordinates: { lat: 40.4137, lng: -111.7677 },
    },
    details: {
      holes: 18,
      par: 72,
      yardage: {
        championship: 7016,
        mens: 6574,
        womens: 5404,
      },
      slope: 130,
      rating: 72.3,
      architect: "Gene Bates",
      yearBuilt: 1993,
    },
    ratings: {
      overall: 4.5,
      conditions: 4.6,
      food: 4.2,
      service: 4.7,
      value: 4.4,
      pace: 3.8,
      totalReviews: 234,
    },
    pricing: {
      weekday: { morning: 45, afternoon: 38, twilight: 28 },
      weekend: { morning: 58, afternoon: 48, twilight: 35 },
    },
    amenities: [
      "Driving Range",
      "Practice Green",
      "Pro Shop",
      "Restaurant",
      "Cart Rental",
    ],
    highlights: {
      signatureHole: 7,
      description: "Elevated tee with stunning mountain views",
      localTip: "Book early morning to avoid afternoon winds",
    },
    images: [
      "/courses/fox-hollow-hero.jpg",
      "/courses/fox-hollow-hole7.jpg",
      "/courses/fox-hollow-clubhouse.jpg",
    ],
  },
  {
    id: "black-desert",
    name: "Black Desert Resort",
    location: {
      address: "1500 Black Desert Dr, Ivins, UT 84738",
      city: "Ivins",
      region: "Southern Utah",
      coordinates: { lat: 37.1586, lng: -113.6794 },
    },
    details: {
      holes: 18,
      par: 72,
      yardage: {
        championship: 7400,
        mens: 6800,
        womens: 5600,
      },
      slope: 142,
      rating: 74.8,
      architect: "Tom Weiskopf",
      yearBuilt: 2022,
    },
    ratings: {
      overall: 4.8,
      conditions: 4.9,
      food: 4.6,
      service: 4.8,
      value: 3.9,
      pace: 4.2,
      totalReviews: 189,
    },
    pricing: {
      weekday: { morning: 125, afternoon: 95, twilight: 75 },
      weekend: { morning: 165, afternoon: 125, twilight: 95 },
    },
    amenities: [
      "Driving Range",
      "Short Game Area",
      "Pro Shop",
      "Fine Dining",
      "Caddie Service",
    ],
    highlights: {
      signatureHole: 15,
      description: "Desert canyon carry with red rock backdrop",
      localTip: "Stay left on #7, the desert swallows everything right",
    },
  },
  {
    id: "sand-hollow",
    name: "Sand Hollow Resort",
    location: {
      address: "5625 W Clubhouse Dr, Hurricane, UT 84737",
      city: "Hurricane",
      region: "Southern Utah",
      coordinates: { lat: 37.1019, lng: -113.3847 },
    },
    details: {
      holes: 36,
      par: 72,
      yardage: {
        championship: 7315,
        mens: 6900,
        womens: 5700,
      },
      slope: 137,
      rating: 73.6,
      architect: "John Fought",
      yearBuilt: 2008,
    },
    ratings: {
      overall: 4.7,
      conditions: 4.7,
      food: 4.4,
      service: 4.6,
      value: 4.3,
      pace: 3.9,
      totalReviews: 412,
    },
    pricing: {
      weekday: { morning: 95, afternoon: 75, twilight: 55 },
      weekend: { morning: 115, afternoon: 95, twilight: 65 },
    },
    amenities: [
      "Driving Range",
      "Practice Green",
      "Pro Shop",
      "Restaurant",
      "Cart Rental",
    ],
    highlights: {
      signatureHole: 5,
      description: "Island green surrounded by red sand",
      localTip: "Championship course plays tough, Links is more forgiving",
    },
  },
  {
    id: "coral-canyon",
    name: "Coral Canyon Golf Club",
    location: {
      address: "1925 Canyon Greens Dr, Washington, UT 84780",
      city: "Washington",
      region: "Southern Utah",
      coordinates: { lat: 37.1308, lng: -113.4608 },
    },
    details: {
      holes: 18,
      par: 72,
      yardage: {
        championship: 7200,
        mens: 6650,
        womens: 5350,
      },
      slope: 138,
      rating: 73.2,
      architect: "Keith Foster",
      yearBuilt: 2005,
    },
    ratings: {
      overall: 4.6,
      conditions: 4.5,
      food: 4.3,
      service: 4.4,
      value: 4.5,
      pace: 4.1,
      totalReviews: 298,
    },
    pricing: {
      weekday: { morning: 85, afternoon: 70, twilight: 50 },
      weekend: { morning: 105, afternoon: 85, twilight: 60 },
    },
    amenities: [
      "Driving Range",
      "Practice Green",
      "Pro Shop",
      "Restaurant",
    ],
    highlights: {
      signatureHole: 17,
      description: "Par 3 over red rock canyon",
      localTip: "Wind is a factor on the back nine",
    },
  },
  {
    id: "entrada",
    name: "Entrada at Snow Canyon",
    location: {
      address: "2537 W Entrada Trail, St. George, UT 84770",
      city: "St. George",
      region: "Southern Utah",
      coordinates: { lat: 37.1969, lng: -113.6411 },
    },
    details: {
      holes: 18,
      par: 72,
      yardage: {
        championship: 7150,
        mens: 6550,
        womens: 5200,
      },
      slope: 135,
      rating: 72.8,
      architect: "Johnny Miller",
      yearBuilt: 2001,
    },
    ratings: {
      overall: 4.7,
      conditions: 4.6,
      food: 4.4,
      service: 4.5,
      value: 4.2,
      pace: 4.0,
      totalReviews: 356,
    },
    pricing: {
      weekday: { morning: 90, afternoon: 75, twilight: 55 },
      weekend: { morning: 110, afternoon: 90, twilight: 65 },
    },
    amenities: [
      "Driving Range",
      "Practice Green",
      "Pro Shop",
      "Restaurant",
    ],
    highlights: {
      signatureHole: 8,
      description: "Downhill par 3 with lava rock backdrop",
      localTip: "Play in the afternoon for dramatic shadows on red rocks",
    },
  },
  {
    id: "sunbrook",
    name: "SunBrook Golf Club",
    location: {
      address: "2366 W Sunbrook Dr, St. George, UT 84770",
      city: "St. George",
      region: "Southern Utah",
      coordinates: { lat: 37.0772, lng: -113.6167 },
    },
    details: {
      holes: 27,
      par: 72,
      yardage: {
        championship: 6900,
        mens: 6400,
        womens: 5100,
      },
      slope: 128,
      rating: 71.5,
      architect: "Ted Robinson Sr.",
      yearBuilt: 1991,
    },
    ratings: {
      overall: 4.3,
      conditions: 4.2,
      food: 4.0,
      service: 4.3,
      value: 4.6,
      pace: 3.7,
      totalReviews: 421,
    },
    pricing: {
      weekday: { morning: 55, afternoon: 45, twilight: 35 },
      weekend: { morning: 70, afternoon: 55, twilight: 40 },
    },
    amenities: [
      "Driving Range",
      "Practice Green",
      "Pro Shop",
      "Snack Bar",
    ],
    highlights: {
      signatureHole: 9,
      description: "Water carries on three 9-hole courses",
      localTip: "Great value, especially for twilight golf",
    },
  },
  {
    id: "sky-mountain",
    name: "Sky Mountain Golf Course",
    location: {
      address: "1030 N 2600 W, Hurricane, UT 84737",
      city: "Hurricane",
      region: "Southern Utah",
      coordinates: { lat: 37.1844, lng: -113.3311 },
    },
    details: {
      holes: 18,
      par: 72,
      yardage: {
        championship: 6808,
        mens: 6308,
        womens: 5208,
      },
      slope: 126,
      rating: 70.8,
      architect: "Keith Foster",
      yearBuilt: 2003,
    },
    ratings: {
      overall: 4.4,
      conditions: 4.3,
      food: 4.1,
      service: 4.2,
      value: 4.7,
      pace: 4.0,
      totalReviews: 267,
    },
    pricing: {
      weekday: { morning: 60, afternoon: 50, twilight: 40 },
      weekend: { morning: 75, afternoon: 60, twilight: 45 },
    },
    amenities: [
      "Driving Range",
      "Practice Green",
      "Pro Shop",
      "Snack Bar",
    ],
    highlights: {
      signatureHole: 18,
      description: "Finishing hole with panoramic views",
      localTip: "Best bang for your buck in the area",
    },
  },
  {
    id: "the-ledges",
    name: "The Ledges Golf Club",
    location: {
      address: "1585 N Ledges Pkwy, St. George, UT 84770",
      city: "St. George",
      region: "Southern Utah",
      coordinates: { lat: 37.1472, lng: -113.5742 },
    },
    details: {
      holes: 18,
      par: 71,
      yardage: {
        championship: 7200,
        mens: 6600,
        womens: 5300,
      },
      slope: 140,
      rating: 74.1,
      architect: "Matt Dye",
      yearBuilt: 2010,
    },
    ratings: {
      overall: 4.9,
      conditions: 4.9,
      food: 4.7,
      service: 4.8,
      value: 4.0,
      pace: 4.3,
      totalReviews: 178,
    },
    pricing: {
      weekday: { morning: 140, afternoon: 110, twilight: 85 },
      weekend: { morning: 175, afternoon: 140, twilight: 100 },
    },
    amenities: [
      "Driving Range",
      "Short Game Area",
      "Pro Shop",
      "Fine Dining",
      "Caddie Service",
    ],
    highlights: {
      signatureHole: 15,
      description: "Elevated green with 360-degree views",
      localTip: "Premier course, worth the premium price",
    },
  },
];

export async function getCourses(): Promise<Course[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return utahCourses;
}

export async function getCourseById(id: string): Promise<Course | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return utahCourses.find((course) => course.id === id) || null;
}

export async function searchCourses(query: string): Promise<Course[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const lowerQuery = query.toLowerCase();
  return utahCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(lowerQuery) ||
      course.location.city.toLowerCase().includes(lowerQuery) ||
      course.location.region.toLowerCase().includes(lowerQuery)
  );
}
