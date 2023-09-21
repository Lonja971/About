
//Popup

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		body.classList.add('no-scroll');
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__contant')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	body.classList.remove('no-scroll');
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length >0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	},timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupactive = document.querySelector('.popup.open');
		popupClose(popupactive);
	}
});

(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
	}
})();

//Burger

q = document.querySelector('.header__burger-a');
boorger768 = document.querySelector('.header__burgermenu768');
tetxKrest = document.querySelector('.bm-krest-img');
boorgerFooter = document.querySelector('.footer__burger-a');
q.onclick = function () {
	boorger768.style.transform = "translate(0px, 0px)";
	boorger768.style.opacity = "1";
};
tetxKrest.onclick = function () {
	boorger768.style.transform = "translate(200%, 0px)";
	boorger768.style.opacity = "0";
};

//----------------Scroll----------------------

const anchors = document.querySelectorAll('a[href*="#q"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})

//----------------Slider----------------------

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		infinite:false,
		responsive:[
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:2,
					slidesToScroll:2
				}
			},	{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
					slidesToScroll:1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.com-slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:2,
		slidesToScroll:2,
		infinite:false,
		responsive:[
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:1,
					slidesToScroll:1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.rew-slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:4,
		slidesToScroll:4,
		infinite:false,
		responsive:[
			{
				breakpoint: 1294,
				settings: {
					slidesToShow:3,
					slidesToScroll:3
				}
			},{
				breakpoint: 1025,
				settings: {
					slidesToShow:2,
					slidesToScroll:2
				}
			},	{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
					slidesToScroll:1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.abo-slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:4,
		slidesToScroll:4,
		infinite:false,
		responsive:[
			{
				breakpoint: 1294,
				settings: {
					slidesToShow:3,
					slidesToScroll:3
				}
			},{
				breakpoint: 1025,
				settings: {
					slidesToShow:2,
					slidesToScroll:2
				}
			},	{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
					slidesToScroll:1
				}
			}
		]
	});
});

//----------------Doktor-king-slider---------------------



const i1 = document.querySelector('.doctor__menu1-a');
const i2 = document.querySelector('.doctor__menu2-a');
const i3 = document.querySelector('.doctor__menu3-a');
const i4 = document.querySelector('.doctor__menu4-a');
const i5 = document.querySelector('.doctor__menu5-a');
const i6 = document.querySelector('.doctor__menu6-a');

const a1 = document.querySelector('.doctor__king-1');
const a2 = document.querySelector('.doctor__king-2');
const a3 = document.querySelector('.doctor__king-3');
const a4 = document.querySelector('.doctor__king-4');
const a5 = document.querySelector('.doctor__king-5');
const a6 = document.querySelector('.doctor__king-6');

const col1 = document.querySelector('.doctor__menu1-a');
const col2 = document.querySelector('.doctor__menu2-a');
const col3 = document.querySelector('.doctor__menu3-a');
const col4 = document.querySelector('.doctor__menu4-a');
const col5 = document.querySelector('.doctor__menu5-a');
const col6 = document.querySelector('.doctor__menu6-a');

const arrow1 = document.querySelector('.doktor__king-a1');
const arrow2 = document.querySelector('.doktor__king-a2');

let num = 1;

i1.onclick = function () {
	event.preventDefault();
	a1.classList.add('active');
	a2.classList.remove('active');
	a3.classList.remove('active');
	a4.classList.remove('active');
	a5.classList.remove('active');
	a6.classList.remove('active');
	col1.classList.add('active-color');
	col2.classList.remove('active-color');
	col3.classList.remove('active-color');
	col4.classList.remove('active-color');
	col5.classList.remove('active-color');
	col6.classList.remove('active-color');
	num = 1;
};
i2.onclick = function () {
	event.preventDefault();
	a2.classList.add('active');
	a1.classList.remove('active');
	a3.classList.remove('active');
	a4.classList.remove('active');
	a5.classList.remove('active');
	a6.classList.remove('active');
	col2.classList.add('active-color');
	col1.classList.remove('active-color');
	col3.classList.remove('active-color');
	col4.classList.remove('active-color');
	col5.classList.remove('active-color');
	col6.classList.remove('active-color');
	 num = 2;
};
i3.onclick = function () {
	event.preventDefault();
	a3.classList.add('active');
	a1.classList.remove('active');
	a2.classList.remove('active');
	a4.classList.remove('active');
	a5.classList.remove('active');
	a6.classList.remove('active');
	col3.classList.add('active-color');
	col1.classList.remove('active-color');
	col2.classList.remove('active-color');
	col4.classList.remove('active-color');
	col5.classList.remove('active-color');
	col6.classList.remove('active-color');
	num = 3;

};
i4.onclick = function () {
	event.preventDefault();
	a4.classList.add('active');
	a1.classList.remove('active');
	a3.classList.remove('active');
	a2.classList.remove('active');
	a5.classList.remove('active');
	a6.classList.remove('active');
	col4.classList.add('active-color');
	col1.classList.remove('active-color');
	col3.classList.remove('active-color');
	col2.classList.remove('active-color');
	col5.classList.remove('active-color');
	col6.classList.remove('active-color');
	num = 4;
};
i5.onclick = function () {
	event.preventDefault();
	a5.classList.add('active');
	a1.classList.remove('active');
	a3.classList.remove('active');
	a4.classList.remove('active');
	a2.classList.remove('active');
	a6.classList.remove('active');
	col5.classList.add('active-color');
	col1.classList.remove('active-color');
	col3.classList.remove('active-color');
	col4.classList.remove('active-color');
	col2.classList.remove('active-color');
	col6.classList.remove('active-color');
	num = 5;
};
i6.onclick = function () {
	event.preventDefault();
	a6.classList.add('active');
	a1.classList.remove('active');
	a3.classList.remove('active');
	a4.classList.remove('active');
	a5.classList.remove('active');
	a2.classList.remove('active');
	col6.classList.add('active-color');
	col1.classList.remove('active-color');
	col3.classList.remove('active-color');
	col4.classList.remove('active-color');
	col5.classList.remove('active-color');
	col2.classList.remove('active-color');
	num = 6;
};

arrow1.onclick = function () {
	event.preventDefault();
	if (num == 6) {
		a5.classList.add('active');
		a1.classList.remove('active');
		a3.classList.remove('active');
		a4.classList.remove('active');
		a2.classList.remove('active');
		a6.classList.remove('active');
		col5.classList.add('active-color');
		col1.classList.remove('active-color');
		col3.classList.remove('active-color');
		col4.classList.remove('active-color');
		col2.classList.remove('active-color');
		col6.classList.remove('active-color');
		num = num - 1;
	} else if (num == 5) {
		a4.classList.add('active');
		a1.classList.remove('active');
		a3.classList.remove('active');
		a2.classList.remove('active');
		a5.classList.remove('active');
		a6.classList.remove('active');
		col4.classList.add('active-color');
		col1.classList.remove('active-color');
		col3.classList.remove('active-color');
		col2.classList.remove('active-color');
		col5.classList.remove('active-color');
		col6.classList.remove('active-color');
		num = num - 1;
	} else if (num == 4) {
		a3.classList.add('active');
		a1.classList.remove('active');
		a2.classList.remove('active');
		a4.classList.remove('active');
		a5.classList.remove('active');
		a6.classList.remove('active');
		col3.classList.add('active-color');
		col1.classList.remove('active-color');
		col2.classList.remove('active-color');
		col4.classList.remove('active-color');
		col5.classList.remove('active-color');
		col6.classList.remove('active-color');
		num = num - 1;
	} else if (num == 3) {
		a2.classList.add('active');
		a1.classList.remove('active');
		a3.classList.remove('active');
		a4.classList.remove('active');
		a5.classList.remove('active');
		a6.classList.remove('active');
		col2.classList.add('active-color');
		col1.classList.remove('active-color');
		col3.classList.remove('active-color');
		col4.classList.remove('active-color');
		col5.classList.remove('active-color');
		col6.classList.remove('active-color');
		num = num - 1;
	} else if (num == 2) {
		a1.classList.add('active');
		a2.classList.remove('active');
		a3.classList.remove('active');
		a4.classList.remove('active');
		a5.classList.remove('active');
		a6.classList.remove('active');
		col1.classList.add('active-color');
		col2.classList.remove('active-color');
		col3.classList.remove('active-color');
		col4.classList.remove('active-color');
		col5.classList.remove('active-color');
		col6.classList.remove('active-color');
		num = num - 1;
	} else{
		a1.classList.add('active');
		a2.classList.remove('active');
		a3.classList.remove('active');
		a4.classList.remove('active');
		a5.classList.remove('active');
		a6.classList.remove('active');
		col1.classList.add('active-color');
		col2.classList.remove('active-color');
		col3.classList.remove('active-color');
		col4.classList.remove('active-color');
		col5.classList.remove('active-color');
		col6.classList.remove('active-color');
		let num = 1;
	};
};
arrow2.onclick = function () {
	event.preventDefault();
	if (num == 1) {
		a2.classList.add('active');
		a1.classList.remove('active');
		a3.classList.remove('active');
		a4.classList.remove('active');
		a5.classList.remove('active');
		a6.classList.remove('active');
		col2.classList.add('active-color');
		col1.classList.remove('active-color');
		col3.classList.remove('active-color');
		col4.classList.remove('active-color');
		col5.classList.remove('active-color');
		col6.classList.remove('active-color');
		num = num + 1;
	} else if (num == 2) {
		a3.classList.add('active');
		a1.classList.remove('active');
		a2.classList.remove('active');
		a4.classList.remove('active');
		a5.classList.remove('active');
		a6.classList.remove('active');
		col3.classList.add('active-color');
		col1.classList.remove('active-color');
		col2.classList.remove('active-color');
		col4.classList.remove('active-color');
		col5.classList.remove('active-color');
		col6.classList.remove('active-color');
		num = num + 1;
	} else if (num == 3) {
		a4.classList.add('active');
		a1.classList.remove('active');
		a3.classList.remove('active');
		a2.classList.remove('active');
		a5.classList.remove('active');
		a6.classList.remove('active');
		col4.classList.add('active-color');
		col1.classList.remove('active-color');
		col3.classList.remove('active-color');
		col2.classList.remove('active-color');
		col5.classList.remove('active-color');
		col6.classList.remove('active-color');
		num = num + 1;
	} else if (num == 4) {
		a5.classList.add('active');
		a1.classList.remove('active');
		a3.classList.remove('active');
		a4.classList.remove('active');
		a2.classList.remove('active');
		a6.classList.remove('active');
		col5.classList.add('active-color');
		col1.classList.remove('active-color');
		col3.classList.remove('active-color');
		col4.classList.remove('active-color');
		col2.classList.remove('active-color');
		col6.classList.remove('active-color');
		num = num + 1;
	} else if (num == 5) {
		a6.classList.add('active');
		a1.classList.remove('active');
		a3.classList.remove('active');
		a4.classList.remove('active');
		a5.classList.remove('active');
		a2.classList.remove('active');
		col6.classList.add('active-color');
		col1.classList.remove('active-color');
		col3.classList.remove('active-color');
		col4.classList.remove('active-color');
		col5.classList.remove('active-color');
		col2.classList.remove('active-color');
		num = num + 1;
	} else{
		a6.classList.add('active');
		a1.classList.remove('active');
		a3.classList.remove('active');
		a4.classList.remove('active');
		a5.classList.remove('active');
		a2.classList.remove('active');
		col6.classList.add('active-color');
		col1.classList.remove('active-color');
		col3.classList.remove('active-color');
		col4.classList.remove('active-color');
		col5.classList.remove('active-color');
		col2.classList.remove('active-color');
		num = 6;
	};
};