document.addEventListener("DOMContentLoaded", function () {

    const text = "MAHANA";
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        } else {
            // Pause after full word
            setTimeout(() => {
                typingElement.textContent = "";
                index = 0;
                typeEffect();
            }, 1200);
        }
    }

    typeEffect();

});