document.addEventListener("DOMContentLoaded", function() {
    const leftContainers = document.querySelectorAll('.left-side-container');
    let currentLeftIndex = 0;

    function toggleLeftContainers(index) {
        for (let i = 0; i < leftContainers.length; i++) {
            if (i === index) {
                leftContainers[i].classList.remove('visually-hidden');
                leftContainers[i].classList.add('text-focus-in');
            } else {
                leftContainers[i].classList.add('visually-hidden');
                leftContainers[i].classList.remove('text-focus-in');
            }
        }
    }

    document.querySelector('.upside-arrow-button').addEventListener('click', function() {
        currentLeftIndex = (currentLeftIndex + 1) % leftContainers.length;
        toggleLeftContainers(currentLeftIndex);
    });

    document.querySelector('.downside-arrow-button').addEventListener('click', function() {
        currentLeftIndex = (currentLeftIndex - 1 + leftContainers.length) % leftContainers.length;
        toggleLeftContainers(currentLeftIndex);
    });
});
