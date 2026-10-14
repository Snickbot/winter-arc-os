// Days 8–21. Uses helpers from exercises.js and constants from days-4-7.js.
const PHASE2 = "Days 8–21: Building foundational habits";
const waterTask = d => simple(d, "water", "Drink a glass of water after waking up", WATER);
const studyTask = d => simple(d, "study", "Study one subject for 25 minutes", STUDY);
const planTask = d => simple(d, "plan", "Write down tomorrow's first task", PLAN);

DAYS.push(
  {
    day: 8, phase: PHASE2, title: "Habit Stacking",
    objective: "Attach new habits to things you already do every day.",
    why: "A habit linked to an existing routine is much easier to remember than one that depends on motivation.",
    tasks: [
      waterTask(8), ex(8, "warmup", ""),
      ex(8, "inclinePushup", "2 sets of 8"), ex(8, "chairSquat", "2 sets of 12"),
      ex(8, "gluteBridge", "2 sets of 12"), ex(8, "deadBug", "2 sets of 6 per side"),
      ex(8, "cooldown", ""), studyTask(8),
      simple(8, "stack", "Write 3 'After X, I will Y' sentences", "Example: 'After I brush my teeth at night, I will write tomorrow's first task.' Choose cues you already do daily (waking up, meals, brushing teeth). Keep each action small."),
      planTask(8),
      simple(8, "read", "Bonus: read for 10 minutes", "Optional. It never blocks progress.", false)
    ]
  },
  {
    day: 9, phase: PHASE2, title: "Recovery and Hydration",
    objective: "Recover and make water easy to reach.",
    why: "If water sits right next to you, drinking it takes almost no effort. That is environment design.",
    tasks: [
      waterTask(9), ex(9, "walk", "15 minutes"), ex(9, "wallPosture", "2 holds of 30 seconds"),
      ex(9, "cooldown", ""), studyTask(9),
      simple(9, "bottle", "Fill a water bottle and put it where you study", "Keeping water visible lowers friction. Sip through the day. Drink more when it's hot or after exercise, and drink when you feel thirsty."),
      planTask(9),
      simple(9, "stretch", "Bonus: 5 extra minutes of stretching", COOLDOWN, false)
    ]
  },
  {
    day: 10, phase: PHASE2, title: "Strength: Balance and Core",
    objective: "Train single-leg strength and core control.",
    why: "Balance and core control protect your back and support almost every other exercise.",
    tasks: [
      waterTask(10), ex(10, "warmup", ""),
      ex(10, "inclinePushup", "2 sets of 8"), ex(10, "supportedLunge", "2 sets of 6 per leg"),
      ex(10, "birdDog", "2 sets of 6 per side"), ex(10, "kneePlank", "2 holds of 25 seconds"),
      ex(10, "cooldown", ""), studyTask(10),
      simple(10, "sleep", "Set a bedtime alarm to start winding down", "Choose a bedtime that gives you time to sleep. Teenagers generally do best with 8 to 10 hours. Start putting your phone away about 30 minutes before bed."),
      planTask(10)
    ]
  },
  {
    day: 11, phase: PHASE2, title: "Meal Basics",
    objective: "Learn what a balanced plate looks like using everyday foods.",
    why: "Your body needs regular meals to train, study and grow. Good food supports everything else in this plan.",
    tasks: [
      waterTask(11), ex(11, "walk", "15 minutes"), ex(11, "cooldown", ""), studyTask(11),
      simple(11, "plate", "Think about your next meal and notice the food groups", "A balanced plate idea: a staple (rice, roti or potato), a protein (egg, dal, lentils, fish, chicken or beans), vegetables, and fruit when you can. This is general information, not a diet. Eat regular meals and don't skip them. If you have worries about weight, growth or health, talk to a doctor or a trusted adult."),
      simple(11, "swap", "Pick one food group you could add more of using what's at home", "Don't buy anything special. Look at what's already available and choose one small addition, like a vegetable or an egg."),
      planTask(11),
      simple(11, "read", "Bonus: read for 10 minutes", "Optional. It never blocks progress.", false)
    ]
  },
  {
    day: 12, phase: PHASE2, title: "Strength: Full Body",
    objective: "Do a full-body session and start the 2-minute rule.",
    why: "Starting a task for just two minutes removes most of the resistance to beginning it.",
    tasks: [
      waterTask(12), ex(12, "warmup", ""),
      ex(12, "inclinePushup", "2 sets of 10"), ex(12, "chairSquat", "2 sets of 15"),
      ex(12, "gluteBridge", "2 sets of 15"), ex(12, "deadBug", "2 sets of 8 per side"),
      ex(12, "calfRaise", "2 sets of 12"), ex(12, "cooldown", ""), studyTask(12),
      simple(12, "twomin", "Pick one task you've been avoiding and work on it for just 2 minutes", "Set a 2-minute timer and begin. You may stop when it ends. Often you'll keep going, but stopping is fine."),
      planTask(12)
    ]
  },
  {
    day: 13, phase: PHASE2, title: "Active Recovery and Room Reset",
    objective: "Move lightly and make your space easier to use.",
    why: "A tidy space reduces the effort of starting. Your environment shapes your habits.",
    tasks: [
      waterTask(13), ex(13, "walk", "20 minutes"), ex(13, "wallPosture", "2 holds of 40 seconds"),
      ex(13, "cooldown", ""), studyTask(13),
      simple(13, "room", "Reset your room or study area for 10 minutes", "Clear the floor and desk, put clothes away, set out what you need for tomorrow."),
      simple(13, "screen", "Check your screen-time number and compare it to Day 6", "Just notice the difference, if any. No judging. Awareness is the goal."),
      planTask(13)
    ]
  },
  {
    day: 14, phase: PHASE2, title: "Weekly Review: Phase 2, Week 1",
    objective: "Review the week and remove one source of friction.",
    why: "Reviewing without self-criticism helps you adjust the plan instead of blaming yourself.",
    tasks: [
      waterTask(14), ex(14, "warmup", ""),
      ex(14, "inclinePushup", "2 sets of 6"), ex(14, "chairSquat", "2 sets of 10"),
      ex(14, "gluteBridge", "2 sets of 10"), ex(14, "cooldown", ""),
      simple(14, "review", "Write 3 things that went well and 1 thing to make easier", "Also rate your energy from 1 to 5. If you missed a day this week, use this protocol: 1) Notice what happened without judging. 2) Name one obstacle. 3) Reduce the friction. 4) Choose one small next action. 5) Continue the plan."),
      studyTask(14), planTask(14),
      simple(14, "tidy", "Bonus: reset your room for 10 minutes", "A tidy start makes tomorrow easier.", false)
    ]
  },
  {
    day: 15, phase: PHASE2, title: "Strength: Consistency Session",
    objective: "Repeat a familiar session with slightly more effort.",
    why: "Small, steady increases are safer and more sustainable than big jumps.",
    tasks: [
      waterTask(15), ex(15, "warmup", ""),
      ex(15, "inclinePushup", "2 sets of 10"), ex(15, "chairSquat", "2 sets of 15"),
      ex(15, "gluteBridge", "2 sets of 15"), ex(15, "deadBug", "2 sets of 8 per side"),
      ex(15, "kneePlank", "2 holds of 30 seconds"), ex(15, "cooldown", ""), studyTask(15),
      simple(15, "prep", "Prepare tomorrow's study materials tonight", "Lay out books, notebook and pen where you'll study. This removes friction from tomorrow's start."),
      planTask(15)
    ]
  },
  {
    day: 16, phase: PHASE2, title: "Recovery and Sleep Rhythm",
    objective: "Practice a steady sleep and wake time.",
    why: "Consistent sleep supports energy, mood, memory and recovery.",
    tasks: [
      waterTask(16), ex(16, "walk", "20 minutes"), ex(16, "wallPosture", "2 holds of 45 seconds"),
      ex(16, "cooldown", ""), studyTask(16),
      simple(16, "sleep", "Go to bed at your chosen time tonight", "Start winding down 30 minutes earlier: dim lights, put your phone away, and keep the room quiet. Don't worry if you can't fall asleep right away. Just rest."),
      planTask(16)
    ]
  },
  {
    day: 17, phase: PHASE2, title: "Strength and Your Reason",
    objective: "Train and write down why this journey matters to you.",
    why: "A clear personal reason helps on the days when motivation is low.",
    tasks: [
      waterTask(17), ex(17, "warmup", ""),
      ex(17, "inclinePushup", "2 sets of 10"), ex(17, "supportedLunge", "2 sets of 8 per leg"),
      ex(17, "birdDog", "2 sets of 8 per side"), ex(17, "kneeSidePlank", "2 holds of 15 seconds per side"),
      ex(17, "cooldown", ""), studyTask(17),
      simple(17, "reason", "Write one sentence: 'I'm doing this because...'", "Make it about who you want to become, not about how you look. Keep it somewhere you can see."),
      planTask(17)
    ]
  },
  {
    day: 18, phase: PHASE2, title: "Hygiene and Order",
    objective: "Build a simple morning and evening care routine.",
    why: "Basic daily care improves health and confidence, and it makes a good anchor for other habits.",
    tasks: [
      waterTask(18), ex(18, "walk", "15 minutes"), ex(18, "cooldown", ""), studyTask(18),
      simple(18, "morning", "Morning routine: brush teeth, wash face, get dressed", "Do them in the same order each day. After you finish, you'll start studying."),
      simple(18, "evening", "Evening routine: brush teeth, wash up, set out tomorrow's clothes", "Doing the same steps each night tells your body it's time to wind down."),
      planTask(18),
      simple(18, "read", "Bonus: read for 10 minutes", "Optional. It never blocks progress.", false)
    ]
  },
  {
    day: 19, phase: PHASE2, title: "Strength: Steady Progress",
    objective: "Complete a full-body session with calm control.",
    why: "Every completed session builds proof that you follow through.",
    tasks: [
      waterTask(19), ex(19, "warmup", ""),
      ex(19, "inclinePushup", "2 sets of 12"), ex(19, "chairSquat", "2 sets of 15"),
      ex(19, "gluteBridge", "2 sets of 15"), ex(19, "deadBug", "2 sets of 8 per side"),
      ex(19, "calfRaise", "2 sets of 15"), ex(19, "cooldown", ""), studyTask(19),
      planTask(19)
    ]
  },
  {
    day: 20, phase: PHASE2, title: "Recovery and Learning",
    objective: "Rest your body and feed your mind.",
    why: "Reading or learning something you enjoy trains focus without stress.",
    tasks: [
      waterTask(20), ex(20, "walk", "20 minutes"), ex(20, "cooldown", ""), studyTask(20),
      simple(20, "read", "Read or learn something for 15 minutes", "Choose a book, article or lesson you actually find interesting. Write down one idea you want to remember."),
      planTask(20),
      simple(20, "tidy", "Bonus: tidy your room for 10 minutes", "Optional. It never blocks progress.", false)
    ]
  },
  {
    day: 21, phase: PHASE2, title: "Phase 2 Review",
    objective: "Review three weeks and choose a focus for the next phase.",
    why: "Three weeks of effort deserves a calm look back. Notice what works and carry it forward.",
    tasks: [
      waterTask(21), ex(21, "warmup", ""),
      ex(21, "inclinePushup", "2 sets of 8"), ex(21, "chairSquat", "2 sets of 12"),
      ex(21, "gluteBridge", "2 sets of 12"), ex(21, "cooldown", ""),
      simple(21, "review", "Write what's working, what's hard, and one thing to focus on next", "No judging. If something felt hard, make it smaller instead of dropping it."),
      studyTask(21), planTask(21)
    ]
  }
);
