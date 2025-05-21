// Load mock environment
require('./mock_browser_env.js');

// Load the awards script code (assuming it's readable as a string)
const fs = require('fs');
const awardsScriptContent = fs.readFileSync('js/awards.js', 'utf8');

// Evaluate the awards script in the global context
// This is a common way to load non-module scripts in Node for testing
// Ensure awards.js doesn't have module.exports if run this way, or adapt.
// For this test, we assume awards.js defines functions and variables in the global scope
// or attaches them to 'window' (which is global in mock_browser_env.js)
eval(awardsScriptContent);

console.log("Awards script loaded. Initializing awards...");
// Manually trigger initialization as DOMContentLoaded won't fire in Node
if (typeof initAwards === 'function') {
  initAwards();
} else {
  console.error('initAwards function not found. Ensure awards.js is loaded correctly.');
  process.exit(1);
}

console.log("Initial userAwards state:", JSON.stringify(localStorage.getStore()));

// Test 1: Visit Amendment 1
console.log("\n--- Test: Visit Amendment 1 ---");
awardsSystem.triggerAwardEvent('amendmentVisited', 1);
let stateAfterVisit1 = JSON.parse(localStorage.getItem('userAwards'));
console.log("UserAwards after visit 1:", JSON.stringify(stateAfterVisit1.progress.constitutionExplorer));
if (stateAfterVisit1.progress.constitutionExplorer.count === 1 &&
    stateAfterVisit1.progress.constitutionExplorer.visitedAmendments.includes(1) &&
    stateAfterVisit1.progress.constitutionExplorer.visitedAmendments.length === 1) {
  console.log("Test 1 PASSED");
} else {
  console.log("Test 1 FAILED");
}

// Test 2: Visit Amendment 2
console.log("\n--- Test: Visit Amendment 2 ---");
awardsSystem.triggerAwardEvent('amendmentVisited', 2);
let stateAfterVisit2 = JSON.parse(localStorage.getItem('userAwards'));
console.log("UserAwards after visit 2:", JSON.stringify(stateAfterVisit2.progress.constitutionExplorer));
if (stateAfterVisit2.progress.constitutionExplorer.count === 2 &&
    stateAfterVisit2.progress.constitutionExplorer.visitedAmendments.includes(2) &&
    stateAfterVisit2.progress.constitutionExplorer.visitedAmendments.length === 2) {
  console.log("Test 2 PASSED");
} else {
  console.log("Test 2 FAILED");
}

// Test 3: Revisit Amendment 1 (should not change count)
console.log("\n--- Test: Revisit Amendment 1 ---");
awardsSystem.triggerAwardEvent('amendmentVisited', 1);
let stateAfterRevisit1 = JSON.parse(localStorage.getItem('userAwards'));
console.log("UserAwards after revisit 1:", JSON.stringify(stateAfterRevisit1.progress.constitutionExplorer));
if (stateAfterRevisit1.progress.constitutionExplorer.count === 2 && // Count should remain 2
    stateAfterRevisit1.progress.constitutionExplorer.visitedAmendments.includes(1) &&
    stateAfterRevisit1.progress.constitutionExplorer.visitedAmendments.length === 2) { // Length should remain 2
  console.log("Test 3 PASSED");
} else {
  console.log("Test 3 FAILED");
}

// Test 4: Visit Amendment 3
console.log("\n--- Test: Visit Amendment 3 ---");
awardsSystem.triggerAwardEvent('amendmentVisited', 3);
let stateAfterVisit3 = JSON.parse(localStorage.getItem('userAwards'));
console.log("UserAwards after visit 3:", JSON.stringify(stateAfterVisit3.progress.constitutionExplorer));
if (stateAfterVisit3.progress.constitutionExplorer.count === 3 &&
    stateAfterVisit3.progress.constitutionExplorer.visitedAmendments.includes(3) &&
    stateAfterVisit3.progress.constitutionExplorer.visitedAmendments.length === 3 &&
    stateAfterVisit3.progress.constitutionExplorer.currentTier === 'bronze') { // Bronze tier at 3 visits
  console.log("Test 4 PASSED (Bronze tier unlocked)");
} else {
  console.log("Test 4 FAILED");
  console.log("Details: count =", stateAfterVisit3.progress.constitutionExplorer.count,
              "visitedAmendments =", stateAfterVisit3.progress.constitutionExplorer.visitedAmendments,
              "currentTier =", stateAfterVisit3.progress.constitutionExplorer.currentTier);
}

console.log("\nFinal localStorage state:", JSON.stringify(localStorage.getStore()));
