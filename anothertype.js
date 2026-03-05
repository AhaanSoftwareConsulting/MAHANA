document.addEventListener("DOMContentLoaded", function () {

    const typingElement = document.querySelector(".typing-text");
    if (!typingElement) return;

    const text = "Company";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {

        if (!isDeleting) {
            typingElement.textContent = text.substring(0, index + 1);
            index++;

            if (index === text.length) {
                setTimeout(() => isDeleting = true, 1000);
            }

        } else {
            typingElement.textContent = text.substring(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeEffect, isDeleting ? 70 : 120);
    }

    typeEffect();

});