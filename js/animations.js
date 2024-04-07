document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.querySelector(".upside-arrow-button");
    const prevButton = document.querySelector(".downside-arrow-button");

    nextButton.addEventListener("click", function() {
        const currentContainer = document.querySelector('.left-side-container:not(.visually-hidden)');
        const nextContainer = document.querySelector('.right-side-container:not(.visually-hidden)');
        
        if (currentContainer) {
            currentContainer.classList.add('visually-hidden');
        }
        if (nextContainer) {
            nextContainer.classList.remove('visually-hidden');
            const elementsToAnimate = nextContainer.querySelectorAll('.slide-in-blurred-top');
            elementsToAnimate.forEach(element => {
                element.classList.add('slide-in-blurred-top-animation');
            });
        }
    });

    prevButton.addEventListener("click", function() {
        const currentContainer = document.querySelector('.right-side-container:not(.visually-hidden)');
        const nextContainer = document.querySelector('.left-side-container:not(.visually-hidden)');

        if (currentContainer) {
            currentContainer.classList.add('visually-hidden');
        }
        if (nextContainer) {
            nextContainer.classList.remove('visually-hidden');
            const elementsToAnimate = nextContainer.querySelectorAll('.slide-in-blurred-top');
            elementsToAnimate.forEach(element => {
                element.classList.add('slide-in-blurred-top-animation');
            });
        }
    });
});
