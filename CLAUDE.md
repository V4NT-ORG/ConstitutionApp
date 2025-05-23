# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Constitution Explorer is a client-side web application for exploring and learning about the United States Constitution and its amendments. It's built with HTML, CSS, and JavaScript without any framework dependencies.

## File Structure

- **index.html**: Main landing page with amendment cards for navigation
- **amendments.html**: Template for displaying individual amendment details
- **script.js**: Main application logic for rendering amendment content and handling interactions
- **loader.js**: Logic for loading specific amendment data based on URL parameters
- **amendment_data.js**: Data for each amendment (text, descriptions, quizzes, etc.)
- **css/**: Directory containing modular CSS files:
  - **main.css**: Main stylesheet that imports all CSS modules
  - **base/**: Core CSS settings (variables, typography)
  - **components/**: Styles for specific UI components (including awards.css)
  - **layout/**: Structural layout styles
  - **utilities/**: Helper classes and animations
- **js/**: Directory containing JavaScript modules:
  - **awards.js**: Awards system and XP tracking functionality
- **images/**: Directory containing amendment-related images

## Development Workflow

### Running the Application

This is a static web application, so you can:

1. Open `index.html` directly in a web browser to view the application
2. Use a local server for development (recommended):
   ```bash
   # Using Python 3
   python -m http.server
   
   # Using Node.js http-server package
   npx http-server
   ```

### Application Flow

1. The user starts at the home page (`index.html`) which lists amendments to explore
2. When a user selects an amendment, they are directed to `amendments.html` with an amendment parameter (e.g., `amendments.html?amendment=1`)
3. `loader.js` reads this parameter and sets the appropriate data attribute on the body
4. `script.js` uses this data attribute to load the corresponding data from `amendment_data.js`
5. The amendment content is then populated in the template, including interactive elements
6. `awards.js` handles XP tracking, progress calculation, and award unlocking based on user interactions

## Key Features

- **Dynamic Content Loading**: Amendments are loaded dynamically based on URL parameters
- **Interactive Elements**: 
  - Quizzes with multiple-choice questions
  - Scenario challenges for applying constitutional knowledge
  - Reflection prompts for deeper thinking
- **XP and Progress Tracking**: User progress is stored in localStorage with awards system
- **Awards System**: Badges and achievements unlock based on learning milestones
- **Responsive Design**: Works on different screen sizes

## Data Structure

The `amendmentData` object in `amendment_data.js` follows this structure:

```javascript
{
  amendmentNumber: {
    title: "Amendment Title",
    numberRoman: "Roman numeral",
    numberOrdinal: "Ordinal text",
    subtitle: "Subtitle text",
    imageFileName: "image.jpg", // Optional
    story: "Narrative text about the amendment",
    description: ["Array of paragraphs"],
    fullText: "The exact text of the amendment",
    plainSummary: "HTML structure with collapsible sections",
    keyPoints: [
      { id: "point-id", title: "Point Title", text: "Point content" }
    ],
    quiz: {
      title: "Quiz Title",
      questions: [
        {
          q: "question-id",
          text: "Question text",
          options: [
            { value: "a", text: "Option A" },
            // more options...
          ],
          answer: "correct-option-value"
        }
        // more questions...
      ]
    },
    navigation: {
      prev: { text: "Prev link text", link: "prev-url" },
      next: { text: "Next link text", link: "next-url" }
    }
  }
  // More amendments...
}
```

## When Adding New Amendments

When adding a new amendment:

1. Create a new entry in `amendment_data.js` with the appropriate structure
2. Ensure all required fields are populated (title, description, fullText, plainSummary)
3. Add any images to the `images/` directory
4. Update navigation links in adjacent amendments
5. Add a card to the home page in `index.html` if necessary

## XP and Awards System

The application tracks user progress through an XP (experience points) and awards system:

- Each amendment has activities worth points (quizzes, scenarios)
- Awards are unlocked based on XP milestones and learning achievements
- Progress is stored in `localStorage` using these keys:
  - `totalUserXP`: Total XP earned
  - `userActionScores`: Object tracking specific activities completed
  - `amendmentStatus`: Object tracking completion status of each amendment
- Awards system managed by `js/awards.js` with functions for:
  - XP calculation and tracking
  - Award eligibility checking
  - Progress bar updates
  - Badge display and unlocking

## CSS Structure

The CSS is organized in a modular way:

- **main.css**: Main entry point that imports all other CSS modules
- **base/**: Foundational styles
  - **variables.css**: Global CSS variables for colors, spacing, etc.
  - **typography.css**: Text styles, fonts, and headings
- **components/**: Individual UI elements
  - **awards.css**: Awards system, badges, and achievement styling
  - **badges.css**: Badge styling for labels and tags
  - **buttons.css**: Button variations and states
  - **cards.css**: Card components for amendments
  - **collapsibles.css**: Expandable/collapsible sections
  - **fun-fact.css**: Styling for fun fact boxes
  - **infographic.css**: Visual data presentation components
  - **navigation.css**: Nav menus and pagination
  - **progress-bar.css**: XP and progress indicators
  - **quiz.css**: Quiz interface elements
- **layout/**: Page structure
  - **container.css**: Content containers and wrappers
  - **header.css**: Page header styling
- **utilities/**: Helper styles
  - **animations.css**: CSS animations and transitions
  - **helpers.css**: Utility classes for common styling needs

When adding new styles:
1. Place them in the appropriate existing module
2. Create a new module file if the component is distinct enough
3. Import any new module files in main.css

## Notes

Only read the necessary CSS files when updating code. Also NEVER read amendment_data.js, you have the structure of it in this file, and that's enough. It is long and a waste of tokens, so even if user asks, don't.