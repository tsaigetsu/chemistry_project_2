document.addEventListener("DOMContentLoaded", function() {
            const currentElement = document.querySelector(".current");
            const totalElements = document.querySelector(".total");
            const nextButton = document.querySelector(".upside-arrow-button");
            const prevButton = document.querySelector(".downside-arrow-button");

            let current = 1;
            const total = 7;

            nextButton.addEventListener("click", function() {
                if (current < total) {
                    current++;
                    updateCounter();
                }
            });

            prevButton.addEventListener("click", function() {
                if (current > 1) {
                    current--;
                    updateCounter();
                }
            });

            function updateCounter() {
                currentElement.textContent = current;
            }
        });