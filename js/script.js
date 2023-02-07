document.addEventListener('DOMContentLoaded', function() {
  // Slider
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
  }, 4500);

  // Menu
  const burgerMenu = document.querySelector(".burger-menu");
  
  burgerMenu.addEventListener("click", function() {
    this.classList.toggle("active");
    if(document.querySelector(".burger-menu").classList.contains('active')) {
      document.querySelector('.nav-mobile').style.height = '94vh';
    } else {
      document.querySelector('.nav-mobile').style.height = '0vh';
    }
  });

  // Form
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if(input.classList.contains('_email')) {
        if(emailTest(input)) {
          formAddError(input);
          error++;
        }
      }
    }
  }

  function formAddError(input) {
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});