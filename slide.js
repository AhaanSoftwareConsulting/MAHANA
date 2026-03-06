/* =========================
TYPING EFFECT
========================= */

const resultsText = "Industries";
let rIndex = 0;

function resultsTyping() {
    let el = document.getElementById("resultsTyping");
    el.textContent = resultsText.substring(0, rIndex);
    rIndex++;
    if (rIndex > resultsText.length) {
        setTimeout(() => rIndex = 0, 1500);
    }
    setTimeout(resultsTyping, 100);
}
resultsTyping();


/* =========================
AUTO SLIDER WITH PROGRESS
========================= */

const slides = document.querySelectorAll(".slide");
const progressBars = document.querySelectorAll(".progress-line span");

let current = 0;
let duration = 5000; // 5 seconds

function showSlide(index) {

    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");

    progressBars.forEach(bar => {
        bar.style.transition = "none";
        bar.style.width = "0%";
    });

    setTimeout(() => {
        progressBars[index].style.transition = duration + "ms linear";
        progressBars[index].style.width = "100%";
    }, 50);
}

function nextSlide() {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    showSlide(current);
}

showSlide(current);
setInterval(nextSlide, duration);

/* =========================
DRAG / SWIPE SLIDER
========================= */

const slider = document.querySelector(".results-slider");

let startX = 0;
let isDragging = false;

slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
});

slider.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    let diff = e.clientX - startX;

    if (diff > 80) {
        // swipe right
        current--;
        if (current < 0) current = slides.length - 1;
        showSlide(current);
    }

    if (diff < -80) {
        // swipe left
        current++;
        if (current >= slides.length) current = 0;
        showSlide(current);
    }

    isDragging = false;
});

slider.addEventListener("mouseleave", () => {
    isDragging = false;
});


/* =========================
TOUCH SUPPORT (MOBILE)
========================= */

slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].clientX;
    let diff = endX - startX;

    if (diff > 80) {
        current--;
        if (current < 0) current = slides.length - 1;
        showSlide(current);
    }

    if (diff < -80) {
        current++;
        if (current >= slides.length) current = 0;
        showSlide(current);
    }

});