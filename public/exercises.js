// Shared exercise library. Each exercise is written once and reused by many days.
const PHASE1 = "Days 1–7: Setup and consistency";

const EXERCISES = {
  warmup: { name: "Warm-up (3 minutes)", details: WARMUP },
  cooldown: { name: "Cool-down stretch (2 minutes)", details: COOLDOWN },
  walk: {
    name: "Easy walk",
    details: "Purpose: gentle movement that helps recovery.\nWalk at a comfortable pace, indoors or outdoors. You should be able to talk easily.\nSafety: wear comfortable shoes and stay on safe paths away from traffic."
  },
  wallPushup: {
    name: "Wall push-ups",
    details: "Purpose: practice the pushing movement safely.\nMuscles: chest, shoulders, back of arms.\nRest: 60 seconds between sets.\nSteps:\n1) Stand an arm's length from a wall.\n2) Place hands on the wall at shoulder height.\n3) Keep your body straight and bend your elbows to bring your chest toward the wall.\n4) Push back to the start.\nBreathing: in as you lower, out as you push.\nCommon mistakes: sagging hips, elbows flared wide.\nEasier: stand closer to the wall or do fewer reps.\nSafety: stop if you feel sharp pain."
  },
  chairSquat: {
    name: "Chair squats",
    details: "Purpose: build leg strength.\nMuscles: thighs and glutes.\nRest: 60 seconds between sets.\nSteps:\n1) Stand in front of a sturdy chair, feet shoulder-width apart.\n2) Push your hips back and lower until you lightly touch the seat.\n3) Keep your chest up and knees in line with your toes.\n4) Stand up by pushing through your whole foot.\nBreathing: in as you lower, out as you stand.\nCommon mistakes: knees caving in, heels lifting.\nEasier: use a higher seat or do fewer reps.\nSafety: place the chair against a wall so it cannot slide."
  },
  gluteBridge: {
    name: "Glute bridges",
    details: "Purpose: strengthen glutes and support posture.\nRest: 60 seconds between sets.\nSteps:\n1) Lie on your back, knees bent, feet flat on the floor.\n2) Press through your heels and lift your hips until your body is a straight line from shoulders to knees.\n3) Pause for 1 second, then lower slowly.\nBreathing: out as you lift, in as you lower.\nCommon mistakes: arching the lower back, pushing with the toes.\nEasier: lift only halfway or do fewer reps.\nSafety: stop if you feel pain in your lower back."
  },
  kneePlank: {
    name: "Knee plank",
    details: "Purpose: train your core and posture.\nSteps:\n1) Kneel on a mat or folded blanket, hands under shoulders.\n2) Walk your hands slightly forward so your body is a straight line from head to knees.\n3) Tighten your stomach and hold.\nBreathing: keep breathing normally; don't hold your breath.\nCommon mistakes: sagging hips, hips too high.\nEasier: shorten the hold.\nSafety: stop if your lower back hurts. Rest 60 seconds between holds."
  },
  wallPosture: {
    name: "Wall posture stand",
    details: "Purpose: practice standing tall.\nMuscles: upper back and core.\nSteps:\n1) Stand with your heels a few centimetres from a wall.\n2) Gently touch your head, shoulder blades and hips to the wall.\n3) Keep your chin level and your ribs relaxed.\n4) Hold, breathing normally.\nCommon mistakes: pushing the chin up, over-arching the lower back.\nEasier: shorten the hold.\nSafety: stop if you feel dizzy or sharp pain."
  }
};

// Build an exercise task from the library.
function ex(day, key, dose, required = true) {
  const e = EXERCISES[key];
  return { id: `d${day}-${key}`, required, text: dose ? `${e.name}: ${dose}` : e.name, details: e.details };
}
// Build any other task.
function simple(day, id, text, details, required = true) {
  return { id: `d${day}-${id}`, required, text, details };
}
