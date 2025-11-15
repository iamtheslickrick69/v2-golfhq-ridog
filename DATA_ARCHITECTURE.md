# Data Architecture & Mock Data

## User Data Structure

### Current User: Jason Adams
```javascript
export const currentUser = {
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
      trend: "decreasing", // decreasing | stable | increasing
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
    favoriteTime: "morning", // morning | afternoon | twilight
    playFrequency: "2-3x per week"
  },
  achievements: {
    trophyBalls: [
      { id: "desert-fox", earned: true, date: "2024-09-15" },
      { id: "sunrise-specialist", earned: true, date: "2024-08-20" },
      { id: "mountain-master", earned: true, date: "2024-07-10" },
      { id: "weekend-warrior", earned: true, date: "2024-06-01" },
      // 8 more earned, 6 not earned
    ],
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
    playingPartners: "open", // open | friends | private
  }
}
```

## Utah Courses Database

### Complete Course Data
```javascript
export const utahCourses = [
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
    },
    images: [
      "/courses/fox-hollow-hero.jpg",
      "/courses/fox-hollow-hole7.jpg",
      "/courses/fox-hollow-clubhouse.jpg"
    ]
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
      holes: 36, // Championship + Links
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
    highlights: {
      signatureHole: 5,
      description: "Island green surrounded by red sand",
      localTip: "Championship course plays tough, Links is more forgiving"
    }
  },
  // Add 7+ more Utah courses...
]
```

## Recent Rounds Data
```javascript
export const jasonRecentRounds = [
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
    images: ["/rounds/fox-hollow-scorecard-11-13.jpg"],
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
  // Add 10+ more rounds...
]
```

## Riley AI Response Bank
```javascript
export const rileyResponses = {
  greetings: {
    morning: [
      "Morning Jason! Perfect day for golf - I see Fox Hollow has some great times available.",
      "Rise and grind! Your stats show you play best in the morning. Coincidence? I think not.",
      "What's up! Ready to attack the course today?"
    ],
    afternoon: [
      "Yo! Sneaking in a twilight round?",
      "Perfect timing - afternoon rates just kicked in at Black Desert.",
      "Let's get after it! What are we working on today?"
    ]
  },

  postRound: {
    good: [
      "78 at Fox Hollow? Dude, that's money! You're trending toward single digit handicap.",
      "BOOM! Another round in the 70s. You're on fire lately!",
      "That's what I'm talking about! Your short game improvements are really showing."
    ],
    okay: [
      "81 isn't bad at Black Desert, especially with that wind. That course is a beast.",
      "Hey, you're still beating 90% of golfers out there. Let's review what happened on the back nine.",
      "Tough conditions today, but I saw some really good swings out there."
    ],
    bad: [
      "Rough day, but everyone has them. Even the pros. Tomorrow's a new round.",
      "Let's not dwell on it. I noticed your putting was actually solid - that's a positive.",
      "Hey, bad rounds teach us more than good ones. What felt off today?"
    ]
  },

  tips: {
    driving: [
      "Try teeing the ball a bit higher - you're hitting down too much on your drives.",
      "Your alignment is solid, just commit to the shot. Trust > perfect swing.",
      "Remember: smooth tempo beats swinging hard every time."
    ],
    irons: [
      "Ball position is key - middle of stance for mid-irons, slightly forward for longer clubs.",
      "You're lifting up through impact. Stay down through the shot.",
      "Club selection > perfect swing. When in doubt, take one more club."
    ],
    shortGame: [
      "For chips, think 'brush the grass' not 'hit the ball'.",
      "Your putting stroke is solid, just need better green reading. Play more break.",
      "From 100 yards and in is where we score. Let's dial in those wedges."
    ]
  },

  achievements: [
    "BOOM! Desert Fox trophy ball earned! You've conquered all three desert courses!",
    "Trophy ball incoming! Weekend Warrior achievement unlocked!",
    "That's what I'm talking about! Eagle Eye trophy ball is yours!"
  ],

  encouragement: [
    "You're literally improving every week. The data doesn't lie!",
    "Keep this up and you'll be a single digit by spring.",
    "Your dedication is inspiring. Seriously.",
    "Trust the process. You're building something special here."
  ]
}
```

## Stymie League Competitions
```javascript
export const activeCompetitions = [
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
      "Play Coral Canyon"
    ],
    progress: {
      "Jason Adams": {
        completed: ["Black Desert Resort", "Sand Hollow Resort"],
        remaining: ["Coral Canyon"],
        rank: 23
      }
    },
    rewards: {
      xp: 500,
      trophyBall: "desert-master",
      title: "Desert Conqueror"
    }
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
      third: "Free Round for Two"
    }
  },
  // Add 5+ more competitions...
]
```

## Pro Shop Data
```javascript
export const myBag = {
  driver: {
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
      comparison: "+12 yards vs previous driver"
    },
    notes: "Best driver I've owned. Worth every penny.",
    rating: 5,
    images: ["/equipment/taylormade-stealth2.jpg"]
  },
  irons: {
    id: "club_002",
    category: "Irons",
    brand: "Titleist",
    model: "T100",
    year: 2022,
    purchaseDate: "2022-07-20",
    rounds: 78,
    stats: {
      greensInRegulation: "67%",
      avgProximity: "28 feet"
    },
    notes: "Consistent but considering T150s for more forgiveness",
    rating: 4
  },
  putter: {
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
        "11-20ft": 12
      }
    },
    notes: "Never leaving the bag",
    rating: 5
  }
}

export const instructors = [
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
      "10 Lessons": 1000
    },
    availability: {
      monday: ["9:00", "10:00", "2:00", "3:00"],
      wednesday: ["9:00", "10:00", "11:00", "2:00"],
      friday: ["9:00", "10:00", "2:00", "3:00", "4:00"],
      saturday: ["8:00", "9:00", "10:00", "11:00"]
    },
    bio: "Your AI caddy in real life. Former mini-tour player with a passion for helping golfers reach their potential.",
    location: "Fox Hollow Golf Course",
    images: ["/instructors/riley-b.jpg"],
    studentSuccess: [
      "Average handicap improvement: 4.2 strokes",
      "87% of students break their goal score within 6 months"
    ]
  },
  // Add 4+ more instructors...
]
```
