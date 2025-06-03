const assert = require('assert');
const path = require('path');

function runLoader(query) {
  const documentStub = {
    body: {
      attrs: {},
      setAttribute(name, value) {
        this.attrs[name] = value;
      }
    },
    addEventListener(event, cb) {
      if (event === 'DOMContentLoaded') {
        cb();
      }
    },
    getElementById() { return { textContent: '' }; },
    querySelector() { return { innerHTML: '' }; }
  };

  global.document = documentStub;
  global.window = { location: { search: query } };
  global.amendmentData = { 1: { title: 'First' }, 5: { title: 'Fifth Amendment' } };

  delete require.cache[require.resolve('../js/loader.js')];
  require('../js/loader.js');

  return documentStub.body.attrs['data-amendment'];
}

module.exports.testSetsAmendmentAttribute = function() {
  const result = runLoader('?amendment=5');
  assert.strictEqual(result, 5);
};

module.exports.testDefaultsToOne = function() {
  const result = runLoader('');
  assert.strictEqual(result, 1);
};
