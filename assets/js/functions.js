$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

const previousBtn = document.querySelector(".icon-chevron-thin-left.prev");
const nextBtn = document.querySelector(".icon-chevron-thin-right.next");
const imageActive = document.querySelectorAll(".banner > li");

// console.log(imageActive)

nextBtn.addEventListener('click', function () {
	// console.log(nextBtn)
	let index = -1;
	imageActive.forEach((btn, indexButton) => {
	if (btn.classList.contains('active')) {
		index = indexButton;
		return 
	 } 
	 
	})
	imageActive[index].classList.remove('active');

	const nextIndex = (index + 1) % imageActive.length;

    imageActive[nextIndex].classList.add('active');
})

previousBtn.addEventListener('click', function () {
	// console.log(previousBtn)
	let index = -1;
	imageActive.forEach((btn, indexButton) => {
	if (btn.classList.contains('active')) {
		index = indexButton;
		return 
	 } 
	 
	})
	imageActive[index].classList.remove('active');

	const prevIndex = (index - 1 + imageActive.length) % imageActive.length;

    imageActive[prevIndex].classList.add('active');
})


var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);