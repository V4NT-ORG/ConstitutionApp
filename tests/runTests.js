const fs = require('fs');
const path = require('path');

function runFile(filePath) {
  const testModule = require(filePath);
  const tests = Object.entries(testModule);
  let failed = 0;
  tests.forEach(([name, fn]) => {
    try {
      fn();
      console.log(`\u2714 ${name}`);
    } catch (err) {
      failed++;
      console.error(`\u2716 ${name}`);
      console.error(err);
    }
  });
  return failed;
}

function main() {
  const testDir = __dirname;
  const files = fs.readdirSync(testDir).filter(f => f.endsWith('.test.js'));
  let failed = 0;
  files.forEach(file => {
    failed += runFile(path.join(testDir, file));
  });
  if (failed > 0) {
    console.error(`${failed} test(s) failed.`);
    process.exit(1);
  } else {
    console.log('All tests passed.');
  }
}

main();
