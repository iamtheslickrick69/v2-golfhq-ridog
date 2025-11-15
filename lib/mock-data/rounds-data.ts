import { Round } from './types';

export const jasonRecentRounds: Round[] = [
  {
    id: "rnd_001",
    date: "2024-11-13",
    course: "Fox Hollow Golf Course",
    score: 78,
    par: 72,
    differential: "+6",
    holes: [4,5,3,4,4,5,3,4,4,4,5,3,4,4,5,3,4,4],
    stats: {
      putts: 32,
      fairways: "9/14",
      greens: "11/18",
      penalties: 2,
      birdies: 3,
      pars: 10,
      bogeys: 4,
      doubleBogeys: 1
    },
    conditions: "Sunny, 75°F, 8mph wind",
    playingPartners: ["Mike Thompson", "Dave Wilson"],
    notes: "Finally figured out the approach on #7. Driver was money today.",
    xpEarned: 85,
    trophyBalls: []
  },
  {
    id: "rnd_002",
    date: "2024-11-10",
    course: "Black Desert Resort",
    score: 81,
    par: 72,
    differential: "+9",
    holes: [5,4,4,5,5,4,4,5,4,4,6,3,5,4,5,4,4,4],
    stats: {
      putts: 34,
      fairways: "7/14",
      greens: "9/18",
      penalties: 3
    },
    conditions: "Partly cloudy, 68°F, 15mph wind",
    playingPartners: ["Sarah Chen"],
    notes: "Wind was brutal. Lost 2 balls on #15.",
    xpEarned: 75,
    trophyBalls: ["desert-warrior"]
  },
  {
    id: "rnd_003",
    date: "2024-11-05",
    course: "Sand Hollow Resort",
    score: 76,
    par: 72,
    differential: "+4",
    holes: [4,4,3,4,3,5,4,4,4,4,5,3,4,4,5,3,4,4],
    stats: {
      putts: 30,
      fairways: "10/14",
      greens: "13/18",
      penalties: 1,
      birdies: 2,
      pars: 12,
      bogeys: 3,
      doubleBogeys: 1
    },
    conditions: "Clear, 72°F, calm",
    playingPartners: ["Mike Thompson"],
    notes: "Best round in weeks! Putting was dialed in.",
    xpEarned: 95,
    trophyBalls: []
  }
];
