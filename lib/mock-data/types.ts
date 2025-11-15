// Type definitions for all mock data

export interface User {
  id: string;
  name: string;
  email: string;
  location: {
    city: string;
    state: string;
    coordinates: { lat: number; lng: number };
  };
  profile: {
    avatar: string;
    memberSince: string;
    handicap: {
      current: number;
      trend: "decreasing" | "stable" | "increasing";
      history: number[];
    };
  };
  tourCard: {
    level: "Bronze" | "Silver" | "Gold" | "Platinum" | "Black Card";
    xp: number;
    nextLevelXp: number;
    rank: number;
    memberNumber: string;
  };
  stats: {
    roundsThisYear: number;
    roundsThisMonth: number;
    averageScore: number;
    bestScore: number;
    coursesPlayed: number;
    favoriteTime: "morning" | "afternoon" | "twilight";
    playFrequency: string;
  };
  achievements: {
    trophyBalls: TrophyBall[];
    streaks: {
      current: number;
      longest: number;
      weeklyRounds: number;
    };
  };
  preferences: {
    notifications: boolean;
    rileyTips: "daily" | "weekly" | "never";
    courseAlerts: string[];
    playingPartners: "open" | "friends" | "private";
  };
}

export interface TrophyBall {
  id: string;
  name: string;
  description: string;
  requirement: string;
  earned: boolean;
  earnedDate?: string;
  icon?: string;
}

export interface Course {
  id: string;
  name: string;
  location: {
    address: string;
    city: string;
    region: string;
    coordinates: { lat: number; lng: number };
  };
  details: {
    holes: number;
    par: number;
    yardage: {
      championship: number;
      mens: number;
      womens: number;
    };
    slope: number;
    rating: number;
    architect: string;
    yearBuilt: number;
  };
  ratings: {
    overall: number;
    conditions: number;
    food: number;
    service: number;
    value: number;
    pace: number;
    totalReviews: number;
  };
  pricing: {
    weekday: { morning: number; afternoon: number; twilight: number };
    weekend: { morning: number; afternoon: number; twilight: number };
  };
  amenities: string[];
  highlights: {
    signatureHole: number;
    description: string;
    localTip: string;
  };
  images?: string[];
}

export interface Round {
  id: string;
  date: string;
  course: string;
  score: number;
  par: number;
  differential: string;
  holes: number[];
  stats: {
    putts: number;
    fairways: string;
    greens: string;
    penalties: number;
    birdies?: number;
    pars?: number;
    bogeys?: number;
    doubleBogeys?: number;
  };
  conditions: string;
  playingPartners: string[];
  notes: string;
  images?: string[];
  xpEarned: number;
  trophyBalls: string[];
}

export interface RileyResponse {
  category: string;
  responses: string[];
}

export interface Competition {
  id: string;
  name: string;
  description: string;
  type: "challenge" | "tournament" | "league";
  status: "active" | "upcoming" | "completed";
  startDate?: string;
  endDate?: string;
  date?: string;
  course?: string;
  format?: string;
  participants: number;
  maxTeams?: number;
  entryFee?: number;
  requirements?: string[];
  progress?: Record<string, any>;
  rewards?: {
    xp?: number;
    trophyBall?: string;
    title?: string;
  };
  prizes?: {
    first?: string;
    second?: string;
    third?: string;
  };
}

export interface Equipment {
  id: string;
  category: "Driver" | "Irons" | "Wedges" | "Putter" | "Hybrid" | "Fairway Wood";
  brand: string;
  model: string;
  year: number;
  purchaseDate: string;
  rounds: number;
  stats: Record<string, any>;
  notes: string;
  rating: number;
  images?: string[];
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  certification: string;
  specialties: string[];
  experience: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  packageRates: Record<string, number>;
  availability: Record<string, string[]>;
  bio: string;
  location: string;
  images?: string[];
  studentSuccess?: string[];
}
