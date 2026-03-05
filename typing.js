const text = "These Challenges in Japan?";

let i = 0;

function typingEffect() {

    const target = document.getElementById("typingText");

    if (i < text.length) {

        target.innerHTML += text.charAt(i);
        i++;

        setTimeout(typingEffect, 50);

    }
    else {

        // Pause before restarting
        setTimeout(() => {

            target.innerHTML = "";
            i = 0;
            typingEffect();

        }, 1500);

    }

}

typingEffect();