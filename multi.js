/* MULTI SECTION TYPING */

const multiText = "Multi-Channel Digital Marketing Approach";

let multiIndex = 0;

function multiTyping() {

    let el = document.getElementById("multiTyping");

    el.textContent = multiText.substring(0, multiIndex);

    multiIndex++;

    if (multiIndex > multiText.length) {

        setTimeout(() => multiIndex = 0, 1500);

    }

    setTimeout(multiTyping, 70);

}

multiTyping();