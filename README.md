# Constitution Explorer

A client-side web application for exploring and learning about the United States Constitution and its amendments. Built with vanilla HTML, CSS, and JavaScript - no frameworks required.

## Features

- **Interactive Learning**: Explore amendments through quizzes, scenarios, and reflection prompts
- **Progress Tracking**: XP system with awards and badges to track learning progress
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dynamic Content**: Amendment content loads dynamically based on URL parameters
- **Modular CSS**: Organized, maintainable stylesheets

## Getting Started

### Running Locally

This is a static web application that can be run in several ways:

**Option 1: Direct File Access**
Simply open `index.html` in your web browser.

**Option 2: Local Server (Recommended)**
```bash
# Using Python 3
python -m http.server

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Project Structure

```
├── index.html              # Main landing page
├── amendments.html         # Amendment detail template
├── script.js              # Main application logic
├── loader.js              # Amendment data loading
├── amendment_data.js       # Amendment content and data
├── css/                   # Modular stylesheets
│   ├── main.css          # Main CSS entry point
│   ├── base/             # Core styles (variables, typography)
│   ├── components/       # UI component styles
│   ├── layout/           # Page layout styles
│   └── utilities/        # Helper classes and animations
├── js/                   # JavaScript modules
│   └── awards.js         # Awards and XP system
└── images/               # Amendment-related images
```

## How It Works

1. **Home Page**: Users start at `index.html` with amendment cards
2. **Amendment Selection**: Clicking an amendment navigates to `amendments.html?amendment=N`
3. **Dynamic Loading**: `loader.js` reads the URL parameter and loads appropriate data
4. **Content Rendering**: `script.js` populates the template with amendment content
5. **Progress Tracking**: User interactions are tracked and stored in localStorage

## XP and Awards System

The application includes a gamified learning experience:

- **XP Points**: Earned by completing quizzes and scenarios
- **Awards**: Unlocked based on progress milestones
- **Progress Persistence**: All progress saved in browser localStorage

Storage keys:
- `totalUserXP`: Total experience points
- `userActionScores`: Completed activities tracking
- `amendmentStatus`: Amendment completion status

## Development

### Adding New Amendments

1. Add entry to `amendment_data.js` with required structure
2. Include any images in the `images/` directory
3. Update navigation links in adjacent amendments
4. Add amendment card to home page if needed

### CSS Development

The CSS is organized modularly:
- Place new styles in appropriate existing modules
- Create new module files for distinct components
- Import new modules in `main.css`

### Key Features Implementation

- **Quizzes**: Multiple-choice questions with immediate feedback
- **Scenarios**: Real-world application challenges
- **Collapsible Sections**: Expandable content areas
- **Progress Bars**: Visual XP and completion indicators

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript features
- CSS Grid and Flexbox
- localStorage API

## Contributing

This is an educational project focused on constitutional learning. When contributing:

1. Maintain the vanilla JavaScript approach (no frameworks)
2. Follow existing code organization patterns
3. Ensure responsive design on all screen sizes
4. Test thoroughly across different browsers

## License

Educational use project for learning about the U.S. Constitution.