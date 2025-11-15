import { Competition } from "./types";

export const activeCompetitions: Competition[] = [
  {
    id: "comp_001",
    name: "Utah Desert Challenge",
    description: "Play all 3 desert courses in November",
    type: "challenge",
    status: "active",
    startDate: "2024-11-01",
    endDate: "2024-11-30",
    participants: 234,
    requirements: [
      "Play Black Desert Resort",
      "Play Sand Hollow Resort",
      "Play Coral Canyon",
    ],
    progress: {
      "Jason Adams": {
        completed: ["Black Desert Resort", "Sand Hollow Resort"],
        remaining: ["Coral Canyon"],
        rank: 23,
      },
    },
    rewards: {
      xp: 500,
      trophyBall: "desert-master",
      title: "Desert Conqueror",
    },
  },
  {
    id: "comp_002",
    name: "Turkey Trot Scramble",
    description: "Thanksgiving weekend best ball tournament",
    type: "tournament",
    status: "upcoming",
    date: "2024-11-28",
    course: "Fox Hollow Golf Course",
    format: "2-person scramble",
    entryFee: 50,
    participants: 48,
    maxTeams: 36,
    prizes: {
      first: "$500 Pro Shop Credit",
      second: "$250 Pro Shop Credit",
      third: "Free Round for Two",
    },
  },
  {
    id: "comp_003",
    name: "Winter Warrior Series",
    description: "Most rounds played December - February",
    type: "league",
    status: "upcoming",
    startDate: "2024-12-01",
    endDate: "2025-02-28",
    participants: 156,
    rewards: {
      xp: 1000,
      trophyBall: "winter-warrior",
      title: "Cold Weather Champion",
    },
  },
  {
    id: "comp_004",
    name: "Weekend Warriors",
    description: "Saturday morning group - find playing partners",
    type: "league",
    status: "active",
    participants: 89,
    requirements: [
      "Play Saturday mornings",
      "Rotating courses each week",
      "Friendly competition",
    ],
  },
  {
    id: "comp_005",
    name: "Closest to the Pin Challenge",
    description: "Monthly par 3 accuracy competition",
    type: "challenge",
    status: "active",
    startDate: "2024-11-01",
    endDate: "2024-11-30",
    participants: 312,
    prizes: {
      first: "Dozen ProV1s",
      second: "$50 Gift Card",
      third: "Free Range Balls for a Month",
    },
  },
  {
    id: "comp_006",
    name: "Low Handicap Invitational",
    description: "Elite tournament for single-digit handicaps",
    type: "tournament",
    status: "upcoming",
    date: "2024-12-15",
    course: "The Ledges Golf Club",
    format: "Individual stroke play",
    entryFee: 100,
    participants: 24,
    maxTeams: 40,
    prizes: {
      first: "$1000 + Trophy",
      second: "$500",
      third: "$250",
    },
  },
];

export async function getCompetitions(): Promise<Competition[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return activeCompetitions;
}

export async function getActiveCompetitions(): Promise<Competition[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return activeCompetitions.filter((comp) => comp.status === "active");
}

export async function getUpcomingCompetitions(): Promise<Competition[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return activeCompetitions.filter((comp) => comp.status === "upcoming");
}

export async function getCompetitionById(
  id: string
): Promise<Competition | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return activeCompetitions.find((comp) => comp.id === id) || null;
}

export async function joinCompetition(id: string): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const comp = activeCompetitions.find((c) => c.id === id);
  if (comp) {
    comp.participants += 1;
    return true;
  }
  return false;
}
