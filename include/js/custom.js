jQuery(document).ready(function($){

// $('.hero-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: true,
//   arrows: false, 
//   infinite: true,
//   adaptiveHeight: false,
//   autoplay: true,
//   autoplaySpeed: 5000
// });


if ($('[data-tab-slider]').is(":visible") ) {
$(".nav-tabs a").click(function() {
  var position = $(this).parent().position();
  var width = $(this).parent().width();
    $(".tab-slider").css({"left":+ position.left,"width":width});
});
$('[data-tab-slider]').prepend('<span class="ta-tab-hover tab-slider"></span>');
var actWidth = $(".nav-tabs").find(".active").parent("li").width();
var actPosition = $(".nav-tabs .active").position();
$(".tab-slider").css({"left":+ actPosition.left,"width": actWidth});
}


$('.tab-pane .ta-owl-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false, 
  infinite: true,
  adaptiveHeight: false,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true
});
$('.tab-pane .ta-owl-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	jQuery(this).closest('.tab-pane').find('.ta-text').removeClass('active');
 	jQuery(this).closest('.tab-pane').find('.ta-text:nth-child(' + (mySlideNumber+1) + ')').addClass('active');
 	//console.log(mySlideNumber);
});
$('.tab-pane [data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.ta-owl-slider').slick('slickGoTo', slideno);
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    e.target
    e.relatedTarget
    $('.ta-owl-slider').slick('setPosition');
 });


$('.logo-slider').slick({
	slidesToShow: 4,
  	slidesToScroll: 1,
  	infinite: true,
	dots: false,
	arrows: true,
	autoplay:true,
	autoplaySpeed:700,
	responsive: [
    {
      breakpoint: 1200,
      settings:{
      	slidesToShow: 4
      }
    },
    {
      breakpoint: 1050,
      settings:{
      	slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});

$('.client-logo-slider').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	infinite: true,
	dots: false,
	arrows: false,
	autoplay:true,
	autoplaySpeed:700,
	responsive: [
	{
      breakpoint: 1600,
      settings:{
      	slidesToShow: 5,
      }
    },
    {
      breakpoint: 1200,
      settings:{
      	slidesToShow: 4,
      }
    },
    {
      breakpoint: 992,
      settings:{
      	slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings:{
      	slidesToShow: 2,
      	arrows: false,
      	dots: true,
      }
    },
    {
      breakpoint: 500,
      settings:{
      	slidesToShow: 1,
      }
    }
    ]
});


$('.mobile-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});

/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '90%',
        });

// osElement.removeClass('fadeInUp');
  
  });

}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );

 /*==========================*/  
/* Animated Number  */  
/*==========================*/   
$(window).scroll(function() {  
  if ($('.mf-tips-box').length) {
    $('.mf-tips-box').not('.animated').each(function(){
    if( $(window).scrollTop() >= $(this).offset().top-$(window).height() ) {
      $(this).addClass('animated').find('.timer').countTo({
        from: 0,
      });
    }
  });
}
});

 /*==========================*/  
/* Validate Form */  
/*==========================*/
$.validator.setDefaults({
  submitHandler: function() {
    alert("submitted!");
  }
});

$("#validateForm").validate({
  rules:{
    firstname: "required",
    lastname: "required",
    fullname: "required",
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      digits: true
    },
    agree: "required"
  },
  messages: {
    firstname: "Please enter your firstname",
    lastname: "Please enter your lastname",
    fullname: "Please enter your fullname",
    email: "Please enter a valid email address",
    phone: "Please enter a valid phone number",
    agree: "Please accept our policy"
  }
});

/*==========================*/
/* Responsive Tabs */
/*==========================*/
$('.card-header').click(function() {
    if ($(this).closest('.card').hasClass('active')) {
        $('.card').removeClass('active');
        $('.card .content-body').slideUp();
    } else {
        $('.card').removeClass('active');
        $(this).closest('.card').addClass('active');
        $('.card .content-body').slideUp();
        $(this).closest('.card').find('.content-body').slideDown(function(){
            var headerHeight = $('header').outerHeight() + 10;
            $('html, body').animate({
                scrollTop: $(this).closest('.card').offset().top - headerHeight
            }, 200)
        });
    }
});

/*==========================*/
/* Responsive Data Table*/
/*==========================*/
$(".table-wrap").each(function() {
  var nmtTable = $(this);
 var nmtHeadRow = nmtTable.find("thead tr");
 nmtTable.find("tbody tr").each(function() {
   var curRow = $(this);
   for (var i = 0; i < curRow.find("td").length; i++) {
     var rowSelector = "td:eq(" + i + ")";
     var headSelector = "th:eq(" + i + ")";
     curRow.find(rowSelector).attr('data-title', nmtHeadRow.find(headSelector).text());
   }
 });
});


// Sticky header on scroll
$('#list-tabs').waypoint(function(direction) {
  $('#list-tabs').toggleClass('tabs-fixed');
},{ 
  offset: '120'
});









$('#list-tabs > li > a').click(function(){
    var id = $(this).attr('href');
    $(id).slideDown();
    $('html, body').animate({scrollTop: $(id).offset().top - 110}, 300);
    return false;
});

/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
	
});	

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});