// Mock window object
global.window = global;

// Mock localStorage
global.localStorage = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    removeItem: function(key) {
      delete store[key];
    },
    clear: function() {
      store = {};
    },
    getStore: function() { // Helper to inspect the store
      return store;
    }
  };
})();

// Mock document event system
global.document = {
  _eventListeners: {},
  addEventListener: function(type, callback) {
    if (!this._eventListeners[type]) {
      this._eventListeners[type] = [];
    }
    this._eventListeners[type].push(callback);
  },
  dispatchEvent: function(event) {
    if (!this._eventListeners[event.type]) {
      return true;
    }
    this._eventListeners[event.type].forEach(callback => callback(event));
    return true;
  },
  querySelector: function(selector) {
    // Minimal mock for querySelector, returning a dummy element if needed for notification
    if (selector === '.award-notification-container') {
      return {
        appendChild: function(element) {
          // console.log('Mocked appendChild called for notification:', element.innerHTML);
        },
        // Mock other methods if awards.js tries to use them on this element
      };
    }
    return null; // Default behavior
  },
  createElement: function(tagName) {
    // Minimal mock for createElement
    // console.log(`Mocked document.createElement called with tagName: ${tagName}`);
    return {
      // Mock properties and methods that might be used on the created element by showAwardNotification
      className: '',
      innerHTML: '',
      classList: {
        add: function(className) {
          // console.log(`Mocked classList.add called with: ${className}`);
          this.className = (this.className + ' ' + className).trim();
        },
        remove: function(className) {
          // console.log(`Mocked classList.remove called with: ${className}`);
          this.className = this.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '').trim();
        }
      },
      // Add other properties/methods if errors indicate they are needed
    };
  }
};

// Mock CustomEvent
global.CustomEvent = class CustomEvent extends Event {
  constructor(type, params = {}) {
    super(type);
    this.detail = params.detail;
  }
};

global.Event = class Event {
  constructor(type) {
    this.type = type;
  }
};

// Mock Date for Constitution Day award
global.Date = class extends Date {
    constructor(...args) {
        if (args.length === 0) {
            // Controlled date for testing, e.g., not Sept 17
            super('2023-01-01T00:00:00.000Z');
        } else {
            super(...args);
        }
    }
};

// Mock for updateXPDisplay if it's called directly or via unlock functions
global.updateXPDisplay = function(xp) {
  // console.log(`updateXPDisplay called with ${xp} XP`);
  const currentXP = parseInt(localStorage.getItem('totalUserXP') || 0);
  localStorage.setItem('totalUserXP', currentXP + xp);
};

// Mock setTimeout and clearTimeout
global.setTimeout = function(callback, delay) {
  // console.log(`Mocked setTimeout called with delay: ${delay}`);
  // In a test environment, you might want to execute immediately or manage a fake timer
  // For now, just call the callback immediately for simplicity in notification logic
  if (typeof callback === 'function') {
    // callback(); // This might cause infinite loops if not careful with how it's used in awards.js
  }
  return 0; // Return a dummy timeoutId
};
global.clearTimeout = function(timeoutId) {
  // console.log(`Mocked clearTimeout called with timeoutId: ${timeoutId}`);
  // No-op for this mock
};


console.log('Mock browser environment loaded (v3 - with createElement and setTimeout).');
