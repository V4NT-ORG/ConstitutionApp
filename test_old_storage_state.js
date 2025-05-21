// Load mock environment
require('./mock_browser_env.js');

// Load the awards script code
const fs = require('fs');
const awardsScriptContent = fs.readFileSync('js/awards.js', 'utf8');
eval(awardsScriptContent);

console.log("Awards script loaded.");

// --- Test for old localStorage state (missing visitedAmendments) ---
console.log("\n--- Test: Old localStorage state (missing visitedAmendments) ---");

// 1. Set up an old localStorage state
const oldUserAwards = {
  progress: {
    constitutionExplorer: {
      count: 1, // User had some progress
      currentTier: null
      // visitedAmendments is deliberately missing
    },
    // Other awards might exist here, simplified for this test
    firstAmendment: { unlocked: true }
  },
  unlocked: {
    constitutionExplorer: []
  }
};
localStorage.setItem('userAwards', JSON.stringify(oldUserAwards));
console.log("Manually set old localStorage state:", localStorage.getItem('userAwards'));

// 2. Initialize awards - this should load the old state
if (typeof initAwards === 'function') {
  initAwards();
} else {
  console.error('initAwards function not found.');
  process.exit(1);
}
console.log("localStorage after initAwards (should reflect loaded old state with potential modifications by init):", localStorage.getItem('userAwards'));


// 3. Trigger an amendmentVisited event for a NEW amendment
console.log("\n--- Triggering visit to Amendment 2 (new) ---");
awardsSystem.triggerAwardEvent('amendmentVisited', 2); // New amendment

let stateAfterVisit = JSON.parse(localStorage.getItem('userAwards'));
console.log("UserAwards after visit:", JSON.stringify(stateAfterVisit.progress.constitutionExplorer));

if (stateAfterVisit.progress.constitutionExplorer &&
    stateAfterVisit.progress.constitutionExplorer.visitedAmendments &&
    stateAfterVisit.progress.constitutionExplorer.visitedAmendments.includes(2) &&
    stateAfterVisit.progress.constitutionExplorer.visitedAmendments.length === 1 && // Should only contain '2' as '1' was never in a visitedAmendments array
    stateAfterVisit.progress.constitutionExplorer.count === 2) { // Count should increment from the 'old' count
  console.log("Test Old Storage State PASSED: visitedAmendments initialized and updated.");
} else {
  console.log("Test Old Storage State FAILED.");
  console.log("Details: count =", stateAfterVisit.progress.constitutionExplorer.count,
              "visitedAmendments =", stateAfterVisit.progress.constitutionExplorer.visitedAmendments);
}

// 4. Trigger an amendmentVisited event for an OLD amendment (hypothetically, if '1' was the pre-existing visit)
// This test is a bit tricky because the 'count' was 1 but no specific amendment numbers were stored.
// The current implementation would treat any new amendment number as "new" if not in the (newly created) visitedAmendments array.
// Let's see what happens if we visit amendment '1', which we might imagine was the one that gave the initial count of 1.
console.log("\n--- Triggering visit to Amendment 1 (potentially the 'old' one) ---");
awardsSystem.triggerAwardEvent('amendmentVisited', 1);

stateAfterVisit = JSON.parse(localStorage.getItem('userAwards'));
console.log("UserAwards after visiting amendment 1:", JSON.stringify(stateAfterVisit.progress.constitutionExplorer));

if (stateAfterVisit.progress.constitutionExplorer &&
    stateAfterVisit.progress.constitutionExplorer.visitedAmendments &&
    stateAfterVisit.progress.constitutionExplorer.visitedAmendments.includes(1) &&
    stateAfterVisit.progress.constitutionExplorer.visitedAmendments.includes(2) &&
    stateAfterVisit.progress.constitutionExplorer.visitedAmendments.length === 2 &&
    stateAfterVisit.progress.constitutionExplorer.count === 3) { // Count would be 3 if '1' is also treated as new
  console.log("Test Old Storage State (visit 1) PASSED: Amendment 1 added, count incremented.");
} else {
  console.log("Test Old Storage State (visit 1) FAILED.");
   console.log("Details: count =", stateAfterVisit.progress.constitutionExplorer.count,
              "visitedAmendments =", stateAfterVisit.progress.constitutionExplorer.visitedAmendments);
}


console.log("\nFinal localStorage state for old state test:", JSON.stringify(localStorage.getStore()));
