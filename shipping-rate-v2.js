document.addEventListener("DOMContentLoaded", function () {
    // Get current Kyiv time
    const kyivTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Kiev" });
    const currentTime = new Date(kyivTime);
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();

    const shippingMessageContainer = document.getElementById("shippingMessage");
    const messageText = shippingMessageContainer.querySelector(".shipping-message-text");
    const timerText = shippingMessageContainer.querySelector(".shipping-timer");

    // Time formatting function
    function formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // Logic for determining message
    if (hour >= 5 && (hour < 14 || (hour === 14 && minute <= 0))) {
        // Determine time remaining until 14:00
        const deadline = new Date(currentTime);
        deadline.setHours(14, 0, 0, 0); // 14:00 Kyiv time
        let timeLeft = Math.floor((deadline - currentTime) / 1000); // time in seconds

        // Update message every second
        const timerInterval = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                messageText.innerHTML = `Оформіть замовлення зараз, і ми відправимо його <span class="shipping-today">сьогодні!</span>`;
                timerText.textContent = "";  // Hide timer when it reaches zero
            } else {
                messageText.innerHTML = `Оформіть замовлення протягом <span class="shipping-timer">${formatTime(timeLeft)}</span>, і ми відправимо його <span class="shipping-today">сьогодні!</span>`;
                timeLeft--;
            }
        }, 1000);
    } else {
        messageText.innerHTML = `Оформіть замовлення зараз, і ми відправимо його <span class="shipping-tomorrow">завтра!</span>`;
        timerText.textContent = "";  // Hide timer when it's not active
    }
});
