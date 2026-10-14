// Roadmap content. Later we replace this one file with all 90 days.
const WARMUP = "Purpose: prepare your body.\nMarch on the spot for 1 minute. Do 10 slow arm circles forward and 10 backward. Do 10 gentle hip circles each way. Breathe normally.\nSafety: stop if anything hurts sharply.";
const COOLDOWN = "Hold each gentle stretch for 20 seconds: reach one arm across your chest, then the other; stand and reach both arms overhead; sit and reach toward your toes without forcing it. Breathe slowly.\nSafety: a stretch should feel like a mild pull, never pain.";
const STUDY = "Set a 25-minute timer, then put your phone face-down across the room. Study one subject. If you get distracted, just return to the task.";
const PLAN = "Before bed, write one line: \"Tomorrow, after ___, I will ___.\" Keep it small and specific.";

const DAYS = [
  {
    day: 1, phase: "Days 1–7: Setup and consistency", title: "Start Small",
    objective: "Finish a small, easy day to prove to yourself that you can start.",
    why: "Starting is the hardest part. A small win today makes tomorrow easier.",
    tasks: [
      { id: "d1-water", required: true, text: "Drink a glass of water after waking up", details: "After I wake up, I will drink a glass of water. Do it right after getting out of bed." },
      { id: "d1-warmup", required: true, text: "Warm-up (3 minutes)", details: WARMUP },
      { id: "d1-pushups", required: true, text: "Wall push-ups: 2 sets of 8", details: "Purpose: practice the pushing movement safely.\nMuscles: chest, shoulders, back of arms.\nRest: 60 seconds between sets.\nSteps:\n1) Stand an arm's length from a wall.\n2) Place hands on the wall at shoulder height.\n3) Keep your body straight and bend your elbows to bring your chest toward the wall.\n4) Push back to the start.\nBreathing: in as you lower, out as you push.\nCommon mistakes: sagging hips, elbows flared wide.\nEasier: stand closer to the wall or do 5 reps.\nSafety: stop if you feel sharp pain." },
      { id: "d1-squats", required: true, text: "Chair squats: 2 sets of 8", details: "Purpose: build leg strength.\nMuscles: thighs and glutes.\nRest: 60 seconds between sets.\nSteps:\n1) Stand in front of a sturdy chair, feet shoulder-width apart.\n2) Push your hips back and lower until you lightly touch the seat.\n3) Keep your chest up and knees in line with your toes.\n4) Stand up by pushing through your whole foot.\nBreathing: in as you lower, out as you stand.\nCommon mistakes: knees caving in, heels lifting.\nEasier: use a higher seat or do 5 reps.\nSafety: place the chair against a wall so it cannot slide." },
      { id: "d1-cooldown", required: true, text: "Cool-down stretch (2 minutes)", details: COOLDOWN },
      { id: "d1-study", required: true, text: "Study one subject for 25 minutes", details: STUDY },
      { id: "d1-plan", required: true, text: "Write down tomorrow's first task", details: PLAN },
      { id: "d1-read", required: false, text: "Bonus: read for 10 minutes", details: "Any book or article you enjoy. Optional, and it never blocks progress." }
    ]
  },
  {
    day: 2, phase: "Days 1–7: Setup and consistency", title: "Easy Movement and Routine",
    objective: "Keep moving gently and tidy the place where you study.",
    why: "Light movement helps recovery, and a clear desk makes starting study easier.",
    tasks: [
      { id: "d2-water", required: true, text: "Drink a glass of water after waking up", details: "Same cue as yesterday: wake up, then water." },
      { id: "d2-walk", required: true, text: "Easy walk or light movement (10 minutes)", details: "Walk at a comfortable pace, indoors or outdoors. You should be able to talk easily. This counts as recovery." },
      { id: "d2-bridge", required: true, text: "Glute bridges: 2 sets of 10", details: "Purpose: strengthen glutes and support posture.\nRest: 60 seconds between sets.\nSteps:\n1) Lie on your back, knees bent, feet flat on the floor.\n2) Press through your heels and lift your hips until your body is a straight line from shoulders to knees.\n3) Pause for 1 second, then lower slowly.\nBreathing: out as you lift, in as you lower.\nCommon mistakes: arching the lower back, pushing with the toes.\nEasier: lift only halfway or do 6 reps.\nSafety: stop if you feel pain in your lower back." },
      { id: "d2-study", required: true, text: "Study one subject for 25 minutes", details: STUDY },
      { id: "d2-room", required: true, text: "Tidy your study space for 5 minutes", details: "Clear the desk, put things back where they belong. Environment design: a clear space lowers the effort of starting." },
      { id: "d2-plan", required: true, text: "Write down tomorrow's first task", details: PLAN },
      { id: "d2-stretch", required: false, text: "Bonus: 5 more minutes of stretching", details: COOLDOWN }
    ]
  },
  {
    day: 3, phase: "Days 1–7: Setup and consistency", title: "Build the Rhythm",
    objective: "Repeat the routine with a small step up.",
    why: "Consistency grows when the routine feels familiar and only slightly harder.",
    tasks: [
      { id: "d3-water", required: true, text: "Drink a glass of water after waking up", details: "Same cue: wake up, then water." },
      { id: "d3-warmup", required: true, text: "Warm-up (3 minutes)", details: WARMUP },
      { id: "d3-pushups", required: true, text: "Wall push-ups: 2 sets of 10", details: "Same as Day 1, now 10 reps. Rest 60 seconds between sets.\nEasier: do 8 reps.\nSafety: stop if you feel sharp pain." },
      { id: "d3-squats", required: true, text: "Chair squats: 2 sets of 10", details: "Same as Day 1, now 10 reps. Rest 60 seconds between sets.\nEasier: do 8 reps.\nSafety: keep the chair against a wall." },
      { id: "d3-plank", required: true, text: "Knee plank: 2 holds of 15 seconds", details: "Purpose: train your core and posture.\nSteps:\n1) Kneel on a mat or folded blanket, hands under shoulders.\n2) Walk your hands slightly forward so your body is a straight line from head to knees.\n3) Tighten your stomach and hold for 15 seconds.\nBreathing: keep breathing normally; don't hold your breath.\nCommon mistakes: sagging hips, hips too high.\nEasier: hold for 10 seconds.\nSafety: stop if your lower back hurts. Rest 60 seconds between holds." },
      { id: "d3-cooldown", required: true, text: "Cool-down stretch (2 minutes)", details: COOLDOWN },
      { id: "d3-study", required: true, text: "Study one subject for 25 minutes", details: STUDY },
      { id: "d3-plan", required: true, text: "Write down tomorrow's first task", details: PLAN }
    ]
  }
];
