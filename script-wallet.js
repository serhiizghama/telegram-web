
document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const progressBar = document.getElementById("progress");
    const walletContent = document.getElementById("wallet-content");
    const balanceElement = document.querySelector(".balance-container h2");
    const finalBalance = 158420.81;
    
    let progress = 0;

    const interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            loadingText.textContent = `Loading ${progress}%`;
            progressBar.style.width = `${progress}%`;
        } else {
            clearInterval(interval);
            document.querySelector(".loading-container").style.display = "none";
            walletContent.classList.remove("hidden");
            animateBalance(balanceElement, finalBalance);
        }
    }, 50);
});

function animateBalance(element, finalValue) {
    let currentValue = 0;
    const duration = 2000; // Продолжительность анимации в миллисекундах
    const startTime = performance.now();

    function updateBalance(time) {
        const elapsedTime = time - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        currentValue = finalValue * progress;
        element.textContent = `$${currentValue.toFixed(2)}`;

        if (progress < 1) {
            requestAnimationFrame(updateBalance);
        }
    }

    requestAnimationFrame(updateBalance);
}
