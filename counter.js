const counters = document.querySelectorAll('.counter-number');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, { threshold: 0.5 });



counters.forEach(counter => {
    observer.observe(counter);
});



function startCounter(counter) {

    const target = +counter.getAttribute('data-target');

    const suffix = counter.getAttribute('data-suffix') || "+";

    let count = 0;

    const speed = target / 80;


    const updateCount = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count) + suffix;

            requestAnimationFrame(updateCount);

        }

        else {

            counter.innerText = target + suffix;

        }

    };

    updateCount();

}