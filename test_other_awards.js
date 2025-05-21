// Load mock environment
require('./mock_browser_env.js');

// Load the awards script code
const fs = require('fs');
const awardsScriptContent = fs.readFileSync('js/awards.js', 'utf8');
eval(awardsScriptContent);

console.log("Awards script loaded. Initializing awards...");
if (typeof initAwards === 'function') {
  initAwards();
} else {
  console.error('initAwards function not found.');
  process.exit(1);
}
console.log("Initial userAwards state:", JSON.stringify(JSON.parse(localStorage.getItem('userAwards'))));

// --- Test 1: Constitution Scholar Award (amendmentCompleted) ---
console.log("\n--- Test: Constitution Scholar Award ---");
awardsSystem.triggerAwardEvent('amendmentCompleted', 1); // Amendment number 1, for example
let stateAfterScholar = JSON.parse(localStorage.getItem('userAwards'));
console.log("UserAwards after amendmentCompleted:", JSON.stringify(stateAfterScholar.progress.constitutionScholar));

if (stateAfterScholar.progress.constitutionScholar &&
    stateAfterScholar.progress.constitutionScholar.count === 1) {
  console.log("Test Constitution Scholar PASSED");
} else {
  console.log("Test Constitution Scholar FAILED");
  console.log("Details: count =", stateAfterScholar.progress.constitutionScholar.count);
}

// --- Test 2: Quiz Awards (quizCompleted) ---
console.log("\n--- Test: Quiz Awards ---");
// Simulate completing a quiz with 5 correct answers, and it's an improvement, and it's perfect
awardsSystem.triggerAwardEvent('quizCompleted', null, { 
  isPerfect: true, 
  correctCount: 5, 
  isImprovement: true 
});
let stateAfterQuiz = JSON.parse(localStorage.getItem('userAwards'));

console.log("UserAwards after quizCompleted (perfectQuizzer):", JSON.stringify(stateAfterQuiz.progress.perfectQuizzer));
console.log("UserAwards after quizCompleted (quizWhiz):", JSON.stringify(stateAfterQuiz.progress.quizWhiz));

let quizWhizPassed = false;
if (stateAfterQuiz.progress.quizWhiz &&
    stateAfterQuiz.progress.quizWhiz.count === 5) { // 5 correct answers
  quizWhizPassed = true;
}

let perfectQuizzerPassed = false;
if (stateAfterQuiz.progress.perfectQuizzer &&
    stateAfterQuiz.progress.perfectQuizzer.count === 1) { // 1 perfect quiz
  perfectQuizzerPassed = true;
}

if (quizWhizPassed && perfectQuizzerPassed) {
  console.log("Test Quiz Awards PASSED");
} else {
  console.log("Test Quiz Awards FAILED");
  if (!quizWhizPassed) console.log("  QuizWhiz check FAILED. Count:", stateAfterQuiz.progress.quizWhiz.count);
  if (!perfectQuizzerPassed) console.log("  PerfectQuizzer check FAILED. Count:", stateAfterQuiz.progress.perfectQuizzer.count);
}

// --- Test 3: Constitution Explorer (to ensure it's NOT affected by other events) ---
console.log("\n--- Test: Constitution Explorer Unaffected ---");
let stateAfterOtherEvents = JSON.parse(localStorage.getItem('userAwards'));
console.log("UserAwards constitutionExplorer state:", JSON.stringify(stateAfterOtherEvents.progress.constitutionExplorer));
if (stateAfterOtherEvents.progress.constitutionExplorer &&
    stateAfterOtherEvents.progress.constitutionExplorer.count === 0 && // Should be 0 as no amendmentVisited event was triggered
    stateAfterOtherEvents.progress.constitutionExplorer.visitedAmendments.length === 0) {
  console.log("Test Constitution Explorer Unaffected PASSED");
} else {
  console.log("Test Constitution Explorer Unaffected FAILED");
   console.log("Details: count =", stateAfterOtherEvents.progress.constitutionExplorer.count,
              "visitedAmendments =", stateAfterOtherEvents.progress.constitutionExplorer.visitedAmendments);
}


console.log("\nFinal localStorage state for other awards test:", JSON.stringify(localStorage.getStore()));
