document.addEventListener("DOMContentLoaded", function() {
    const currentElement = document.querySelector(".current");
    const totalElement = document.querySelector(".total");
    const nextButton = document.querySelector(".upside-arrow-button");
    const prevButton = document.querySelector(".downside-arrow-button");

    let current = 1;
    const total = 7;

    nextButton.addEventListener("click", function() {
        if (current < total) {
            current++;
            console.log(current);
            updateCounter();
        } else {
            current = 1; // Если текущий элемент достигает максимального значения, установим его на первый элемент
            updateCounter();
        }
    });

    prevButton.addEventListener("click", function() {
        if (current > 1) {
            current--;
            console.log(current);
            updateCounter();
        } else {
            current = total; // Если текущий элемент равен 1, установим его на последний элемент
            updateCounter();
        }
    });

    function updateCounter() {
        currentElement.textContent = current;
        totalElement.textContent = total; // Обновление общего счетчика
    }
});
