# Constitution Amendment Template System

This system allows you to make styling and structure changes in one central location instead of modifying each amendment file individually.

## How It Works

1. **template.html**: The base template for all amendment pages
2. **styles.css**: Central stylesheet with all styling definitions
3. **loader.js**: Handles loading the appropriate amendment based on URL parameters
4. **script.js**: Contains the logic for populating content and handling interactions
5. **amendment_data.js**: Contains the content for all amendments

## How to View Amendments

To view an amendment, open the template.html file with an amendment parameter:

- Amendment 1: `template.html?amendment=1`
- Amendment 2: `template.html?amendment=2`
- Amendment 3: `template.html?amendment=3`
- etc.

## Making Changes

### To Change Styles

1. Edit the **styles.css** file to update colors, fonts, spacing, or any other visual properties.
2. All amendment pages will automatically inherit these changes.

### To Change Structure

1. Edit the **template.html** file to update the HTML structure.
2. All amendment pages will automatically reflect these structural changes.

### To Change Content

1. Edit the **amendment_data.js** file to update the content for specific amendments.

### To Change Functionality

1. Edit the **script.js** file to update the interactive features.

## Benefits

- **Consistency**: Ensures all amendment pages have the same look and feel
- **Maintainability**: Makes updates easier by centralizing common elements
- **Efficiency**: Reduces redundancy and file size across the application

## Migration Guide

If you need to migrate from the old individual HTML files:

1. Ensure all content is properly represented in amendment_data.js
2. Use the template.html with URL parameters instead of individual HTML files
3. Update any links to point to the template.html with appropriate parameters
