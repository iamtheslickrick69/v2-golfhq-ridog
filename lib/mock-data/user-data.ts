import { User, TrophyBall } from './types';

export const trophyBalls: TrophyBall[] = [
  { id: "desert-fox", name: "Desert Fox", requirement: "Play all Utah desert courses", earned: true, date: "2024-09-15" },
  { id: "sunrise-specialist", name: "Sunrise Specialist", requirement: "10 rounds before 7am", earned: true, date: "2024-08-20" },
  { id: "mountain-master", name: "Mountain Master", requirement: "Play all mountain courses", earned: true, date: "2024-07-10" },
  { id: "weekend-warrior", name: "Weekend Warrior", requirement: "Play 20 weekend rounds", earned: true, date: "2024-06-01" },
  { id: "eagle-eye", name: "Eagle Eye", requirement: "Score an eagle", earned: false },
  { id: "century-club", name: "Century Club", requirement: "Play 100 rounds", earned: false },
  { id: "weather-warrior", name: "Weather Warrior", requirement: "Play in rain, wind, and cold", earned: false },
  { id: "breaking-barriers", name: "Breaking Barriers", requirement: "Score under 75", earned: false },
];

export const currentUser: User = {
  id: "usr_ja_001",
  name: "Jason Adams",
  email: "jason.adams@gmail.com",
  location: {
    city: "Saint George",
    state: "Utah",
    coordinates: { lat: 37.0965, lng: -113.5684 }
  },
  profile: {
    avatar: "/avatars/jason-adams.jpg",
    memberSince: "2024-01-15",
    handicap: {
      current: 8.2,
      trend: "decreasing",
      history: [9.1, 8.8, 8.5, 8.2]
    }
  },
  tourCard: {
    level: "Gold",
    xp: 7250,
    nextLevelXp: 10000,
    rank: 147,
    memberNumber: "GHQ-2024-1847"
  },
  stats: {
    roundsThisYear: 47,
    roundsThisMonth: 8,
    averageScore: 79,
    bestScore: 74,
    coursesPlayed: 12,
    favoriteTime: "morning",
    playFrequency: "2-3x per week"
  },
  achievements: {
    trophyBalls: trophyBalls,
    streaks: {
      current: 3,
      longest: 12,
      weeklyRounds: 2
    }
  },
  preferences: {
    notifications: true,
    rileyTips: "daily",
    courseAlerts: ["Fox Hollow", "Black Desert", "Sand Hollow"],
    playingPartners: "open"
  }
};
