$(function(){
//banner slick slider 
$('.slick_slider').slick({
  dots: true,
  infinite: true,
  arrows: true,
  autoplay:true,
  fade: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// slide screenshort

$('.slide_screen').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay:true,
  fade: false,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// counter up pluging
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});



	// feadback slide
 $('.feedback_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
        asNavFor: '.clin_comment',
	   autoplay:'true',
       speed: '1000',
    });
    $('.clin_comment').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feedback_main',
        dots:'true',
        centerMode: true,
        arrows: false,
        centerPadding: 0,
        focusOnSelect: true
    });
// watch video veno box 
	    $('.watch_video').venobox({
        framewidth: '700px',        // default: ''
        frameheight: '400px',       // default: ''
        border: '0px',             // default: '0'
        bgcolor: 'transtrant',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: 'true',            // default: false
        infinigall: 'false',            // default: false
		spinner:'cube-grid',
		spinColor:'#744fa0',
			
    });
	
	
	
	
	
});


	
	
