document.addEventListener("DOMContentLoaded", function () {

    /* Typing Effect */
    const text = "Questions";
    const typingElement = document.querySelector(".faq-typing");
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

    /* FAQ Accordion */
    const faqItems = document.querySelectorAll(".faq-item");

    function activateItem(item) {
        faqItems.forEach(faq => faq.classList.remove("active"));
        item.classList.add("active");
    }

    faqItems.forEach(item => {

        item.addEventListener("mouseenter", function () {
            activateItem(this);
        });

        item.querySelector(".faq-question").addEventListener("click", function (e) {
            e.stopPropagation();
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            } else {
                activateItem(item);
            }
        });

    });

});