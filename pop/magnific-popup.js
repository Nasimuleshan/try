$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
  
 $('#open-popup').magnificPopup({
    items: [
      {
        src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
        title: 'Peter & Paul fortress in SPB'
      },
      {
        src: 'https://www.youtube.com/watch?v=vUVzh3-zMjU',
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
  
  
  
  
  
  
});