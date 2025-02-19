document.addEventListener("DOMContentLoaded", function () {
        // Get current Kyiv time
        const kyivTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Kiev" });
        const currentTime = new Date(kyivTime);
        const hour = currentTime.getHours();
        const minute = currentTime.getMinutes();

        const shippingMessageContainer = document.getElementById("shippingMessage");
        const messageText = shippingMessageContainer.querySelector(".shipping-message-text");
        const timerText = shippingMessageContainer.querySelector(".shipping-timer");

        // Logic for determining message
        if (hour >= 5 && (hour < 14 || (hour === 14 && minute <= 0))) {
            // Determine time remaining until 14:00
            const deadline = new Date(currentTime);
            deadline.setHours(14, 0, 0, 0); // 14:00 Kyiv time

            // Calculate time remaining
            let timeLeft = Math.floor((deadline - currentTime) / 1000); // time in seconds

            // Time formatting function
            function formatTime(seconds) {
                const hrs = Math.floor(seconds / 3600);
                const mins = Math.floor((seconds % 3600) / 60);
                const secs = Math.floor(seconds % 60);
                return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            }

            // Update message every second
            const timerInterval = setInterval(function () {
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    messageText.textContent = "Оформіть замовлення зараз, і ми відправимо його сьогодні!";
                    timerText.textContent = "";  // Hide timer when it reaches zero
                } else {
                    messageText.textContent = `Оформіть замовлення протягом &nbsp; `;
                    timerText.textContent = `${formatTime(timeLeft)}, і ми відправимо його сьогодні!`;
                    timeLeft--;
                }
            }, 1000);
        } else {
            messageText.textContent = "Оформіть замовлення зараз, і ми відправимо його завтра!";
            timerText.textContent = "";  // Hide timer when it's not active
        }
    });
