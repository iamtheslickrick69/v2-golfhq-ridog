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
    ],
    evening: [
      "Hey man! Time to review today's round?",
      "Evening! Let's break down that scorecard.",
      "What's good! How'd the golf go today?"
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
};

export function getRileyGreeting(timeOfDay: string): string {
  const greetings = rileyResponses.greetings[timeOfDay as keyof typeof rileyResponses.greetings] || rileyResponses.greetings.morning;
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getRileyTip(category: 'driving' | 'irons' | 'shortGame'): string {
  const tips = rileyResponses.tips[category];
  return tips[Math.floor(Math.random() * tips.length)];
}
