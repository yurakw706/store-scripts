document.addEventListener("DOMContentLoaded", function () {
    // Get the price from the meta tag
    var priceMeta = document.querySelector('meta[itemprop="price"]');
    if (priceMeta) {
        var price = parseFloat(priceMeta.getAttribute("content"));

        // Check if price is less than or equal to 1999
        if (price <= 1999) {
            // Message with separate span for "59 грн"
            var message = `
                <div class="cheap-shipping-text">
                    При оплаті карткою онлайн або на рахунок ФОП, доставка до Нової Пошти всього за -
                    <span class="cheap-shipping-cost">59 грн</span>
                </div>
            `;

            // Insert the message into the container
            var textContainer = document.querySelector(".cheap-shipping-text");
            if (textContainer) {
                textContainer.innerHTML = message;
            }
        }
    }
});