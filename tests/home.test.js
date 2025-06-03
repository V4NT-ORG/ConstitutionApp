const assert = require('assert');

function setupDocument(status) {
  const card = {
    children: [],
    appendChild(node) { this.children.push(node); },
    querySelector(sel) {
      if (sel === '.amendment-status') {
        return this.children.find(c => c.className && c.className.includes('amendment-status')) || null;
      }
      return null;
    },
    closest(tag) {
      if (tag === 'a') return { href: 'amendments.html?amendment=5' };
      return null;
    }
  };

  const documentStub = {
    querySelector(sel) { return sel === '.amendments-list' ? {} : null; },
    querySelectorAll(sel) { return sel === '.amendment-card-home' ? [card] : []; },
    createElement() { return { className: '', innerHTML: '' }; },
    addEventListener(event, cb) { if (event === 'DOMContentLoaded') cb(); }
  };

  global.document = documentStub;
  global.localStorage = {
    getItem(key) { return key === 'amendmentStatus' ? JSON.stringify(status) : null; }
  };

  delete require.cache[require.resolve('../js/home.js')];
  require('../js/home.js');

  return card;
}

module.exports.testAddsCompletedBadge = function() {
  const card = setupDocument({ 5: 'completed' });
  const status = card.children[0];
  assert(status.className.includes('completed'));
};

module.exports.testAddsMasteredBadge = function() {
  const card = setupDocument({ 5: 'mastered' });
  const status = card.children[0];
  assert(status.className.includes('mastered'));
};
