document.addEventListener("DOMContentLoaded", function () {
    // Get current Kyiv time
    const kyivTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Kiev" });
    const currentTime = new Date(kyivTime);
    const day = currentTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();

    const shippingMessageContainer = document.getElementById("shippingMessage");
    const messageText = shippingMessageContainer.querySelector(".shipping-message-text");

    let message = "";

    // Monday to Friday
    if (day >= 1 && day <= 5) { 
        if (hour < 14 || (hour === 14 && minute === 0)) {
            message = `Оформіть замовлення до <span class="due-time">14:00</span>, і ми відправимо його <span class="shipping-today">сьогодні!</span>`;
        } else {
            message = `Оформіть замовлення <span class="now">зараз</span>, і ми відправимо його <span class="shipping-tomorrow">завтра!</span>`;
        }
    }
    // Saturday
    else if (day === 6) { 
        if (hour < 11 || (hour === 11 && minute === 0)) {
            message = `Оформіть замовлення до <span class="due-time">11:00</span>, і ми відправимо його <span class="shipping-today">сьогодні!</span>`;
        } else {
            message = `Оформіть замовлення <span class="now">зараз</span>, і ми відправимо його <span class="shipping-monday">в понеділок!</span>`;
        }
    }
    // Sunday
    else if (day === 0) { 
        message = `Оформіть замовлення <span class="now">зараз</span>, і ми відправимо його <span class="shipping-monday">в понеділок!</span>`;
    }

    // Display the message
    messageText.innerHTML = message;
});
