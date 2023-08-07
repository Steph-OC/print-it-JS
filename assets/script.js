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

// click flèche gauche et droite
const arrow_left = document.querySelector('.arrow_left')
arrow_left.addEventListener('click', function (event) {
	console.log(event)
})

const arrow_right = document.querySelector('.arrow_right')
arrow_right.addEventListener('click', function (event) {
	console.log(event)
})


const sectionDot = document.querySelector(".dots");
const numeroSelected = 0;
//création des bullets
//boucle sur le tableau slides
for (let i = 0; i < slides.length; i++) {
	//création d'une div avec la class dot
	const divDot = document.createElement("div");
	divDot.classList.add("dot");

	if (numeroSelected === i) {
		divDot.classList.add("dot_selected");
	}
	//rattacher à la balise parent
	sectionDot.appendChild(divDot);
	console.log(slides[i])
	console.log(divDot)

}
