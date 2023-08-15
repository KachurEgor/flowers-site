
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('#site-navigation-mobile');

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');

});

/*filter */

let filter__btn = document.querySelector('.filter-button');
let filter = document.querySelector('.catalog__wrapper');
let close = document.querySelector('.filter__close');
filter__btn.addEventListener('click', function(){
	filter.classList.add('active');
	//filter.classList.toggle('active');
});
close.addEventListener('click', function(){
	filter.classList.remove('active');
	//filter.classList.toggle('active');
});




