document.addEventListener('DOMContentLoaded', () => {
    // Determine the current amendment number from a data attribute on the body
    // Example: <body data-amendment="1">
    const amendmentNumber = parseInt(document.body.dataset.amendment, 10);

    // Ensure amendmentData is loaded and the specific amendment exists
    if (typeof amendmentData === 'undefined' || !amendmentData[amendmentNumber]) {
        console.error(`Data for Amendment ${amendmentNumber} not found or amendment_data.js not loaded.`);
        // Display an error message on the page
        setTextContent('amendment-title', 'Error: Amendment Data Not Found');
        // Optionally hide or disable other sections
        const container = document.querySelector('.container');
        if (container) container.innerHTML = '<h2>Error loading amendment data. Please check the console.</h2>';
        return; // Stop execution if data is missing
    }

    const data = amendmentData[amendmentNumber];

    // --- Helper Functions ---
    function setTextContent(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        } else {
            console.warn(`Element with ID '${id}' not found.`);
        }
    }

    function setHTMLContent(id, html) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = html;
        } else {
            console.warn(`Element with ID '${id}' not found.`);
        }
    }

    function setButtonAttributes(id, text, link) {
        const button = document.getElementById(id);
        if (button) {
            button.textContent = text;
            if (link && link !== '#') {
                button.onclick = () => window.location.href = link;
            } else {
                button.disabled = true; // Disable if no link provided
                button.style.opacity = 0.5;
            }
        } else {
             console.warn(`Button with ID '${id}' not found.`);
        }
    }

    function createSection(title, content, container) {
        // Skip if content is empty/null/undefined or an empty string
        if (!content) return; 
        if (typeof content === 'string' && content.trim() === '') return;
        if (Array.isArray(content) && content.length === 0) return;
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        container.appendChild(titleElement);
        
        if (typeof content === 'string') {
            const contentElement = document.createElement('div');
            contentElement.innerHTML = content;
            container.appendChild(contentElement);
        } else if (typeof content === 'object' && !(content instanceof Element)) {
            // For non-DOM object content, we don't append anything here
            // The specific section handler will deal with it
            console.log(`Section ${title} has object content, handled separately`);
        } else if (content instanceof Element) {
            // For DOM Elements
            container.appendChild(content);
        }
    }

    // --- Populate Header ---
    document.title = `Constitution Explorer - ${data.numberOrdinal} Amendment`;
    // XP and Level are handled by separate logic below

    // --- Populate Main Content ---
    setTextContent('amendment-title', data.title);
    
    // Clear the amendment card to dynamically build sections
    const amendmentCard = document.querySelector('.amendment-card');
    amendmentCard.innerHTML = '';
    
    // Create subtitle if it exists
    if (data.subtitle) {
        const subtitleElement = document.createElement('h3');
        subtitleElement.id = 'amendment-subtitle';
        subtitleElement.textContent = data.subtitle;
        amendmentCard.appendChild(subtitleElement);
    }
    
    // Create story section if it exists
    if (data.story) {
        const storyContainer = document.createElement('div');
        storyContainer.className = 'amendment-story';
        storyContainer.id = 'amendment-story';
        
        const storyIcon = document.createElement('i');
        storyIcon.className = 'fas fa-book-open story-icon';
        storyIcon.setAttribute('aria-hidden', 'true');
        storyContainer.appendChild(storyIcon);
        
        // Add image to the story section
        const storyImage = document.createElement('img');
        storyImage.src = `images/amendment${amendmentNumber}.jpg`;
        storyImage.alt = `Amendment ${amendmentNumber} illustration`;
        storyImage.className = 'amendment-story-image';
        storyContainer.appendChild(storyImage);
        
        const storyText = document.createElement('p');
        storyText.textContent = data.story;
        storyContainer.appendChild(storyText);
        
        amendmentCard.appendChild(storyContainer);
    }
    
    // Create description if it exists
    if (data.description && data.description.length > 0) {
        const descriptionContainer = document.createElement('div');
        descriptionContainer.id = 'amendment-description';
        data.description.forEach(pText => {
            const p = document.createElement('p');
            p.textContent = pText;
            descriptionContainer.appendChild(p);
        });
        amendmentCard.appendChild(descriptionContainer);
    }
    
    // Create full text if it exists
    if (data.fullText) {
        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Full Text:';
        amendmentCard.appendChild(titleElement);
        
        const fullTextElement = document.createElement('div');
        fullTextElement.className = 'full-text';
        fullTextElement.id = 'full-text-content';
        fullTextElement.textContent = data.fullText;
        amendmentCard.appendChild(fullTextElement);
    }
    
    // Create plain summary if it exists
    if (data.plainSummary) {
        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Breakdown into Simple English:';
        amendmentCard.appendChild(titleElement);
        
        const summaryContainer = document.createElement('div');
        summaryContainer.id = 'plain-summary';
        
        // Check if plainSummary is a string (new format with <details>) or object (old format)
        if (typeof data.plainSummary === 'string') {
            summaryContainer.innerHTML = data.plainSummary; // Directly insert the HTML string
        } else if (typeof data.plainSummary === 'object' && data.plainSummary !== null && data.plainSummary.intro && Array.isArray(data.plainSummary.points)) {
            // Handle the old object format
            summaryContainer.innerHTML = `<p>${data.plainSummary.intro}</p>`;
            const ol = document.createElement('ol');
            data.plainSummary.points.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point;
                ol.appendChild(li);
            });
            summaryContainer.appendChild(ol);
        } else {
            console.warn('Plain summary data is in an unexpected format:', data.plainSummary);
            summaryContainer.innerHTML = '<p>Error loading summary.</p>';
        }
        
        amendmentCard.appendChild(summaryContainer);
    }
    
    // Create infographic if it exists
    if (data.infographicIcons && data.infographicIcons.length > 0) {
        const infographicContainer = document.createElement('div');
        infographicContainer.className = 'infographic';
        infographicContainer.id = 'infographic-icons';
        
        data.infographicIcons.forEach(iconData => {
            const div = document.createElement('div');
            div.className = 'icon';
            div.innerHTML = `<i class="${iconData.class}" aria-hidden="true"></i><span>${iconData.label}</span>`;
            infographicContainer.appendChild(div);
        });
        
        amendmentCard.appendChild(infographicContainer);
    }
    
    // Create key points if they exist - non-collapsible version
    if (data.keyPoints && data.keyPoints.length > 0) {
        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Notes:';
        amendmentCard.appendChild(titleElement);
        
        const keyPointsContainer = document.createElement('div');
        keyPointsContainer.id = 'key-points';
        
    data.keyPoints.forEach(kp => {
        const noteBox = document.createElement('div');
        noteBox.className = 'note-box warning';
        
        const noteTitle = document.createElement('div');
        noteTitle.className = 'note-title warning';
        noteTitle.textContent = kp.title;
        
        const noteContent = document.createElement('div');
        noteContent.className = 'note-content warning';
        noteContent.innerHTML = kp.text;
            
            noteBox.appendChild(noteTitle);
            noteBox.appendChild(noteContent);
            keyPointsContainer.appendChild(noteBox);
        });
        
        amendmentCard.appendChild(keyPointsContainer);
    }
    
    // Create fun fact if it exists
    if (data.funFact) {
        const funFactContainer = document.createElement('div');
        funFactContainer.className = 'fun-fact';
        
        const funFactContent = document.createElement('span');
        funFactContent.id = 'fun-fact-content';
        funFactContent.innerHTML = data.funFact;
        
        funFactContainer.appendChild(funFactContent);
        amendmentCard.appendChild(funFactContainer);
    }
    
    // Create historical context if it exists
    if (data.historicalContext) {
        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Historical Context:';
        amendmentCard.appendChild(titleElement);
        
        const historicalContextElement = document.createElement('p');
        historicalContextElement.id = 'historical-context-content';
        historicalContextElement.textContent = data.historicalContext;
        amendmentCard.appendChild(historicalContextElement);
    }
    
    // Create significance section if it exists
    if (data.significance) {
        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Significance and Impact:';
        amendmentCard.appendChild(titleElement);
        
        const significanceContainer = document.createElement('div');
        significanceContainer.id = 'significance-impact';
        
        significanceContainer.innerHTML = `<p>${data.significance.intro}</p>`;
        const ul = document.createElement('ul');
        data.significance.cases.forEach(caseText => {
            const li = document.createElement('li');
            li.innerHTML = caseText; // Use innerHTML because of <strong> tags
            ul.appendChild(li);
        });
        significanceContainer.appendChild(ul);
        
        const pConclusion = document.createElement('p');
        pConclusion.textContent = data.significance.conclusion;
        significanceContainer.appendChild(pConclusion);
        
        amendmentCard.appendChild(significanceContainer);
    }

    // --- Populate Quiz ---
    const quizSection = document.getElementById('quiz-section');
    if (quizSection && data.quiz) {
        quizSection.style.display = 'block'; // Ensure it's visible
        setTextContent('quiz-title', data.quiz.title);
        const quizQuestionsContainer = document.getElementById('quiz-questions');
        if (quizQuestionsContainer) {
            quizQuestionsContainer.innerHTML = ''; // Clear existing
            data.quiz.questions.forEach(qData => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'quiz-question';
                questionDiv.innerHTML = `<p>${qData.text}</p>`; // Use innerHTML for <strong>
                const optionsDiv = document.createElement('div');
                optionsDiv.className = 'quiz-options';
                qData.options.forEach(opt => {
                    const label = document.createElement('label');
                    // Ensure unique IDs for inputs if needed, though name grouping handles selection
                    label.innerHTML = `<input type="radio" name="${qData.q}" value="${opt.value}"> ${opt.text}`;
                    // Style to display each option on a new line and make the bubble properly enclose the text
                    label.style.display = 'inline-block'; // Changed from block to inline-block
                    label.style.marginBottom = '8px'; // Add spacing between options
                    label.style.width = 'auto'; // Allow width to fit content
                    label.style.minWidth = '25%'; // Set minimum width for very short answers
                    optionsDiv.appendChild(label);
                    // Add a line break after each label to ensure each appears on a new line
                    optionsDiv.appendChild(document.createElement('br'));
                });
                questionDiv.appendChild(optionsDiv);
                quizQuestionsContainer.appendChild(questionDiv);
            });
        }
    } else if (quizSection) {
        quizSection.style.display = 'none'; // Hide if no quiz data
    }

    // --- Populate Scenario ---
    const scenarioSection = document.getElementById('scenario-section');
     if (scenarioSection && data.scenario) {
        scenarioSection.style.display = 'block'; // Ensure it's visible
        setTextContent('scenario-title', data.scenario.title);
        setTextContent('scenario-question', data.scenario.question);
        const scenarioOptionsContainer = document.getElementById('scenario-options');
        if (scenarioOptionsContainer) {
            scenarioOptionsContainer.innerHTML = '<p>Choose one:</p>'; // Reset, keep the prompt
            data.scenario.options.forEach(opt => {
                const button = document.createElement('button');
                button.className = 'btn';
                button.textContent = opt.text;
                // Use an arrow function to correctly pass the answer value
                button.onclick = () => checkScenario(opt.answer); // Pass answer value, not the whole object
                scenarioOptionsContainer.appendChild(button);
            });
            // Add the feedback div dynamically if it's not in the template
            if (!document.getElementById('scenario-feedback')) {
                 const feedbackDiv = document.createElement('div');
                 feedbackDiv.id = 'scenario-feedback';
                 feedbackDiv.className = 'scenario-feedback';
                 scenarioOptionsContainer.appendChild(feedbackDiv);
            }
        }
     } else if (scenarioSection) {
         scenarioSection.style.display = 'none'; // Hide if no scenario data
     }

    // --- Populate Reflection ---
    const reflectionSection = document.getElementById('reflection-section');
    if (reflectionSection && data.reflection) {
        reflectionSection.style.display = 'block'; // Ensure it's visible
        setTextContent('reflection-title', data.reflection.title);
        setTextContent('reflection-prompt', data.reflection.prompt);
    } else if (reflectionSection) {
        reflectionSection.style.display = 'none'; // Hide if no reflection data
    }

    // --- Populate Navigation ---
    if (data.navigation) {
        setButtonAttributes('prev-button', data.navigation.prev.text, data.navigation.prev.link);
        setButtonAttributes('next-button', data.navigation.next.text, data.navigation.next.link);
    } else {
        // Hide navigation if no data
        const navContainer = document.querySelector('.navigate');
        if (navContainer) navContainer.style.display = 'none';
    }

});

// --- Global Interaction Logic (moved from original HTML) ---

// Store action scores to track XP and allow redoing for full credit
const actionScores = {};
// Load XP from localStorage or initialize to 0
let storedXP = localStorage.getItem('totalUserXP');
let totalXP = storedXP ? parseInt(storedXP, 10) : 0;


function showInfo(elementId, text) {
    const infoElement = document.getElementById(elementId);
    if (!infoElement) return;

    // Toggle display
    if (infoElement.style.display === 'block' && infoElement.innerHTML === text) {
        infoElement.style.display = 'none';
        infoElement.innerHTML = ''; // Clear content when hiding
    } else {
        // Hide all other info displays first
        document.querySelectorAll('.info-display').forEach(el => {
            el.style.display = 'none';
            el.innerHTML = ''; // Clear content
        });

        infoElement.innerHTML = text;
        infoElement.style.display = 'block';
        // Scroll into view if needed
        infoElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function checkQuiz() {
    const amendmentNumber = parseInt(document.body.dataset.amendment, 10);
    if (!amendmentData || !amendmentData[amendmentNumber] || !amendmentData[amendmentNumber].quiz) return;

    const data = amendmentData[amendmentNumber];
    const correctAnswers = data.quiz.questions.reduce((acc, q) => {
        acc[q.q] = q.answer;
        return acc;
    }, {});

    let score = 0;
    let feedback = "<h4>Quiz Results:</h4>";
    const totalQuestions = data.quiz.questions.length;
    const maxScore = totalQuestions * 10; // Assuming 10 XP per question

    for (const qData of data.quiz.questions) {
        const qName = qData.q;
        const sel = document.querySelector(`input[name=${qName}]:checked`)?.value;
        if (sel === correctAnswers[qName]) {
            score += 10;
            feedback += `<p>✅ Question ${qName.slice(1)}: Correct! +10 XP</p>`;
        } else {
            feedback += `<p>❌ Question ${qName.slice(1)}: Incorrect. The correct answer was '${correctAnswers[qName]}'.</p>`;
        }
    }

    const actionId = `quiz-completion-${amendmentNumber}`;
    const previousScore = actionScores[actionId] || 0;

    if (score > previousScore) {
        const additionalXP = score - previousScore;
        if (additionalXP > 0) updateXPDisplay(additionalXP);
        actionScores[actionId] = score;
        if (score < maxScore) showRetryMessage(actionId, score, maxScore);
    } else if (!actionScores[actionId]) { // First attempt
        actionScores[actionId] = score;
        updateXPDisplay(score);
        if (score < maxScore) showRetryMessage(actionId, score, maxScore);
    } else if (score > 0 && score === previousScore) {
        feedback += `<p><strong>You've maintained your previous score of ${score}/${maxScore} XP.</strong></p>`;
    } else if (score < previousScore) {
        feedback += `<p><strong>Your previous best score of ${previousScore}/${maxScore} XP has been kept.</strong></p>`;
    }

    const resultsElement = document.getElementById('quiz-results');
    if (resultsElement) {
        resultsElement.innerHTML = feedback + `<p><strong>Your score: ${score}/${maxScore} XP</strong></p>`;
        resultsElement.style.display = 'block';
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function checkScenario(selectedAnswer) {
    const amendmentNumber = parseInt(document.body.dataset.amendment, 10);
     if (!amendmentData || !amendmentData[amendmentNumber] || !amendmentData[amendmentNumber].scenario) return;

    const data = amendmentData[amendmentNumber].scenario;
    const feedbackElement = document.getElementById('scenario-feedback');
    if (!feedbackElement) return;

    let score = 0;
    let feedbackText = '';
    const maxScore = 30; // Assuming 30 XP for scenario

    if (selectedAnswer === data.correctAnswer) {
        feedbackText = data.feedbackCorrect;
        score = maxScore;
    } else {
        feedbackText = data.feedbackIncorrect;
        score = 0;
    }

    const actionId = `scenario-completion-${amendmentNumber}`;
    const previousScore = actionScores[actionId] || 0;

    if (score > previousScore) {
        const additionalXP = score - previousScore;
        if (additionalXP > 0) updateXPDisplay(additionalXP);
        actionScores[actionId] = score;
        // Only show retry if they got it wrong (score is 0)
        if (score < maxScore) showRetryMessage(actionId, score, maxScore);
    } else if (!actionScores[actionId]) { // First attempt
        actionScores[actionId] = score;
        if (score > 0) updateXPDisplay(score);
        if (score < maxScore) showRetryMessage(actionId, score, maxScore);
    }
    // No message needed if score is same or lower, feedback text handles it

    feedbackElement.innerHTML = feedbackText;
    feedbackElement.style.display = 'block';
    feedbackElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


function addXP(amount, actionId = null) {
    const amendmentNumber = parseInt(document.body.dataset.amendment, 10);
    const fullActionId = actionId ? `${actionId}-${amendmentNumber}` : null;

    if (!fullActionId) {
        // For untracked actions, just add XP directly
        updateXPDisplay(amount);
        return;
    }

    // Get the maximum possible XP for this action
    const maxXP = getMaxXPForAction(actionId); // Use the base actionId

    // If this is a tracked action, check if we're improving our score
    const previousScore = actionScores[fullActionId] || 0;

    // Only update if we're getting a better score
    if (amount > previousScore) {
        const additionalXP = amount - previousScore;
        actionScores[fullActionId] = amount;
        updateXPDisplay(additionalXP);
        if (amount < maxXP) showRetryMessage(fullActionId, amount, maxXP);
         // Provide feedback for reflection submission
        if (actionId === 'reflection-submission') {
            alert(`Reflection submitted! +${additionalXP} XP earned.`);
        }
    } else if (!actionScores[fullActionId]) { // First attempt
        actionScores[fullActionId] = amount;
        updateXPDisplay(amount);
        if (amount < maxXP) showRetryMessage(fullActionId, amount, maxXP);
         // Provide feedback for reflection submission
        if (actionId === 'reflection-submission') {
            alert(`Reflection submitted! +${amount} XP earned.`);
        }
    } else {
        // They've already done better or matched, show a message
        alert(`You've already earned ${previousScore}/${maxXP} XP for this activity. Your best score is kept.`);
    }
}

function updateXPDisplay(additionalXP) {
    if (isNaN(additionalXP)) return; // Allow updating even if additionalXP is 0 for initial load

    totalXP += additionalXP;
    // Save updated XP to localStorage
    localStorage.setItem('totalUserXP', totalXP);

    // Update XP badge
    let badge = document.querySelector('.xp-badge');
    if (badge) badge.textContent = `XP: ${totalXP}`;

    // Update header XP display
    let levelDisplay = document.getElementById('level-display');
    // Basic leveling example: Level up every 200 XP
    const level = Math.floor(totalXP / 200) + 1;
    if (levelDisplay) levelDisplay.textContent = `Level ${level} • ${totalXP} XP`;

    // Update progress bar (progress towards next level)
    let progressPercent = Math.min((totalXP % 200) / 200 * 100, 100);
    const progressBar = document.querySelector('.progress');
     if (progressBar) progressBar.style.width = `${progressPercent}%`;

    // Check for badge earning (example: badge at 200 XP)
    if (totalXP >= 30 && !document.querySelector('.badge-earned')) {
        // Check if the badge was already earned in this session to avoid duplicates
        if (!sessionStorage.getItem('badgeEarned-200XP')) {
            showBadge('First Amendment Advocate', 'You\'ve mastered the freedoms of the First Amendment.', '🎯');
            sessionStorage.setItem('badgeEarned-200XP', 'true'); // Mark as earned for this session
        }
    }
}

function getMaxXPForAction(actionId) {
    // Define maximum possible XP for each base action type
    const maxXPMap = {
        'quiz-completion': 30, // Example: 3 questions × 10 XP
        'scenario-completion': 30,
        'reflection-submission': 10,
        'module-completion': 20 // Added for completion button
    };
    return maxXPMap[actionId] || 0;
}

function showRetryMessage(actionId, earned, max) {
    // Remove any existing retry message first
    const existingMessage = document.querySelector('.retry-message');
    if (existingMessage) existingMessage.remove();

    // Create a retry message that fades out after a few seconds
    const message = document.createElement('div');
    message.className = 'retry-message';
    message.innerHTML = `You earned ${earned}/${max} XP. You can retry to earn full credit!`;
    document.body.appendChild(message);

    // Fade out after 5 seconds
    setTimeout(() => {
        message.style.transition = 'opacity 1s ease-out';
        message.style.opacity = '0';
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 1000); // Remove from DOM after fade out
    }, 5000);
}

function showBadge(title, text, icon) {
    // Remove existing badge if any
    const existingBadge = document.querySelector('.badge-earned');
    if (existingBadge) existingBadge.remove();

    const badge = document.createElement('div');
    badge.className = 'badge-earned';
    badge.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:30px;border-radius:10px;box-shadow:0 5px 20px rgba(0,0,0,0.3);text-align:center;z-index:1001;'; // Ensure high z-index
    badge.innerHTML = `
        <h2>Badge Earned!</h2>
        <div style="font-size:60px;margin:20px 0;">${icon}</div>
        <h3>${title}</h3>
        <p>${text}</p>
        <button class="btn" onclick="this.parentNode.remove()">Continue</button>
    `;
    document.body.appendChild(badge);
}

function completeModule() {
    const amendmentNumber = parseInt(document.body.dataset.amendment, 10);
    const actionId = `module-completion-${amendmentNumber}`;
    const maxXP = getMaxXPForAction('module-completion');

    // Check if already completed to prevent multiple XP awards
    if (!actionScores[actionId] || actionScores[actionId] < maxXP) {
         alert(`Congratulations! You've completed the Amendment ${amendmentNumber} module. +${maxXP} XP!`);
         addXP(maxXP, 'module-completion'); // Use base action ID for tracking
    } else {
         alert(`You have already completed the Amendment ${amendmentNumber} module.`);
    }

    // Optional: Navigate to the next module if applicable
    if (amendmentData && amendmentData[amendmentNumber] && amendmentData[amendmentNumber].navigation.next.link !== '#') {
        // Maybe add a small delay before navigating
        // setTimeout(() => {
        //     window.location.href = amendmentData[amendmentNumber].navigation.next.link;
        // }, 1000);
    }
}

// --- Initialize XP Display on Load ---
// Call updateXPDisplay with 0 additional XP to render the loaded totalXP value
updateXPDisplay(0);
