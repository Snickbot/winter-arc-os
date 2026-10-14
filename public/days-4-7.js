// Days 4–7. Uses helpers from exercises.js.
const WATER = "After I wake up, I will drink a glass of water. Same cue every morning.";

DAYS.push(
  {
    day: 4, phase: PHASE1, title: "Recovery Day",
    objective: "Let your body recover while keeping the habit alive.",
    why: "Your muscles get stronger while resting, not only while training. A rest day is part of the plan.",
    tasks: [
      simple(4, "water", "Drink a glass of water after waking up", WATER),
      ex(4, "walk", "15 minutes"),
      ex(4, "cooldown", ""),
      simple(4, "study", "Study one subject for 25 minutes", STUDY),
      simple(4, "sleep", "Choose tonight's bedtime and put your phone away 30 minutes before it", "Pick a realistic bedtime. Set an Android alarm as a reminder to start winding down. A steady bedtime helps energy and focus."),
      simple(4, "plan", "Write down tomorrow's first task", PLAN),
      simple(4, "read", "Bonus: read for 10 minutes", "Optional. It never blocks progress.", false)
    ]
  },
  {
    day: 5, phase: PHASE1, title: "Strength Practice",
    objective: "Do a full-body session with calm, careful technique.",
    why: "Good form now protects your body and makes later progress faster.",
    tasks: [
      simple(5, "water", "Drink a glass of water after waking up", WATER),
      ex(5, "warmup", ""),
      ex(5, "wallPushup", "2 sets of 12"),
      ex(5, "chairSquat", "2 sets of 12"),
      ex(5, "gluteBridge", "2 sets of 12"),
      ex(5, "kneePlank", "2 holds of 20 seconds"),
      ex(5, "cooldown", ""),
      simple(5, "study", "Study one subject for 25 minutes", STUDY),
      simple(5, "plan", "Write down tomorrow's first task", PLAN),
      simple(5, "screen", "Bonus: look at your phone's screen-time and note the number", "Just notice the number. No judging. Awareness comes first.", false)
    ]
  },
  {
    day: 6, phase: PHASE1, title: "Active Recovery and Awareness",
    objective: "Move lightly and notice your screen-time habits.",
    why: "You can't improve what you never notice. Light movement keeps your body loose between sessions.",
    tasks: [
      simple(6, "water", "Drink a glass of water after waking up", WATER),
      ex(6, "walk", "20 minutes"),
      ex(6, "wallPosture", "2 holds of 30 seconds"),
      ex(6, "cooldown", ""),
      simple(6, "study", "Study one subject for 25 minutes", STUDY),
      simple(6, "screen", "Check your screen-time and write the number down", "Open your phone's Digital Wellbeing or screen-time settings and write today's total so far. Don't judge it. You're just collecting information."),
      simple(6, "plan", "Write down tomorrow's first task", PLAN),
      simple(6, "tidy", "Bonus: tidy your bag for tomorrow", "Prepare what you need tonight so tomorrow starts with less effort.", false)
    ]
  },
  {
    day: 7, phase: PHASE1, title: "Weekly Review",
    objective: "Look back at the week and make next week easier.",
    why: "A short review turns experience into improvement without needing to feel guilty.",
    tasks: [
      simple(7, "water", "Drink a glass of water after waking up", WATER),
      ex(7, "warmup", ""),
      ex(7, "wallPushup", "2 sets of 10"),
      ex(7, "chairSquat", "2 sets of 10"),
      ex(7, "gluteBridge", "2 sets of 10"),
      ex(7, "cooldown", ""),
      simple(7, "review", "Write 3 things that went well and 1 thing to make easier next week", "Use paper or a notes app. You don't need to judge anything. Just pick one friction to remove, for example 'keep my water glass by my bed.'"),
      simple(7, "study", "Study one subject for 25 minutes", STUDY),
      simple(7, "plan", "Write down tomorrow's first task", PLAN),
      simple(7, "tidy", "Bonus: reset your room for 10 minutes", "A tidy start makes Day 8 easier.", false)
    ]
  }
);
