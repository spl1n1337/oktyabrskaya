// const slides = document.querySelectorAll('.mySlides');

// console.log(slides.length)


// var autoplayInterval = setInterval(function() {

//     el.classList.replace('hide', 'show');
   
//   }, 1500);

const elements = [...document.querySelectorAll('.mySlides')];

let currentIndex = 0;

setInterval(() => {
  elements.forEach((element, index) => {
    if (index === currentIndex) {
      element.classList.add('show');
      element.classList.remove('hide');
    } else {
      element.classList.add('hide');
      element.classList.remove('show');
    }
  });
  currentIndex = (currentIndex + 1) % elements.length;
}, 3000);