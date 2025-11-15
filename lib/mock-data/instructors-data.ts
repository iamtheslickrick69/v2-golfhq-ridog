import { Instructor } from "./types";

export const instructors: Instructor[] = [
  {
    id: "inst_001",
    name: "Riley B",
    title: "PGA Professional",
    certification: "PGA Class A",
    specialties: ["Mental Game", "Course Management", "Full Swing"],
    experience: "10+ years",
    rating: 5.0,
    reviews: 127,
    hourlyRate: 120,
    packageRates: {
      "3 Lessons": 330,
      "5 Lessons": 525,
      "10 Lessons": 1000,
    },
    availability: {
      monday: ["9:00", "10:00", "2:00", "3:00"],
      wednesday: ["9:00", "10:00", "11:00", "2:00"],
      friday: ["9:00", "10:00", "2:00", "3:00", "4:00"],
      saturday: ["8:00", "9:00", "10:00", "11:00"],
    },
    bio: "Your AI caddy in real life. Former mini-tour player with a passion for helping golfers reach their potential.",
    location: "Fox Hollow Golf Course",
    images: ["/instructors/riley-b.jpg"],
    studentSuccess: [
      "Average handicap improvement: 4.2 strokes",
      "87% of students break their goal score within 6 months",
    ],
  },
  {
    id: "inst_002",
    name: "Sarah Chen",
    title: "LPGA Teaching Professional",
    certification: "LPGA Class A",
    specialties: ["Short Game", "Putting", "Wedge Play"],
    experience: "8 years",
    rating: 4.9,
    reviews: 94,
    hourlyRate: 95,
    packageRates: {
      "3 Lessons": 260,
      "5 Lessons": 425,
      "10 Lessons": 800,
    },
    availability: {
      tuesday: ["9:00", "10:00", "11:00", "2:00"],
      thursday: ["9:00", "10:00", "2:00", "3:00"],
      saturday: ["8:00", "9:00", "10:00"],
      sunday: ["8:00", "9:00", "10:00", "11:00"],
    },
    bio: "Short game wizard. Former college All-American specializing in the scoring zone.",
    location: "Black Desert Resort",
    studentSuccess: [
      "Students average 5 strokes improvement around the greens",
      "92% student satisfaction rating",
    ],
  },
  {
    id: "inst_003",
    name: "Mike Thompson",
    title: "PGA Professional",
    certification: "PGA Class A",
    specialties: ["Ball Flight Laws", "TrackMan Analysis", "Club Fitting"],
    experience: "12 years",
    rating: 4.8,
    reviews: 156,
    hourlyRate: 110,
    packageRates: {
      "3 Lessons": 300,
      "5 Lessons": 490,
      "10 Lessons": 950,
    },
    availability: {
      monday: ["10:00", "11:00", "2:00", "3:00", "4:00"],
      tuesday: ["10:00", "11:00", "2:00", "3:00"],
      wednesday: ["2:00", "3:00", "4:00"],
      friday: ["10:00", "11:00", "2:00", "3:00"],
    },
    bio: "Data-driven instruction using TrackMan technology. Let's optimize your ball flight.",
    location: "Sand Hollow Resort",
    studentSuccess: [
      "15+ yards added on average with driver fitting",
      "Technology-backed results every lesson",
    ],
  },
  {
    id: "inst_004",
    name: "David Martinez",
    title: "PGA Professional",
    certification: "PGA Class A",
    specialties: ["Junior Golf", "Fundamentals", "Beginner-Friendly"],
    experience: "6 years",
    rating: 4.7,
    reviews: 78,
    hourlyRate: 80,
    packageRates: {
      "3 Lessons": 220,
      "5 Lessons": 360,
      "10 Lessons": 700,
    },
    availability: {
      monday: ["9:00", "10:00", "11:00"],
      wednesday: ["9:00", "10:00", "11:00", "2:00"],
      thursday: ["9:00", "10:00", "11:00", "2:00", "3:00"],
      saturday: ["9:00", "10:00", "11:00", "12:00"],
    },
    bio: "Patient, encouraging instructor perfect for beginners and juniors. Let's build a solid foundation.",
    location: "SunBrook Golf Club",
    studentSuccess: [
      "Helped 50+ juniors develop a love for the game",
      "Beginner-friendly approach with proven results",
    ],
  },
  {
    id: "inst_005",
    name: "Jennifer Williams",
    title: "LPGA Teaching Professional",
    certification: "LPGA Class A",
    specialties: ["Biomechanics", "Power Training", "Full Swing"],
    experience: "9 years",
    rating: 4.9,
    reviews: 112,
    hourlyRate: 105,
    packageRates: {
      "3 Lessons": 290,
      "5 Lessons": 470,
      "10 Lessons": 900,
    },
    availability: {
      tuesday: ["8:00", "9:00", "10:00", "2:00"],
      wednesday: ["8:00", "9:00", "10:00"],
      friday: ["8:00", "9:00", "10:00", "2:00", "3:00"],
      sunday: ["8:00", "9:00", "10:00"],
    },
    bio: "Former D1 golfer specializing in efficient power generation. Add distance without adding effort.",
    location: "The Ledges Golf Club",
    studentSuccess: [
      "Students gain 20+ yards on average",
      "TPI certified for body-swing connection",
    ],
  },
];

export async function getInstructors(): Promise<Instructor[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return instructors;
}

export async function getInstructorById(id: string): Promise<Instructor | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return instructors.find((instructor) => instructor.id === id) || null;
}

export async function searchInstructors(specialty: string): Promise<Instructor[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const lowerSpecialty = specialty.toLowerCase();
  return instructors.filter((instructor) =>
    instructor.specialties.some((s) => s.toLowerCase().includes(lowerSpecialty))
  );
}

export async function getInstructorsByLocation(
  location: string
): Promise<Instructor[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return instructors.filter((instructor) =>
    instructor.location.toLowerCase().includes(location.toLowerCase())
  );
}
