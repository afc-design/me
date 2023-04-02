// create instance of kinet with custom settings
var kinet = new Kinet({
  acceleration: 0.06,
  friction: 0.20,
  names: ["x", "y"],
});

// select circle element
var circle = document.getElementById('circle');

// set handler on kinet tick event
kinet.on('tick', function(instances) {
  circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
});

// call kinet animate method on mousemove
document.addEventListener('mousemove', function (event) {
  kinet.animate('x', event.clientX - window.innerWidth/2);
  kinet.animate('y', event.clientY - window.innerHeight/2);
});


// log
kinet.on('start', function() {
  console.log('start');
});

kinet.on('end', function() {
  console.log('end');
});

function grow() {
  $('#circle').css('background', 'linear-gradient(to top left, #ccc, #efbcd5)');
  $('#circle').css('height', '60px');
  $('#circle').css('width', '60px');
  $('#circle').css('margin', '-30px 0 0 -30px');
}

function shrink() {
  // on mouseout, reset the background colour
  $('#circle').css('background', 'linear-gradient(to top left, #8661c1, #be97c6)');
  $('#circle').css('height', '30px');
  $('#circle').css('width', '30px');
  $('#circle').css('margin', '-15px 0 0 -15px');
}

// TODO: add the same effect for more buttons
// In order to work for the navbar, you have to add this code to the component
// javascript file. See how to do it avoiding code duplication. Do it also for
// the i18n, that it is also duplicated at the moment.
// TODO: deactivate it for mobile devices.
$(function() {
  $('.popup-youtube').hover(grow, shrink);
  $('.language').hover(grow, shrink);  // TODO: not working yet.
});
