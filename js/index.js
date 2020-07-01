// Navigation-toggle functionality

let $navToggle = document.getElementById('nav-toggle');
const $nav = document.getElementById('main-nav-links');

$navToggle.addEventListener('click', () => {
	$nav.classList.toggle('show');
});