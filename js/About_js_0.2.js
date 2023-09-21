const menu = document.querySelector('.header__textbox');
const menuBtn = document.querySelector('.hamburger');
const body = document.body;

//----------------language-burger--------------

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})



	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

//--------------Scroll----------------------

let menuLinks = document.querySelectorAll('.menu__link[data-goto]');
let hat = document.querySelector('.header');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - hat.offsetHeight;
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

//----------------Slider----------------------

$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		slidesToShow: 3,
		slidesToScroll:1,
		infinite:false,
		responsive:[
			{
				breakpoint: 892,
				settings: {
					slidesToShow:2
				}
			},{
				breakpoint: 567,
				settings: {
					slidesToShow:1,
				}
			}
		]
	});
});

//--------------Footer-Limit---------------------
function validateTextarea () {
	const textarea = document.querySelector('.textarea');
	const result = document.querySelector('.result');

	textarea.addEventListener("keyup", function(){
		var characters = textarea.value.split('');
		result.innerText = characters.length + '/200';
		if(characters.length > 200){
			textarea.value = textarea.value.substring(0,200);
			result.innerText = "200/200";
		}
		if (characters.length == 0){
			textarea.style.height="48px";
		}
	})
};
validateTextarea()