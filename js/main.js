
const burger = document.querySelector('.burger'),
close = document.querySelector('.menu-close'),
menu = document.querySelector('.menu'),
playButtonFirst = document.querySelectorAll('.main-media-play');


burger.addEventListener('click', () => {
menu.classList.add('menu-visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu-visible');
});

playButtonFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-media').querySelector('video');
		video.play();

		setTimeout(() => {

			video.volume = 0.5;
		}, 1000);
	});
});

// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+32 (99) 999-99-99');

im.mask(selector);






