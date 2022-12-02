window.addEventListener('DOMContentLoaded', main);

function main() {
    clickButton();
}

function clickButton() {
    const button = document.getElementById('button');
    button.addEventListener('click', openPage);
}

function openPage() {
    window.location.href = './about.html'
}