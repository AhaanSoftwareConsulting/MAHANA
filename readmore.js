/* READ MORE TEXT */

document.querySelectorAll('.read-text').forEach(text => {

    text.addEventListener('click', () => {

        text.classList.toggle('active');

    });

});