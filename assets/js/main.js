
$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,
		navigation: true,
		anchors: ['home', 'about', 'service', 'project', 'careers', 'contact'],
		menu: '#menu'
	});
});

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
});


var $sticky = $('.menu-top');
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if (scroll >= 100) $sticky.addClass('fixed');
	else $sticky.removeClass('fixed');
}); 

$('.sidebar-nav a').click(function(e){
	e.preventDefault();
	var target = $($(this).attr('href'));
	if(target.length){
		var scrollTo = target.offset().top;
		$('html,body').stop().animate({
			scrollTop: target.offset().top - 80
		}, 1000);
		return false;
	}
}); 

$(document).ready(function(){
	$('.cd-nav-trigger').click(function(){
		$('.cd-nav-trigger').toggleClass('nav-is-visible');
		$('.nav-menu').toggleClass('in');  
	});
	$('.nav-menu .language').click(function(){
		$('.select-language').slideToggle(); 
	}); 
});

/*=================== preloader ===================*/
$(window).on('load',function() { 
	$(".preloading").fadeOut("slow"); 
});

/*=================== GALLERY FUNCTIONS ===================*/ 
loadGallery(true, 'a.viewthumb');

function disableButtons(counter_max, counter_current){
	$('#show-previous-image, #show-next-image').show();
	if(counter_max == counter_current){
		$('#show-next-image').hide();
	} else if (counter_current == 1){
		$('#show-previous-image').hide();
	}
}


function loadGallery(setIDs, setClickAttr){
	var current_image,
	selector,
	counter = 0;

	$('#show-next-image, #show-previous-image').on("click", function() {
		if($(this).attr('id') == 'show-previous-image'){
			current_image--;
		} else {
			current_image++;
		}

		selector = $('[data-image-id="' + current_image + '"]');
		updateGallery(selector);
	});

	function updateGallery(selector) {
		var $sel = selector;
		current_image = $sel.data('image-id');
		$('#image-gallery-caption').text($sel.data('caption'));
		$('#image-gallery-title').text($sel.data('title'));
		$('#image-gallery-image').attr('src', $sel.data('image'));
		disableButtons(counter, $sel.data('image-id'));
	}

	if(setIDs == true){
		$('[data-image-id]').each(function(){
			counter++;
			$(this).attr('data-image-id',counter);
		});
	}
	$(setClickAttr).on('click',function(){
		updateGallery($(this));
	});
}
