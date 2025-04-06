document.addEventListener('DOMContentLoaded', function() {
    const buyButtonMain = document.querySelector('.product-card__buy-button .j-buy-button-add');
    const priceContainer = document.querySelector('.product-card__price');
    const productCard = document.querySelector('.product-card');

    if (!buyButtonMain || !priceContainer || !productCard) {
        console.error('Не знайдено основну кнопку "В кошик" або контейнер ціни.');
        return;
    }

    const stickyAddToCart = document.createElement('div');
    stickyAddToCart.classList.add('sticky-add-to-cart');
    stickyAddToCart.style.display = 'none';

    const buyButtonSticky = document.createElement('button');
    buyButtonSticky.classList.add('sticky-add-to-cart__button');

    const cartIcon = document.createElement('img');
    cartIcon.classList.add('sticky-add-to-cart__icon');
    cartIcon.src = 'https://i.imgur.com/cWLTHrg.png';
    cartIcon.alt = 'Кошик';

    const buttonText = document.createTextNode('В кошик');

    const separator = document.createElement('span');
    separator.classList.add('sticky-add-to-cart__separator');
    separator.textContent = '|';

    const priceText = document.createElement('span');
    priceText.classList.add('sticky-add-to-cart__price-container');
    priceText.innerHTML = priceContainer.innerHTML;

    buyButtonSticky.appendChild(cartIcon);
    buyButtonSticky.appendChild(buttonText);
    buyButtonSticky.appendChild(separator);
    buyButtonSticky.appendChild(priceText);

    stickyAddToCart.appendChild(buyButtonSticky);
    document.body.appendChild(stickyAddToCart);

    // Обробник кліку для sticky кнопки
    buyButtonSticky.addEventListener('click', function(event) {
        event.preventDefault(); // Запобігаємо можливим стандартним діям кнопки
        buyButtonMain.click(); // Імітуємо клік на основній кнопці
    });

    function checkVisibility() {
        if (window.innerWidth <= 768) {
            const buyButtonRect = buyButtonMain.getBoundingClientRect();
            if (buyButtonRect.bottom < 0) {
                stickyAddToCart.style.display = 'flex';
            } else {
                stickyAddToCart.style.display = 'none';
            }
        } else {
            stickyAddToCart.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
});