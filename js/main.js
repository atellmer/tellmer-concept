//Переменные
var shftScrollOpHead = 100;
var objScrollOpHead = '.header';

var click = 0;

var buttonChat = '#gc-btn-fixed';
var cardChat = '.gc-card-1';
var shiftButtonChat = 30;

ScrollingOpacity(shftScrollOpHead, objScrollOpHead);


function show(text)
{
	console.log(text);
}


//Событие ready()
$(document).ready(function() 
{
	//старт Material
	$.material.init();
	//старт NiceSelect
	$('select').niceSelect();

//кнопки наверх
topButtonScroll('#srch-btn-up', '700');
topButton('#gc-btn-top');
topButton('#mp-btn-top');

$('[data-toggle="tooltip"]').tooltip();

FloatButton(buttonChat, cardChat, shiftButtonChat);	
});


//Событие load()
$(window).load(function()
{
	//старт Isotope
	$('.grid-isotope').isotope(
	{
		itemSelector: '.grid-item',
		percentPosition: true
	});

	ShowProgress();
	HideProgress(); 

	FloatButton(buttonChat, cardChat, shiftButtonChat);	
});

//Событие resize()
$(window).resize(function()
{
	FloatButton(buttonChat, cardChat, shiftButtonChat);
});

//Кнопка наверх вариант 1
function topButtonScroll(idButton, shift)
{
	$(window).scroll(function()
	{
		if ($(this).scrollTop() > shift)
		{
			$(idButton).fadeIn();
		} 
		else
		{
			$(idButton).fadeOut();
		}
	});
	$(idButton).click(function()
	{
		$("body,html").animate({scrollTop:0}, 800);
		return false;
	});
}

//Кнопка наверх вариант 2
function topButton(idButton){
	$(idButton).click(function (){
		$("body,html").animate({
			scrollTop:0
		}, 800);
		return false;
	});
}


// Прогресс бар
$(function()
{
	$("header").append($("<div></div>").attr("class", "progress"));
	$(".progress").append($("<div></div>").attr("class", "progress-bar"));
});
function ShowProgress()
{
	$(".progress-bar").css("width","100%");
}
function HideProgress()
{
	var progressWidth = parseInt($(".progress-bar").css("width"));
	var windowWidth = parseInt($("html").width());
	if(progressWidth === windowWidth) 
	{
		$(".progress").hide();
	}
	else 
	{
		setTimeout(HideProgress, 100);
	}
}



//функция прозрачности хедера при скролле
function ScrollingOpacity(shift, object)
{
	$(window).scroll(function()
	{
		if ($(this).scrollTop() > shift)
		{
			$(object).css('opacity','0.9');
		} 
		else
		{
			$(object).css('opacity','0.97');
		}
	});
}


$(document).ready(function() 
{
	$(".button-floating").click(function() 
	{
		click++;
		function myFunction()
		{
			$(".sub-btn").toggleClass("display-none");
		}
		if(!$('.float-btn').hasClass('button-floating-clicked') && !$('.float-btn').hasClass('button-floating-clicked-out'))
		{
			$(".float-btn").addClass("button-floating-clicked");	
			myFunction();
		}

		if(click % 2 === 0)
		{
			if($('.float-btn').hasClass('button-floating-clicked'))
			{
				$(".float-btn").removeClass("button-floating-clicked");
				$(".float-btn").addClass("button-floating-clicked-out");
				setTimeout(myFunction, 400);
			}
		}
		else
		{
			if($('.float-btn').hasClass('button-floating-clicked-out'))
			{
				$(".float-btn").removeClass("button-floating-clicked-out");
				$(".float-btn").addClass("button-floating-clicked");
				myFunction();
			}
		}
	});
});



//FloatButton
function FloatButton(button, card, shift)
{
	var widthWindow = parseInt($(window).width());
	var widthCard = parseInt($(card).width());
	var different = (widthWindow - widthCard) / 4 - shift;
	if(different>0)
	{
		$(button).css('right', different);
	}
	else
	{
		$(button).css('right', '10px');
	}
}


//Выравнивание модального окна по центру
var controlGc = '.gc-modal-window';
var shiftModalGc = 130;
var controlMp = '.mp-modal-window';
var shiftModalMp = 150;

$(document).ready(function()
{
	objectCenter(controlGc, shiftModalGc);	
	objectCenter(controlMp, shiftModalMp);	
});
$(window).resize(function()
{
	objectCenter(controlGc, shiftModalGc);	
	objectCenter(controlMp, shiftModalMp);
});

function objectCenter(control, shift)
{
	var heightWindow = parseInt($(window).height());
	$(control).css('top', heightWindow / 2 - shift);
}


//круглый прогресс бар рейтинга
$('.circle-progress').circleProgress(
{
	value: 0.70,
	size: 80.0,
	fill: {color: '#E91E63'}
}).on('circle-animation-progress', function(event, progress, stepValue)
{
	stepValue = (stepValue * 100).toFixed(0);
	$(this).find('strong').text(stepValue);
});


//переопределение кнопки загрузки файла
$('#add-file-note').click(function(){
	$('#add-photo-post').click();
});


//исчезновение плавающей кнопки в моем профиле
if($("div").is("#mp-my-float-btn"))
{
	var topShow = 250; 
	$(document).ready(function() {
		$(window).scroll(function () { 
			if ($(window).scrollTop() > topShow) 
			{
				$('.float-btn').fadeIn();
			}
			else 
			{
				if($('.float-btn').hasClass('button-floating-clicked'))
				{
					click++;
					$(".float-btn").removeClass("button-floating-clicked");
					$(".float-btn").addClass("button-floating-clicked-out");
					$(".sub-btn").toggleClass("display-none");
					$('.float-btn').fadeOut();
				}	
				else
				{
					$('.float-btn').fadeOut();
				}					
			}
		});
	});
}


//принудительное обновление стиле css
var rand = getRandomArbitary(0, 10);
var pathStyleDesktop = $("[href='css/style.css?ver=']");
var pathStyleMobile = $("[href='css/style-mobile.css?ver=']");
var versionDesktop = "css/style.css?ver="+rand;
var versionMobile = "css/style-mobile.css?ver="+rand;
pathStyleDesktop.attr("href", versionDesktop);
pathStyleMobile.attr("href", versionMobile);

function getRandomArbitary(min, max)
{
	return Math.random() * (max - min) + min;
}

//Управление Скроллом
var scrollDestroy = true;

var frameWall = $('.frame-tape');
var slideWall = $('.slide-tape');

var frameNews = $('.frame-news');
var slideNews = $('.slide-news');

$(document).ready(function()
{
	SlyManage();		
});

$(window).resize(function()
{
	SlyManage();
	frameWall.sly('reload');
	frameNews.sly('reload');				
});

$(frameWall).on('mouseover',function(){
	frameWall.sly('reload');	
});
$(frameNews).on('mouseover',function(){
	frameNews.sly('reload');	
});

function SlyManage()
{
	if($(window).width() >= 1183)
	{		
		if(scrollDestroy)
		{
			var options = {
				slidee: slideWall,
				itemNav: 'basic',
				scrollBar: $('#wall-scroll'),
				dragHandle: 1,
				dynamicHandle: 1,
				scrollBy: 1,
				speed: 300,
				scrollTrap: 1,
				smart: 1,
				elasticBounds: 1
			};					
			frameWall.sly(options);

			var optionsNews = {
				slidee: slideNews,
				itemNav: 'basic',
				scrollBar: $('#news-scroll'),
				dragHandle: 1,
				dynamicHandle: 1,
				scrollBy: 2,
				speed: 300,
				scrollTrap: 1,
				smart: 1,
				elasticBounds: 1
			};			
			frameNews.sly(optionsNews);


			scrollDestroy = false;
		}
	}
	else
	{
		if(!scrollDestroy)
		{
			frameWall.sly(false);
			frameNews.sly(false);
			scrollDestroy = true;
		}
	}
}


//Блокировка скролла при открытии модального окна
$(document).ready(function(){
	ScrollManagerForModalWindows();
});

function ScrollManagerForModalWindows()
{
	$('.modal').on('shown.bs.modal',function()
	{
		var curScroll = $('body').scrollTop();
		$(window).on('scroll.block',function()
		{
			$('body').scrollTop(curScroll);
		});
	});

	$('.modal').on('hide.bs.modal',function()
	{
		$(window).off('scroll.block');
	});
}

/*Функция определения типа скролл-бара*/
function getTypeScroll()
{
	if(window.innerWidth != document.documentElement.clientWidth)
		return 'desktop';
	else
		return 'mobile';
}


var body = $('body');


/*Мобильное меню*/
var menu = {
	click: 0,
	area: $('.tellmer-menu'),
	btn: $('#menu-button'),
	overlay: $('.menu-overlay'),
	width: 180,
	hidePx: 1200,
	show: function(typeScroll)
	{
		this.overlay.css('display', 'block');
		this.area.css('transform', 'translateX(-' + this.width + 'px)');

		this.btn.css('transform', 'rotate(-90deg)');
		body.css({'overflow': 'hidden', 'position': 'fixed'});					
		if(typeScroll === 'desktop')
		{
			body.css('padding-right', '17px');
		}	
	},
	hide: function(typeScroll)
	{
		this.overlay.css('display', 'none');
		this.area.css('transform', 'translateX(' + this.width + 'px)');	

		this.btn.css('transform', 'rotate(0deg)');				
		body.css({'overflow': 'auto', 'position': 'absolute'});				
		if(typeScroll === 'desktop')
		{
			body.css('padding-right', '0');
		}
	}
}

$(document).ready(menuReadyHandler);

function menuReadyHandler()
{
	var typeScroll = getTypeScroll();

	menu.btn.data("hammer");
	menu.btn.hammer().on("tap", menuTapHandler);

	menu.overlay.data("hammer");
	menu.overlay.hammer().on("tap panright", overlayMenuTapHandler);

	$(window).on('resize', menuResizeHandler);
	

	function menuTapHandler()
	{
		menu.click++;

		if(menu.click % 2)
		{
			menu.show(typeScroll);
		}
		else
		{
			menu.hide(typeScroll);
			menu.click = 0;
		}
	}

	function overlayMenuTapHandler()
	{
		menu.hide(typeScroll);
		menu.click = 0;
	}

	function menuResizeHandler()
	{
		typeScroll = getTypeScroll();

		var wWindow = $(window).width();

		if(wWindow > menu.hidePx)
		{
			menu.hide(typeScroll);
			menu.click = 0;
		}
	}
}



