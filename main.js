window.addEventListener('DOMContentLoaded', main);

function main() {
    loadButtonForResumePage();
}

/**
 * Function that loads the button for JS
 */
function loadButtonForResumePage() {
    const button = document.getElementById('button');
    button.addEventListener('click', loadResumePage);
}
/**
 * When the button is clicked, it opens the resume page
 */
function loadResumePage() {
    window.location.href = './about.html'
}