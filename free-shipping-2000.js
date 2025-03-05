document.addEventListener("DOMContentLoaded", function () {
        // Get the price from the meta tag
        var priceMeta = document.querySelector('meta[itemprop="price"]');
        if (priceMeta) {
            var price = parseFloat(priceMeta.getAttribute("content"));

            // Determine the message based on the price
            var message = price >= 1999 
                ? "На цей товар безкоштовна доставка" 
                : "Безкоштовна доставка від 2000 грн";

            // Insert the message into the second column
            var textContainer = document.querySelector(".custom-shipping-text");
            if (textContainer) {
                textContainer.textContent = message;
            }
        }
    });