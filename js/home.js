// Home page logic for updating amendment status indicators

// Load amendment status from localStorage and expose update function
function updateAmendmentStatusIndicators() {
    const amendmentStatus = JSON.parse(localStorage.getItem('amendmentStatus')) || {};

    // Only run on pages with the amendments list
    if (!document.querySelector('.amendments-list')) return;

    const cards = document.querySelectorAll('.amendment-card-home');
    cards.forEach(card => {
        const amendmentLink = card.closest('a');
        if (!amendmentLink) return;

        const hrefMatch = amendmentLink.href.match(/amendment=(\d+)/);
        if (!hrefMatch) return;

        const amendmentNumber = hrefMatch[1];
        const status = amendmentStatus[amendmentNumber];

        const existingStatus = card.querySelector('.amendment-status');
        if (existingStatus) existingStatus.remove();

        if (status === 'completed' || status === 'mastered') {
            const statusDiv = document.createElement('div');
            statusDiv.className = `amendment-status ${status}`;
            if (status === 'completed') {
                statusDiv.innerHTML = '<i class="fas fa-check-circle"></i> <span>Completed</span>';
            } else {
                statusDiv.innerHTML = '<i class="fas fa-star"></i> <span>Mastered</span>';
            }
            card.appendChild(statusDiv);
        }
    });
}

document.addEventListener('DOMContentLoaded', updateAmendmentStatusIndicators);
