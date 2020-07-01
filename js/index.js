// Navigation-toggle functionality

const $navToggle = document.getElementById('nav-toggle');
const $nav = document.getElementById('main-nav-links');

// On toggle of nav menu, hide / show navigation
$navToggle.addEventListener('click', () => {
	$nav.classList.toggle('show');
});


// Product-colour change functionality

const $productColour = document.getElementById('product-colour');	// Reference to text displaying colour name

const $btnColours = document.querySelectorAll('.product-btn-set > button');	// reference to colour buttons clicked
let $productImg = document.querySelector('.showglass img');	// Reference to showglass image

for (let i=0; i < $btnColours.length; i++) {	// If clicked, cycle and fetch id of clicked button
	let $btn = $btnColours[i];
	$btn.addEventListener('click', (e) => {
		let colour = (e.target).id;	// Get the id (colour title)
		let newImgSrc = "img/adidas-shoe-" + colour + ".png";	// Form URL
		colour = colour.toUpperCase();	// Transform
		$productImg.src = newImgSrc;	// Set the right image URL
		$productColour.innerText = `(${colour})`;	// Set the right colour heading
	});
}





