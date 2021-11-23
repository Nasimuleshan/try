$(document).ready(function(){
	
	$('#open-popup').magnificPopup({
    items: [
      {
        src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
        title: 'Peter & Paul fortress in SPB'
      },
      {
        src: 'https://www.youtube.com/watch?v=-obKX-mqjXQ',
        type: 'iframe' // this overrides default type
      },
      {
        src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
      },
      {
        src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
        type: 'inline'
      },
      {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
	
	
	$('.multiple') .owlCarousel({
    loop:true,
   margin:10,
    nav:true,
	navText: ['<i class="icofont-curved-left"></i>','<i class="icofont-curved-right"></i>'], 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.item').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: false,
  focusOnSelect: true,
  variableWidth: true,
  arrows: false,
  
dots: true,

});
	
	
})