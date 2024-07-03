let formVariable = document.querySelector('myform');
let slideIndex = 1;


formVariable.addEventListener('submit', function(e) {
    e.preventDefault();

    // send data somewhere update div
});

// Image Carousel from: https://www.w3schools.com/howto/howto_js_slideshow.asp

showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += 'active';
}