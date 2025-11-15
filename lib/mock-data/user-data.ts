import { User, TrophyBall } from "./types";

export const trophyBalls: TrophyBall[] = [
  {
    id: "desert-fox",
    name: "Desert Fox",
    description: "Conqueror of the desert courses",
    requirement: "Play all Utah desert courses",
    earned: true,
    earnedDate: "2024-09-15",
  },
  {
    id: "sunrise-specialist",
    name: "Sunrise Specialist",
    description: "Early bird gets the tee time",
    requirement: "10 rounds before 7am",
    earned: true,
    earnedDate: "2024-08-20",
  },
  {
    id: "mountain-master",
    name: "Mountain Master",
    description: "Conquered the peaks",
    requirement: "Play all mountain courses",
    earned: true,
    earnedDate: "2024-07-10",
  },
  {
    id: "weekend-warrior",
    name: "Weekend Warrior",
    description: "Dedicated weekend golfer",
    requirement: "Play 20 weekend rounds",
    earned: true,
    earnedDate: "2024-06-01",
  },
  {
    id: "eagle-eye",
    name: "Eagle Eye",
    description: "Soaring above par",
    requirement: "Score an eagle",
    earned: false,
  },
  {
    id: "century-club",
    name: "Century Club",
    description: "The ultimate milestone",
    requirement: "Play 100 rounds",
    earned: false,
  },
  {
    id: "weather-warrior",
    name: "Weather Warrior",
    description: "Nothing stops you",
    requirement: "Play in rain, wind, and heat",
    earned: false,
  },
  {
    id: "ace",
    name: "Ace",
    description: "Hole in one!",
    requirement: "Score a hole-in-one",
    earned: false,
  },
  {
    id: "breaking-80",
    name: "Breaking 80",
    description: "Elite scoring",
    requirement: "Score under 80",
    earned: false,
  },
  {
    id: "perfect-putter",
    name: "Perfect Putter",
    description: "Mastery on the greens",
    requirement: "0 three-putts in a round",
    earned: false,
  },
  {
    id: "fairway-finder",
    name: "Fairway Finder",
    description: "Accuracy off the tee",
    requirement: "Hit 12/14 fairways in a round",
    earned: false,
  },
  {
    id: "iron-sharpener",
    name: "Iron Sharpener",
    description: "Precision with irons",
    requirement: "Hit 14/18 greens in regulation",
    earned: false,
  },
  {
    id: "social-golfer",
    name: "Social Golfer",
    description: "The more the merrier",
    requirement: "Play with 10 different partners",
    earned: false,
  },
  {
    id: "course-explorer",
    name: "Course Explorer",
    description: "Always finding new courses",
    requirement: "Play 15 different courses",
    earned: false,
  },
  {
    id: "dedication",
    name: "Dedication",
    description: "Consistent effort pays off",
    requirement: "Play 5 rounds in one week",
    earned: false,
  },
  {
    id: "night-owl",
    name: "Night Owl",
    description: "Twilight specialist",
    requirement: "Play 10 twilight rounds",
    earned: false,
  },
  {
    id: "tournament-player",
    name: "Tournament Player",
    description: "Competitive spirit",
    requirement: "Enter 5 competitions",
    earned: false,
  },
  {
    id: "instructor-student",
    name: "Instructor's Student",
    description: "Committed to improvement",
    requirement: "Complete 5 lessons",
    earned: false,
  },
];

export const currentUser: User = {
  id: "usr_ja_001",
  name: "Jason Adams",
  email: "jason.adams@gmail.com",
  location: {
    city: "Saint George",
    state: "Utah",
    coordinates: { lat: 37.0965, lng: -113.5684 },
  },
  profile: {
    avatar: "/avatars/jason-adams.jpg",
    memberSince: "2024-01-15",
    handicap: {
      current: 8.2,
      trend: "decreasing",
      history: [9.1, 8.8, 8.5, 8.2],
    },
  },
  tourCard: {
    level: "Gold",
    xp: 7250,
    nextLevelXp: 10000,
    rank: 147,
    memberNumber: "GHQ-2024-1847",
  },
  stats: {
    roundsThisYear: 47,
    roundsThisMonth: 8,
    averageScore: 79,
    bestScore: 74,
    coursesPlayed: 12,
    favoriteTime: "morning",
    playFrequency: "2-3x per week",
  },
  achievements: {
    trophyBalls: trophyBalls,
    streaks: {
      current: 3,
      longest: 12,
      weeklyRounds: 2,
    },
  },
  preferences: {
    notifications: true,
    rileyTips: "daily",
    courseAlerts: ["Fox Hollow", "Black Desert", "Sand Hollow"],
    playingPartners: "open",
  },
};

export async function getUser(): Promise<User> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return currentUser;
}

export async function updateUserXP(xpGain: number): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  currentUser.tourCard.xp += xpGain;
  return currentUser;
}

export async function earnTrophyBall(ballId: string): Promise<TrophyBall | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const ball = trophyBalls.find((b) => b.id === ballId);
  if (ball && !ball.earned) {
    ball.earned = true;
    ball.earnedDate = new Date().toISOString().split("T")[0];
    return ball;
  }
  return null;
}
