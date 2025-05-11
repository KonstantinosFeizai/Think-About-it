document.addEventListener("DOMContentLoaded", function () {
    const poems = document.querySelectorAll('.poem');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('previous-button');
    const poemsPerPage = 4;
    let currentIndex = 0;

    function updateDisplay() {
        poems.forEach((poem, index) => {
            poem.style.display = (index >= currentIndex && index < currentIndex + poemsPerPage)
                ? 'block'
                : 'none';
        });

        // Hide/show buttons appropriately
        prevButton.style.display = currentIndex === 0 ? 'none' : 'inline-block';
        nextButton.style.display = currentIndex + poemsPerPage >= poems.length ? 'none' : 'inline-block';
    }

    updateDisplay();

    nextButton.addEventListener('click', () => {
        if (currentIndex + poemsPerPage < poems.length) {
            currentIndex += poemsPerPage;
            updateDisplay();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex - poemsPerPage >= 0) {
            currentIndex -= poemsPerPage;
            updateDisplay();
        }
    });
});
