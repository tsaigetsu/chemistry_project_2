document.addEventListener("DOMContentLoaded", function() {
    const rightContainers = document.querySelectorAll('.right-side-container');
    let currentRightIndex = 0;

    function toggleRightContainers(index) {
        for (let i = 0; i < rightContainers.length; i++) {
            if (i === index) {
                rightContainers[i].classList.remove('visually-hidden');
                rightContainers[i].classList.add('text-focus-in');
            } else {
                rightContainers[i].classList.add('visually-hidden');
                rightContainers[i].classList.remove('text-focus-in');
            }
        }
    }

    document.querySelector('.upside-arrow-button').addEventListener('click', function() {
        currentRightIndex = (currentRightIndex + 1) % rightContainers.length;
        toggleRightContainers(currentRightIndex);
    });

    document.querySelector('.downside-arrow-button').addEventListener('click', function() {
        currentRightIndex = (currentRightIndex - 1 + rightContainers.length) % rightContainers.length;
        toggleRightContainers(currentRightIndex);
    });
});