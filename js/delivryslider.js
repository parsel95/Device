// Слайдер доставки

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
