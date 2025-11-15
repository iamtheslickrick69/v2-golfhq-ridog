import { RileyResponse } from "./types";

export const rileyGreetings = {
  morning: [
    "Morning Jason! Perfect day for golf - I see Fox Hollow has some great times available.",
    "Rise and grind! Your stats show you play best in the morning. Coincidence? I think not.",
    "What's up! Ready to attack the course today?",
    "Good morning legend! Looking at the weather, it's gonna be a great day to play.",
    "Morning champ! Let's make today count on the course.",
  ],
  afternoon: [
    "Yo! Sneaking in a twilight round?",
    "Perfect timing - afternoon rates just kicked in at Black Desert.",
    "Let's get after it! What are we working on today?",
    "Hey Jason! Still time to get some holes in today.",
    "What's good! Ready to work on that game?",
  ],
  evening: [
    "Evening! How'd the round go today?",
    "Hey! Perfect time to review today's round.",
    "What's up! Ready to plan tomorrow's practice session?",
    "Evening Jason! Let's talk about your game.",
  ],
};

export const rileyPostRound = {
  great: [
    "78 at Fox Hollow? Dude, that's money! You're trending toward single digit handicap.",
    "BOOM! Another round in the 70s. You're on fire lately!",
    "That's what I'm talking about! Your short game improvements are really showing.",
    "Yo! That score is elite! Keep this momentum going!",
    "74?! DUDE! That's your best round ever! I'm so proud of you man!",
    "You're playing some of the best golf of your life right now. This is awesome!",
  ],
  good: [
    "Solid round! You're staying consistent and that's what matters.",
    "Nice work out there! A few tweaks and you'll be in the low 70s regularly.",
    "Good stuff! You're putting together quality rounds week after week.",
    "That's a respectable score, especially at that course. Well done!",
  ],
  okay: [
    "81 isn't bad at Black Desert, especially with that wind. That course is a beast.",
    "Hey, you're still beating 90% of golfers out there. Let's review what happened on the back nine.",
    "Tough conditions today, but I saw some really good swings out there.",
    "Not your best, but you fought hard. That's what matters.",
    "Some days are tougher than others. The important thing is you got out there.",
  ],
  bad: [
    "Rough day, but everyone has them. Even the pros. Tomorrow's a new round.",
    "Let's not dwell on it. I noticed your putting was actually solid - that's a positive.",
    "Hey, bad rounds teach us more than good ones. What felt off today?",
    "We all have off days. What's important is learning from it and moving on.",
    "Don't let one round get you down. You've proven you can play great golf.",
  ],
};

export const rileyTips = {
  driving: [
    "Try teeing the ball a bit higher - you're hitting down too much on your drives.",
    "Your alignment is solid, just commit to the shot. Trust > perfect swing.",
    "Remember: smooth tempo beats swinging hard every time.",
    "Focus on staying balanced through your finish. Your drives will go straighter AND longer.",
    "Left arm straight, right elbow tucked. You got this!",
    "Grip pressure should be like holding a bird - firm enough it doesn't fly away, gentle enough you don't hurt it.",
  ],
  irons: [
    "Ball position is key - middle of stance for mid-irons, slightly forward for longer clubs.",
    "You're lifting up through impact. Stay down through the shot.",
    "Club selection > perfect swing. When in doubt, take one more club.",
    "Let the club do the work. You're trying to help it too much.",
    "Compress the ball, don't scoop it. Down and through!",
  ],
  shortGame: [
    "For chips, think 'brush the grass' not 'hit the ball'.",
    "Your putting stroke is solid, just need better green reading. Play more break.",
    "From 100 yards and in is where we score. Let's dial in those wedges.",
    "Practice your distance control with wedges. That's the key to getting up and down.",
    "On chips, land it on your spot and let it roll. Pick a specific landing zone.",
  ],
  mental: [
    "Golf is 90% mental and 10% physical. Let's work on your course management.",
    "Play YOUR game, not someone else's. Stick to your strengths.",
    "Every shot is a new opportunity. Leave the last one behind.",
    "Visualize the shot before you hit it. See it, feel it, execute it.",
    "Stay in the present. One shot at a time, one hole at a time.",
  ],
  practice: [
    "Quality over quantity in practice. 30 focused minutes beats 2 hours of mindless hitting.",
    "Practice with a purpose. Every swing should have a target and intention.",
    "Work on your weaknesses, but don't forget to groove your strengths too.",
    "Simulate on-course pressure in practice. Make every putt matter.",
  ],
};

export const rileyAchievements = [
  "BOOM! Desert Fox trophy ball earned! You've conquered all three desert courses!",
  "Trophy ball incoming! Weekend Warrior achievement unlocked!",
  "That's what I'm talking about! Eagle Eye trophy ball is yours!",
  "Dude! You just earned the Mountain Master trophy ball! That's legendary!",
  "Sunrise Specialist trophy ball! You're dedicated to the early morning grind!",
  "Century Club! 100 rounds! You're an absolute legend!",
  "Weather Warrior! Nothing stops you from playing golf!",
  "ACE! You got a hole-in-one! That's the dream!",
  "Breaking 80! You're in elite territory now!",
];

export const rileyEncouragement = [
  "You're literally improving every week. The data doesn't lie!",
  "Keep this up and you'll be a single digit by spring.",
  "Your dedication is inspiring. Seriously.",
  "Trust the process. You're building something special here.",
  "The work you're putting in WILL pay off. I promise.",
  "Every round makes you better. Even the tough ones.",
  "You got this! I believe in you 100%.",
  "Let's get it! Your best golf is still ahead of you!",
];

export const rileyWeather = [
  "Heads up - winds at Sand Hollow are 15+ mph today. Might want to club up.",
  "Perfect conditions at Fox Hollow this morning. Book a tee time!",
  "Rain in the forecast tomorrow. Plan accordingly!",
  "Temperatures are perfect today - mid 70s and calm. Great day to play!",
  "Hot one today - stay hydrated out there!",
];

export const rileyQuickReplies = [
  "What's my handicap trend?",
  "Show me my recent rounds",
  "Find tee times near me",
  "Give me a putting drill",
  "What should I work on?",
  "Course recommendations?",
  "Show my trophy balls",
  "How do I fix my slice?",
];

export const rileyLessons = [
  {
    id: "fix-your-slice",
    title: "Fix Your Slice in 3 Steps",
    duration: "12 min",
    difficulty: "Beginner",
    description:
      "Most common problem in golf. Let's fix it with simple adjustments.",
  },
  {
    id: "putting-basics",
    title: "Putting Fundamentals",
    duration: "15 min",
    difficulty: "Beginner",
    description: "Master the fundamentals of a great putting stroke.",
  },
  {
    id: "short-game-101",
    title: "Short Game Mastery",
    duration: "20 min",
    difficulty: "Intermediate",
    description: "Chips, pitches, and bunker shots simplified.",
  },
  {
    id: "course-management",
    title: "Smart Course Management",
    duration: "18 min",
    difficulty: "Intermediate",
    description: "Play smarter, not harder. Strategy wins.",
  },
  {
    id: "consistent-ball-striking",
    title: "Consistent Ball Striking",
    duration: "25 min",
    difficulty: "Advanced",
    description: "Hit it pure every time with these drills.",
  },
  {
    id: "mental-game",
    title: "The Mental Game",
    duration: "16 min",
    difficulty: "All Levels",
    description: "Golf is 90% mental. Let's train your mind.",
  },
  {
    id: "power-without-effort",
    title: "Generate Power Effortlessly",
    duration: "22 min",
    difficulty: "Intermediate",
    description: "Distance comes from technique, not strength.",
  },
  {
    id: "reading-greens",
    title: "Master Green Reading",
    duration: "14 min",
    difficulty: "Intermediate",
    description: "See breaks like the pros do.",
  },
  {
    id: "wedge-play",
    title: "Dial in Your Wedges",
    duration: "20 min",
    difficulty: "Advanced",
    description: "Distance control from 100 yards and in.",
  },
  {
    id: "pre-shot-routine",
    title: "Build a Pre-Shot Routine",
    duration: "10 min",
    difficulty: "All Levels",
    description: "Consistency starts before you swing.",
  },
];

export const rileyBootcamps = [
  {
    id: "7-day-short-game",
    title: "7-Day Short Game Intensive",
    duration: "7 days",
    description: "Transform your short game in one week.",
  },
  {
    id: "break-80",
    title: "Break 80 Blueprint",
    duration: "30 days",
    description: "Comprehensive program to break your scoring barrier.",
  },
  {
    id: "putt-like-a-pro",
    title: "Putt Like a Pro",
    duration: "14 days",
    description: "Two weeks to elite putting.",
  },
  {
    id: "consistent-contact",
    title: "Consistent Contact Challenge",
    duration: "21 days",
    description: "Build a repeatable swing in 3 weeks.",
  },
  {
    id: "mental-mastery",
    title: "Mental Mastery Bootcamp",
    duration: "10 days",
    description: "Train your mind for peak performance.",
  },
];

export async function getRileyGreeting(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const hour = new Date().getHours();
  let greetings: string[];

  if (hour < 12) {
    greetings = rileyGreetings.morning;
  } else if (hour < 18) {
    greetings = rileyGreetings.afternoon;
  } else {
    greetings = rileyGreetings.evening;
  }

  return greetings[Math.floor(Math.random() * greetings.length)];
}

export async function getRileyTip(category?: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const categories = category
    ? [category]
    : ["driving", "irons", "shortGame", "mental", "practice"];
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const tips =
    rileyTips[randomCategory as keyof typeof rileyTips] || rileyTips.mental;
  return tips[Math.floor(Math.random() * tips.length)];
}

export async function getRileyPostRoundResponse(
  score: number,
  par: number
): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const diff = score - par;
  let responses: string[];

  if (diff <= 2) {
    responses = rileyPostRound.great;
  } else if (diff <= 6) {
    responses = rileyPostRound.good;
  } else if (diff <= 10) {
    responses = rileyPostRound.okay;
  } else {
    responses = rileyPostRound.bad;
  }

  return responses[Math.floor(Math.random() * responses.length)];
}
