/**
 * Awards System for Constitution Explorer
 * Defines awards, triggers, and display logic
 */

// Award data structure with multiple award types and tiers
const awardsData = {
  // Achievement-based awards
  explorerAwards: {
    constitutionExplorer: {
      id: "constitutionExplorer",
      name: "Constitution Explorer",
      description: "Visit amendments to unlock tiers",
      icon: "fas fa-compass",
      type: "exploration",
      tiers: [
        { id: "bronze", name: "Bronze Explorer", threshold: 3, xp: 50, description: "Visit 3 amendments" },
        { id: "silver", name: "Silver Explorer", threshold: 6, xp: 100, description: "Visit 6 amendments" },
        { id: "gold", name: "Gold Explorer", threshold: 10, xp: 200, description: "Visit all 10 amendments" }
      ]
    },
    constitutionScholar: {
      id: "constitutionScholar",
      name: "Constitution Scholar",
      description: "Complete amendment modules to unlock tiers",
      icon: "fas fa-graduation-cap",
      type: "completion",
      tiers: [
        { id: "bronze", name: "Bronze Scholar", threshold: 3, xp: 75, description: "Complete 3 amendments" },
        { id: "silver", name: "Silver Scholar", threshold: 6, xp: 150, description: "Complete 6 amendments" },
        { id: "gold", name: "Gold Scholar", threshold: 10, xp: 300, description: "Complete all 10 amendments" }
      ]
    },
    constitutionMaster: {
      id: "constitutionMaster",
      name: "Constitution Master",
      description: "Master amendment modules to unlock tiers",
      icon: "fas fa-award",
      type: "mastery",
      tiers: [
        { id: "bronze", name: "Bronze Master", threshold: 3, xp: 100, description: "Master 3 amendments" },
        { id: "silver", name: "Silver Master", threshold: 6, xp: 200, description: "Master 6 amendments" },
        { id: "gold", name: "Gold Master", threshold: 10, xp: 400, description: "Master all 10 amendments" }
      ]
    }
  },
  
  // Quiz performance awards
  quizAwards: {
    quizWhiz: {
      id: "quizWhiz",
      name: "Quiz Whiz",
      description: "Answer quiz questions correctly to unlock tiers",
      icon: "fas fa-brain",
      type: "quiz",
      tiers: [
        { id: "bronze", name: "Bronze Whiz", threshold: 10, xp: 50, description: "Answer 10 quiz questions correctly" },
        { id: "silver", name: "Silver Whiz", threshold: 20, xp: 100, description: "Answer 20 quiz questions correctly" },
        { id: "gold", name: "Gold Whiz", threshold: 30, xp: 200, description: "Answer 30 quiz questions correctly" }
      ]
    },
    perfectQuizzer: {
      id: "perfectQuizzer",
      name: "Perfect Quizzer",
      description: "Complete quizzes with perfect scores",
      icon: "fas fa-check-circle",
      type: "quiz",
      tiers: [
        { id: "bronze", name: "Bronze Perfectionist", threshold: 3, xp: 75, description: "Complete 3 quizzes perfectly" },
        { id: "silver", name: "Silver Perfectionist", threshold: 6, xp: 150, description: "Complete 6 quizzes perfectly" },
        { id: "gold", name: "Gold Perfectionist", threshold: 10, xp: 300, description: "Complete all quizzes perfectly" }
      ]
    }
  },
  
  // Scenario-based awards
  scenarioAwards: {
    scenarioMaster: {
      id: "scenarioMaster",
      name: "Scenario Master",
      description: "Complete scenario challenges successfully",
      icon: "fas fa-lightbulb",
      type: "scenario",
      tiers: [
        { id: "bronze", name: "Bronze Scenario Master", threshold: 3, xp: 75, description: "Complete 3 scenarios successfully" },
        { id: "silver", name: "Silver Scenario Master", threshold: 6, xp: 150, description: "Complete 6 scenarios successfully" },
        { id: "gold", name: "Gold Scenario Master", threshold: 10, xp: 300, description: "Complete all scenarios successfully" }
      ]
    }
  },
  
  // Special achievement awards (single-tier)
  specialAwards: {
    firstAmendment: {
      id: "firstAmendment",
      name: "First Amendment Explorer",
      description: "Complete your first amendment exploration",
      icon: "fas fa-flag",
      type: "milestone",
      xp: 50,
      unlockCondition: "Complete any amendment module"
    },
    constitutionDay: {
      id: "constitutionDay",
      name: "Constitution Day",
      description: "Visit on Constitution Day (September 17)",
      icon: "fas fa-calendar-day",
      type: "special",
      xp: 100,
      unlockCondition: "Visit the app on September 17th"
    }
  }
};

// Award progress tracking
let userAwards = {
  // Structure to track progress toward each award
  progress: {},
  // Structure to track unlocked awards
  unlocked: {}
};

// Initialize awards system
function initAwards() {
  // Load saved award data from localStorage or initialize
  loadUserAwards();
  
  // Listen for relevant events that might trigger awards
  setupAwardListeners();
}

// Load user awards data from localStorage
function loadUserAwards() {
  try {
    const savedAwards = localStorage.getItem('userAwards');
    if (savedAwards) {
      userAwards = JSON.parse(savedAwards);
    } else {
      // Initialize award progress tracking for all awards
      initializeAwardProgress();
      saveUserAwards();
    }
  } catch (error) {
    console.error('Error loading awards from localStorage:', error);
    initializeAwardProgress();
    saveUserAwards();
  }
}

// Initialize award progress for all awards
function initializeAwardProgress() {
  // Initialize tiered awards
  const awardCategories = [
    awardsData.explorerAwards,
    awardsData.quizAwards,
    awardsData.scenarioAwards
  ];
  
  userAwards.progress = {};
  userAwards.unlocked = {};
  
  // Initialize each award
  awardCategories.forEach(category => {
    Object.keys(category).forEach(awardKey => {
      const award = category[awardKey];
      userAwards.progress[award.id] = {
        count: 0,
        currentTier: null
      };
      userAwards.unlocked[award.id] = [];
    });
  });
  
  // Initialize special awards
  Object.keys(awardsData.specialAwards).forEach(awardKey => {
    const award = awardsData.specialAwards[awardKey];
    userAwards.progress[award.id] = {
      unlocked: false
    };
  });
}

// Save user awards to localStorage
function saveUserAwards() {
  localStorage.setItem('userAwards', JSON.stringify(userAwards));
}

// Check if an award tier should be unlocked
function checkAwardTier(awardId, category) {
  const award = awardsData[category][awardId];
  const progress = userAwards.progress[awardId];
  
  // Skip if award not found
  if (!award || !progress) return;
  
  // Check each tier that hasn't been unlocked yet
  award.tiers.forEach(tier => {
    // Skip if already unlocked
    if (userAwards.unlocked[awardId].includes(tier.id)) return;
    
    // Check if threshold reached
    if (progress.count >= tier.threshold) {
      unlockAwardTier(awardId, tier, category);
    }
  });
}

// Unlock an award tier
function unlockAwardTier(awardId, tier, category) {
  // Add to unlocked tiers
  userAwards.unlocked[awardId].push(tier.id);
  
  // Update current tier
  userAwards.progress[awardId].currentTier = tier.id;
  
  // Save changes
  saveUserAwards();
  
  // Award XP
  if (typeof updateXPDisplay === 'function') {
    updateXPDisplay(tier.xp);
  } else {
    // If updateXPDisplay not available, update localStorage directly
    const currentXP = parseInt(localStorage.getItem('totalUserXP') || 0);
    localStorage.setItem('totalUserXP', currentXP + tier.xp);
  }
  
  // Show notification
  showAwardNotification(awardId, tier, category);
}

// Unlock a special award
function unlockSpecialAward(awardId) {
  const award = awardsData.specialAwards[awardId];
  
  // Skip if award not found or already unlocked
  if (!award || userAwards.progress[awardId].unlocked) return;
  
  // Mark as unlocked
  userAwards.progress[awardId].unlocked = true;
  
  // Save changes
  saveUserAwards();
  
  // Award XP
  if (typeof updateXPDisplay === 'function') {
    updateXPDisplay(award.xp);
  } else {
    // If updateXPDisplay not available, update localStorage directly
    const currentXP = parseInt(localStorage.getItem('totalUserXP') || 0);
    localStorage.setItem('totalUserXP', currentXP + award.xp);
  }
  
  // Show notification
  showAwardNotification(awardId, null, 'specialAwards');
}

// Show award notification
function showAwardNotification(awardId, tier, category) {
  // Get award data
  const award = awardsData[category][awardId];
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'award-notification';
  
  // For tiered awards
  if (tier) {
    notification.innerHTML = `
      <div class="award-icon ${tier.id}">
        <i class="${award.icon}"></i>
      </div>
      <div class="award-info">
        <h3>Award Unlocked: ${tier.name}</h3>
        <p>${tier.description}</p>
        <span class="award-xp">+${tier.xp} XP</span>
      </div>
    `;
  } 
  // For special awards
  else {
    notification.innerHTML = `
      <div class="award-icon special">
        <i class="${award.icon}"></i>
      </div>
      <div class="award-info">
        <h3>Award Unlocked: ${award.name}</h3>
        <p>${award.description}</p>
        <span class="award-xp">+${award.xp} XP</span>
      </div>
    `;
  }
  
  // Add to DOM
  const container = document.querySelector('.award-notification-container');
  if (container) {
    container.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 5000);
  }
}

// Set up event listeners for award triggers
function setupAwardListeners() {
  // Centralized event handler for tracking award progress
  document.addEventListener('awardEvent', function(e) {
    const { type, amendmentNumber, details } = e.detail;
    
    // Process different event types
    switch (type) {
      case 'amendmentVisited':
        incrementAwardProgress('constitutionExplorer', 'explorerAwards');
        checkAwardTier('constitutionExplorer', 'explorerAwards');
        
        // Check for first amendment special award
        if (!userAwards.progress.firstAmendment.unlocked) {
          unlockSpecialAward('firstAmendment');
        }
        break;
        
      case 'amendmentCompleted':
        incrementAwardProgress('constitutionScholar', 'explorerAwards');
        checkAwardTier('constitutionScholar', 'explorerAwards');
        break;
        
      case 'amendmentMastered':
        incrementAwardProgress('constitutionMaster', 'explorerAwards');
        checkAwardTier('constitutionMaster', 'explorerAwards');
        break;
        
      case 'quizCompleted':
        // Track perfect quizzes
        if (details && details.isPerfect) {
          incrementAwardProgress('perfectQuizzer', 'quizAwards');
          checkAwardTier('perfectQuizzer', 'quizAwards');
        }
        
        // Track correct answers - only count the net new correct answers
        if (details && details.correctCount && details.isImprovement) {
          // For quizWhiz, we track total correct answers
          addToAwardProgress('quizWhiz', details.correctCount, 'quizAwards');
          checkAwardTier('quizWhiz', 'quizAwards');
        }
        break;
        
      case 'scenarioCompleted':
        if (details && details.isCorrect) {
          incrementAwardProgress('scenarioMaster', 'scenarioAwards');
          checkAwardTier('scenarioMaster', 'scenarioAwards');
        }
        break;
    }
  });
  
  // Special award: Constitution Day
  const today = new Date();
  if (today.getMonth() === 8 && today.getDate() === 17) { // September 17
    unlockSpecialAward('constitutionDay');
  }
}

// Increment award progress counter by 1
function incrementAwardProgress(awardId, category) {
  if (userAwards.progress[awardId]) {
    userAwards.progress[awardId].count = (userAwards.progress[awardId].count || 0) + 1;
    saveUserAwards();
  }
}

// Add specific amount to award progress
function addToAwardProgress(awardId, amount, category) {
  if (userAwards.progress[awardId]) {
    userAwards.progress[awardId].count = (userAwards.progress[awardId].count || 0) + amount;
    saveUserAwards();
  }
}

// Render awards on home page
function renderAwardsSection() {
  const container = document.querySelector('.awards-container');
  if (!container) return;
  
  let html = '<h3>Your Awards</h3><div class="awards-grid">';
  
  // Render tiered awards
  const awardCategories = [
    { data: awardsData.explorerAwards, title: 'Explorer Awards' },
    { data: awardsData.quizAwards, title: 'Quiz Awards' },
    { data: awardsData.scenarioAwards, title: 'Scenario Awards' }
  ];
  
  awardCategories.forEach(category => {
    Object.keys(category.data).forEach(awardKey => {
      const award = category.data[awardKey];
      const progress = userAwards.progress[award.id];
      const unlockedTiers = userAwards.unlocked[award.id] || [];
      
      // Skip if no progress and no tiers unlocked
      if (progress.count === 0 && unlockedTiers.length === 0) return;
      
      // Determine current tier for styling
      const currentTier = progress.currentTier || 'locked';
      
      html += `
        <div class="award-card ${currentTier}">
          <div class="award-icon">
            <i class="${award.icon}"></i>
          </div>
          <div class="award-content">
            <h4>${award.name}</h4>
            <p>${award.description}</p>
            <div class="award-progress">
              <div class="award-tiers">
      `;
      
      // Add tier indicators
      award.tiers.forEach(tier => {
        const isUnlocked = unlockedTiers.includes(tier.id);
        html += `<span class="tier-indicator ${tier.id} ${isUnlocked ? 'unlocked' : 'locked'}" 
                      title="${tier.name}: ${tier.description}"></span>`;
      });
      
      html += `
              </div>
              <div class="award-count">${progress.count}/${award.tiers[award.tiers.length-1].threshold}</div>
            </div>
          </div>
        </div>
      `;
    });
  });
  
  // Render special awards
  html += '<h4 class="special-awards-heading">Special Awards</h4>';
  
  Object.keys(awardsData.specialAwards).forEach(awardKey => {
    const award = awardsData.specialAwards[awardKey];
    const isUnlocked = userAwards.progress[award.id].unlocked;
    
    html += `
      <div class="award-card special ${isUnlocked ? 'unlocked' : 'locked'}">
        <div class="award-icon">
          <i class="${award.icon}"></i>
        </div>
        <div class="award-content">
          <h4>${award.name}</h4>
          <p>${award.description}</p>
          <div class="award-condition">
            ${isUnlocked ? '<span class="unlocked-text">Unlocked!</span>' : 
                          '<span class="locked-text">' + award.unlockCondition + '</span>'}
          </div>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

// Trigger award events
function triggerAwardEvent(type, amendmentNumber, details = {}) {
  const event = new CustomEvent('awardEvent', {
    detail: {
      type,
      amendmentNumber,
      details
    }
  });
  document.dispatchEvent(event);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initAwards);

// Export functions for use in other scripts
window.awardsSystem = {
  triggerAwardEvent,
  renderAwardsSection,
  userAwards,
  awardsData
};