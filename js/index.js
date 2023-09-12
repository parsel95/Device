// Рабочий главный слайдер

let slidesesPrev = document.querySelectorAll('.main-slaider__prev');
let slidesesNext = document.querySelectorAll('.main-slaider__next');
let sliders = document.querySelectorAll('.main-slaider__item');
let currentSlide = 0;

let navigationButtons = document.querySelectorAll('.content-slaider__navigation-button');

for (let i = 0; i < navigationButtons.length; i++) {
  navigationButtons[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    slideSwitch(navigationButtons[i].dataset.name)
  });
};

function slideSwitch(slideNumber) {
  if (typeof slideNumber === 'number') {
    for (let i = 0; i < sliders.length; i++) {
      if (i != slideNumber) {
        sliders[i].classList.remove('main-slider__item-active');
      } else {
        sliders[i].classList.add('main-slider__item-active');
      }
    }
  } else {
    for (let i = 0; i < sliders.length; i++) {
      if (sliders[i].dataset.name != slideNumber) {
        sliders[i].classList.remove('main-slider__item-active');
      } else {
        sliders[i].classList.add('main-slider__item-active');
      }
    }
  }
};

function validSlideNumberCheck(slideNumber) {
  let validNumber = slideNumber;

  if (slideNumber < 0) {
    validNumber = sliders.length - 1;
  } else if (slideNumber > sliders.length - 1) {
    validNumber = 0;
  }

  currentSlide = validNumber;

  return currentSlide;
};

for (let sliderPrev of slidesesPrev) {
  sliderPrev.onclick = function(evt){
    evt.preventDefault();
    let newSlide = currentSlide - 1;
    slideSwitch(validSlideNumberCheck(newSlide));
  }
};

for (let sliderNext of slidesesNext) {
  sliderNext.onclick = function(evt){
    evt.preventDefault();
    let newSlide = currentSlide + 1;
    slideSwitch(validSlideNumberCheck(newSlide));
  }
};

// Рабочий слайдер доставки

let serviceLinks = document.querySelectorAll('.service__link');
let servicesSlides = document.querySelectorAll('.services__item');

for (let i = 0; i < serviceLinks.length; i++) {
  serviceLinks[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    slideSwitchDelivery(serviceLinks[i].dataset.name)
  });
};

function slideSwitchDelivery(slideNumberDelivery) {
  if (typeof slideNumberDelivery === 'number') {
    for (let i = 0; i < servicesSlides.length; i++) {
      if (i != slideNumberDelivery) {
        servicesSlides[i].classList.remove('services__item--active');
      } else {
        servicesSlides[i].classList.add('services__item--active');
      }
    }
  } else {
    for (let i = 0; i < servicesSlides.length; i++) {
      if (servicesSlides[i].dataset.name != slideNumberDelivery) {
        servicesSlides[i].classList.remove('services__item--active');
      } else {
        servicesSlides[i].classList.add('services__item--active');
      }
    }
  }
};

// Рабочий код, отвечающий за модальное окно

let deliveryOrderLink = document.querySelector('.delivery-order__link');
let modalCloseButton = document.querySelector('.modal__close-button');
let modalAuth = document.querySelector('.modal-auth');

deliveryOrderLink.onclick = function () {
  modalAuth.classList.add('modal__active');
}

modalCloseButton.onclick = function () {
  modalAuth.classList.remove('modal__active');
}

let modalFormButtonMinus = document.querySelector('.modal__form-button-minus');
let modalFormButtonPlus = document.querySelector('.modal__form-button-plus');
let modalInputAmount = document.querySelector('.modal__input-amount');

modalFormButtonPlus.onclick = function () {
  modalInputAmount.value++;
}

modalFormButtonMinus.onclick = function () {
  if (modalInputAmount.value > 0) {
    modalInputAmount.value--;
  }
}
