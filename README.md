# Constitution Explorer

An interactive web application for exploring and learning about the United States Constitution and its amendments.

## Project Structure

This project is a client-side web application built with HTML, CSS, and JavaScript. Here's an overview of each file's purpose:

### Core Files

- **index.html**: Main landing page that displays a list of amendments users can explore.
  - Provides an introduction to the application
  - Shows amendment cards that link to detailed content
  - Contains styling for the home page

- **template.html**: Template used for displaying individual amendment details.
  - Serves as the container for dynamically loaded amendment content
  - Contains sections for amendment explanation, quizzes, scenarios, and reflection prompts
  - Uses a modular design that adapts based on available data

- **script.js**: Main JavaScript file containing application logic.
  - Renders amendment content dynamically based on the loaded data
  - Manages user interaction with quizzes, scenarios, and reflection activities
  - Handles XP/level tracking and progress persistence
  - Contains functionality for feedback and achievements

- **loader.js**: Loads specific amendment data based on URL parameters.
  - Parses the URL to determine which amendment to display
  - Sets the appropriate data attribute on the body element
  - Initializes amendment-specific functionality
  - Handles errors if amendment data isn't found

- **amendment_data.js**: Contains structured data for each amendment.
  - Stores detailed content in a JavaScript object
  - Includes text, descriptions, historical context, and plain language summaries
  - Contains interactive elements like quizzes, scenarios, and reflection prompts
  - Maintains navigation links between amendments

- **styles.css**: Contains all styling for the application.
  - Defines the visual appearance of all components
  - Uses CSS variables for consistent theming
  - Includes responsive design for different screen sizes
  - Contains animations and interactive effects

### Assets

- **images/**: Directory containing image assets for the application.
  - Stores amendment-related images and icons
  - Contains visual elements used throughout the application

## How The Application Works

1. The user starts at the home page (`index.html`) which lists the amendments to explore.
2. When a user selects an amendment, they are directed to `template.html` with an amendment parameter (e.g., `template.html?amendment=1`).
3. `loader.js` reads this parameter and sets the appropriate data attribute on the body.
4. `script.js` uses this data attribute to identify which amendment to display and loads the corresponding data from `amendment_data.js`.
5. The template is then populated with the amendment's content, including interactive elements.
6. As users interact with quizzes, scenarios, and reflections, they earn XP, which is tracked and persisted using local storage.

## Interactive Features

- **Learn Mode**: Detailed explanations of each amendment with historical context
- **Quiz System**: Test knowledge with multiple-choice questions
- **Scenario Challenges**: Apply constitutional knowledge to realistic scenarios
- **Reflection Prompts**: Encourage deeper thinking about the amendments
- **XP and Level System**: Track learning progress and provide incentives

## Styling Approach

The application uses a clean, accessible design with:
- A responsive layout that works on different devices
- Consistent color scheme using CSS variables
- Interactive elements with hover effects and transitions
- Collapsible sections for organizing content
- Visual aids and icons to enhance understanding
