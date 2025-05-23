/**
 * Amendment Loader Script
 * 
 * This script handles the dynamic loading of amendment content by:
 * 1. Determining which amendment to display based on URL parameters
 * 2. Setting the appropriate data attribute on the body element
 * 3. Initializing any amendment-specific functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get the amendment number from the URL parameter, e.g. ?amendment=1
    const urlParams = new URLSearchParams(window.location.search);
    const amendmentParam = urlParams.get('amendment');
    
    // Parse the amendment number, defaulting to 1 if not specified or invalid
    let amendmentNumber = 1;
    if (amendmentParam && !isNaN(parseInt(amendmentParam, 10))) {
        amendmentNumber = parseInt(amendmentParam, 10);
    }
    
    // Ensure the amendment exists in our data
    if (!amendmentData || !amendmentData[amendmentNumber]) {
        console.error(`Data for Amendment ${amendmentNumber} not found or amendment_data.js not loaded.`);
        // Display an error message
        document.getElementById('amendment-title').textContent = 'Error: Amendment Data Not Found';
        document.querySelector('.container').innerHTML = '<h2>Error loading amendment data. Please check the console.</h2>';
        return;
    }
    
    // Set the data-amendment attribute on the body
    document.body.setAttribute('data-amendment', amendmentNumber);
    
    // Log for debugging
    console.log(`Loading Amendment ${amendmentNumber}`);
});
