(function jQ($) {
  const options = [{
    selector: '#sponsors',
    offset: 500,
    callback: function Ca() {
      function nextCarousel() {
        $('.carousel').carousel('next');
      }
      window.setInterval(nextCarousel, 6000);
    },
  }, {
    selector: '#contact',
    offset: 220,
    callback: function Sta() {
      Materialize.showStaggeredList('#contactList');
    },
  }];
  $('.button-collapse').sideNav({
    menuWidth: 320,
    // Default is 240
    edge: 'left',
    // Choose the horizontal origin
    closeOnClick: true,
    // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  $('.scrollspy').scrollSpy();
  $('.slider').slider({
    full_width: true,
    indicators: true,
    height: 600,
    transition: 500,
    interval: 6000,
  });
  $('.modal-trigger').leanModal();
  $('.carousel').carousel({
    time_constant: 400,
    dist: -48,
    shift: 2,
    padding: 48,
    // full_width: 100
  });
  Materialize.scrollFire(options);
  $('.hidden').hide();
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true,
  });
  // end of document ready
}(jQuery));
// end of jQuery name space
