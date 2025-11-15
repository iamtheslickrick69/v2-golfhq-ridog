import { Equipment } from "./types";

export const myBag: Equipment[] = [
  {
    id: "club_001",
    category: "Driver",
    brand: "TaylorMade",
    model: "Stealth 2",
    year: 2023,
    purchaseDate: "2023-03-15",
    rounds: 32,
    stats: {
      avgDistance: 265,
      fairwayPercentage: 64,
      comparison: "+12 yards vs previous driver",
    },
    notes: "Best driver I've owned. Worth every penny.",
    rating: 5,
    images: ["/equipment/taylormade-stealth2.jpg"],
  },
  {
    id: "club_002",
    category: "Irons",
    brand: "Titleist",
    model: "T100",
    year: 2022,
    purchaseDate: "2022-07-20",
    rounds: 78,
    stats: {
      greensInRegulation: "67%",
      avgProximity: "28 feet",
    },
    notes: "Consistent but considering T150s for more forgiveness",
    rating: 4,
  },
  {
    id: "club_003",
    category: "Putter",
    brand: "Scotty Cameron",
    model: "Newport 2",
    year: 2021,
    purchaseDate: "2021-04-10",
    rounds: 147,
    stats: {
      puttsPerRound: 32.4,
      makePercentage: {
        "0-5ft": 92,
        "6-10ft": 38,
        "11-20ft": 12,
      },
    },
    notes: "Never leaving the bag",
    rating: 5,
  },
  {
    id: "club_004",
    category: "Wedges",
    brand: "Vokey",
    model: "SM9",
    year: 2023,
    purchaseDate: "2023-01-10",
    rounds: 45,
    stats: {
      upAndDownPercentage: 58,
      avgProximityFrom100: "18 feet",
    },
    notes: "52°, 56°, 60° setup. Love the versatility.",
    rating: 5,
  },
  {
    id: "club_005",
    category: "Fairway Wood",
    brand: "Callaway",
    model: "Paradym",
    year: 2023,
    purchaseDate: "2023-02-20",
    rounds: 35,
    stats: {
      avgDistance: 230,
      accuracy: 68,
    },
    notes: "3-wood. Great off the deck and tee.",
    rating: 4,
  },
  {
    id: "club_006",
    category: "Hybrid",
    brand: "TaylorMade",
    model: "Stealth",
    year: 2022,
    purchaseDate: "2022-08-15",
    rounds: 52,
    stats: {
      avgDistance: 210,
      greensHit: 62,
    },
    notes: "4-hybrid. Replaced my 3-iron and much easier to hit.",
    rating: 5,
  },
];

export async function getMyBag(): Promise<Equipment[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return myBag;
}

export async function getClubById(id: string): Promise<Equipment | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return myBag.find((club) => club.id === id) || null;
}

export async function updateClubNotes(
  id: string,
  notes: string
): Promise<Equipment | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const club = myBag.find((c) => c.id === id);
  if (club) {
    club.notes = notes;
    return club;
  }
  return null;
}

export async function updateClubRating(
  id: string,
  rating: number
): Promise<Equipment | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const club = myBag.find((c) => c.id === id);
  if (club) {
    club.rating = rating;
    return club;
  }
  return null;
}

export async function addClubToBag(club: Omit<Equipment, "id">): Promise<Equipment> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const newClub: Equipment = {
    ...club,
    id: `club_${Date.now()}`,
  };
  myBag.push(newClub);
  return newClub;
}
