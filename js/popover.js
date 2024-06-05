// Поповер(корзина)

let popoverCarts = document.querySelectorAll('.popover-cart');
let popoverOpenButtons = document.querySelectorAll('.popover__open-button');
let popoverCountIcon = document.querySelector('.navigation-menu__icon');
let popoverTextCount = document.querySelector('.popover__text--count');
let popoverTextSum = document.querySelector('.popover__text--sum');
let popoverCount = 2;
let popoverSum = 2000;

for (let popoverOpenButton of popoverOpenButtons) {
  popoverOpenButton.onclick = function () {
    for (let popoverCart of popoverCarts) {
      popoverCart.classList.toggle('popover__active');
    }
  }
};

let popoverDeleteButtons = document.querySelectorAll('.popover__product-delete-button');

for (let popoverDeleteButton of popoverDeleteButtons) {
  popoverDeleteButton.onclick = function () {
    popoverDeleteButton.parentElement.remove();
    popoverCount = popoverCount - 1;
    popoverSum -= 1000;
    popoverCountIcon.textContent = popoverCount;
    popoverTextCount.textContent = 'Товаров: ' + popoverCount;
    popoverTextSum.textContent = 'Сумма: ' + popoverSum + ' ₽';
  }
};
