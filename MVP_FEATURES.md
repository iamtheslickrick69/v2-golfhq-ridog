# MVP Features Specification

## 1. Dashboard - The Golf HQ Command Center

### Layout
```
+----------------------------------+
|  Welcome back, Jason! ⛳         |
|  "You're 2 rounds from Gold!"    |
+----------------------------------+
| Tour Card  |  Riley's Daily Tip  |
| [GOLD]     |  "Dude, your short |
| ▓▓▓▓░ 72%  |  game is fire!"     |
+----------------------------------+
| Quick Actions (2x2 grid)          |
| [Book Tee] [Track Round]          |
| [Find Players] [Ask Riley]        |
+----------------------------------+
| Recent Rounds                     |
| Fox Hollow - 78 - 2 days ago     |
| Black Desert - 81 - 5 days ago   |
+----------------------------------+
```

### Riley's Personality Examples
- Morning: "Morning legend! Perfect day for golf - Fox Hollow has times open"
- After round: "Just saw you posted a 78! That's 3 under your average!"
- Achievement: "BOOM! You just earned the Desert Fox trophy ball!"
- Weather: "Heads up - winds at Sand Hollow are 15+ mph today"

## 2. My Caddy - Riley B AI Hub

### Chat Interface
```javascript
const rileyResponses = {
  greeting: [
    "What's up Jason! Ready to work on that game?",
    "Yo! How'd that new driver work out at Black Desert?",
    "My man! Let's get you ready for this weekend's round"
  ],
  swingAdvice: [
    "Your swing looks good, just keep that left arm straight a bit longer",
    "Try feeling like you're swinging at 80% - you'll actually hit it better",
    "Remember what we worked on - hips first, then shoulders"
  ],
  encouragement: [
    "Dude, you're literally improving every week!",
    "That's what I'm talking about! Keep grinding!",
    "You got this! Trust your swing"
  ]
}
```

### Content Structure
- **Lessons**: 10 mock lessons (Fix Your Slice, Putting Basics, etc.)
- **Boot Camps**: 5 intensive programs (7-Day Short Game, Break 80, etc.)
- **Courses**: 8 full courses (Master Utah Golf, Mental Game, etc.)
- **Drills**: 15 quick practice routines with timers
- **Quick Quiz**: Daily rules and strategy questions
- **AI Recommendations**: Personalized based on recent rounds

## 3. Golf Journal

### Smart Scorecard Parser (Mock)
```javascript
// When user uploads scorecard photo
const parsedData = {
  course: "Fox Hollow Golf Course",
  date: "Nov 15, 2024",
  score: 78,
  holes: [4,5,3,4,4,5,3,4,4,4,5,3,4,4,5,3,4,4], // 18 holes
  putts: 32,
  fairways: "9/14",
  greens: "11/18",
  penalties: 2
}
```

### Trophy Ball Triggers
- First round logged → "Journey Begins" ball
- 5 rounds in a month → "Dedicated Golfer" ball
- Score under 80 → "Breaking Barriers" ball
- Play in rain → "Weather Warrior" ball

## 4. Course Reviews (Letterboxd of Golf)

### Rating Categories
1. **Overall Experience** (1-5 stars)
2. **Course Conditions** (1-5 stars)
3. **Food & Beverage** (1-5 stars)
4. **Pro Shop & Service** (1-5 stars)
5. **Value for Money** (1-5 stars)
6. **Pace of Play** (1-5 stars)

### Utah Courses Database
```javascript
const utahCourses = [
  {
    name: "Fox Hollow Golf Course",
    location: "American Fork, UT",
    rating: 4.5,
    reviews: 234,
    bestHole: "#7 - Elevated tee with mountain views",
    localTip: "Book early morning to avoid afternoon winds"
  },
  {
    name: "Black Desert Resort",
    location: "Ivins, UT",
    rating: 4.8,
    reviews: 189,
    bestHole: "#15 - Desert canyon carry",
    localTip: "Stay left on #7, the desert swallows everything right"
  },
  {
    name: "Sand Hollow Resort",
    location: "Hurricane, UT",
    rating: 4.7,
    reviews: 412,
    bestHole: "#5 - Island green",
    localTip: "Championship course plays tough, Links is more forgiving"
  },
  // Add 10+ more Utah courses
]
```

## 5. Stymie League (Community)

### Active Competitions
1. **Utah Desert Challenge** - Play all 3 desert courses in November
2. **Turkey Trot Scramble** - Thanksgiving weekend tournament
3. **Winter Warrior Series** - Most rounds Dec-Feb
4. **Weekend Warriors** - Saturday morning games

### Forum Categories
- Equipment Reviews (What's in your bag?)
- Course Conditions (Live updates)
- Swing Help (Video analysis)
- Local Meetups (Find playing partners)
- Rules Discussion (What's the ruling?)

### Leaderboard Animation
```javascript
// Smooth position changes
const animateRankChange = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 100 }
}
```

## 6. Tour Card & Gamification

### Levels & Requirements
- **Bronze**: 0-2,500 XP (Starting level)
- **Silver**: 2,501-5,000 XP (10+ rounds)
- **Gold**: 5,001-10,000 XP (Jason's current - 7,250 XP)
- **Platinum**: 10,001-25,000 XP (Elite status)
- **Black Card**: 25,001+ XP (Legendary)

### Trophy Balls (18 Total)
```javascript
const trophyBalls = [
  { id: 1, name: "Desert Fox", requirement: "Play all Utah desert courses", earned: true },
  { id: 2, name: "Sunrise Specialist", requirement: "10 rounds before 7am", earned: true },
  { id: 3, name: "Eagle Eye", requirement: "Score an eagle", earned: false },
  { id: 4, name: "Century Club", requirement: "Play 100 rounds", earned: false },
  { id: 5, name: "Mountain Master", requirement: "Play all mountain courses", earned: true },
  // ... 13 more achievements
]
```

## 7. Pro Shop

### My Bag Tracking
```javascript
const jasonsBag = {
  driver: {
    brand: "TaylorMade",
    model: "Stealth 2",
    year: 2023,
    performance: "13.2 avg fairways, +12 yards vs old driver",
    notes: "Best driver I've owned, worth every penny"
  },
  irons: {
    brand: "Titleist",
    model: "T100",
    year: 2022,
    performance: "67% GIR",
    notes: "Consistent, thinking about T150s for more forgiveness"
  },
  putter: {
    brand: "Scotty Cameron",
    model: "Newport 2",
    year: 2021,
    performance: "1.8 putts per hole",
    notes: "Never leaving the bag"
  }
}
```

### Instructor Marketplace
```javascript
const instructors = [
  {
    name: "Riley B",
    title: "PGA Professional",
    specialty: "Mental Game & Course Management",
    rate: "$120/hour",
    rating: 5.0,
    availability: ["Mon", "Wed", "Fri", "Sat"],
    bio: "Your AI caddy in real life. Let's lower those scores!"
  },
  {
    name: "Sarah Chen",
    title: "LPGA Teaching Pro",
    specialty: "Short Game Wizard",
    rate: "$95/hour",
    rating: 4.9,
    availability: ["Tue", "Thu", "Sat", "Sun"]
  },
  // 3+ more instructors
]
```
