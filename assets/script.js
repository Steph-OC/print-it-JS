const slides = [
	{
		"image": "images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById("banner");
const bannerSlide = banner.querySelector('.banner-img');
const sectionDot = document.querySelector(".dots");
const textSlide = banner.querySelector("p");
let currentIndex = 0;

//création des bullets
for (let i = 0; i < slides.length; i++) {
	//création d'une div avec la class dot
	let divDot = document.createElement("div");
	divDot.classList.add("dot");
	//rattacher à la balise parent
	sectionDot.appendChild(divDot);
}
//récupération des dots sous forme de tableau
// assignation de la classe dot_select sur la premiere dot
let dots = document.getElementsByClassName("dot");
dots[0].classList.add("dot_selected");

function changeSlide() {
	for (const dot of dots) {
		dot.classList.remove("dot_selected");
	}
	dots[currentIndex].classList.add("dot_selected");
	bannerSlide.src = "assets/" + slides[currentIndex].image;
	textSlide.innerHTML = slides[currentIndex].tagLine;
}

function clicArrow(sens) {
	currentIndex = currentIndex + sens;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	if (currentIndex > slides.length - 1) {
		currentIndex = 0;
	}
	changeSlide();
}

//clic flèche droite
const arrow_right = document.querySelector('.arrow_right');
arrow_right.addEventListener('click', function () {
	clicArrow(1);
});

// clic flèche gauche
const arrow_left = document.querySelector('.arrow_left');
arrow_left.addEventListener('click', function () {
	clicArrow(-1);
});
