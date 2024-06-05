// Модальное окно

let deliveryOrderLink = document.querySelector('.delivery-order__link');
let modalCloseButton = document.querySelector('.modal__close-button');
let modalAuth = document.querySelector('.modal-auth');

deliveryOrderLink.onclick = function () {
  modalAuth.classList.add('modal__active');
};

modalCloseButton.onclick = function () {
  modalAuth.classList.remove('modal__active');
};

let modalFormButtonMinus = document.querySelector('.modal__form-button-minus');
let modalFormButtonPlus = document.querySelector('.modal__form-button-plus');
let modalInputAmount = document.querySelector('.modal__input-amount');

modalFormButtonPlus.onclick = function () {
  modalInputAmount.value++;
};

modalFormButtonMinus.onclick = function () {
  if (modalInputAmount.value > 0) {
    modalInputAmount.value--;
  }
};
