document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const progressBar = document.getElementById("progress");
    const content = document.getElementById("content");

    let progress = 0;

    const interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            loadingText.textContent = `Loading ${progress}%`;
            progressBar.style.width = `${progress}%`;
        } else {
            clearInterval(interval);
            document.querySelector(".loading-container").style.display = "none";
            content.classList.remove("hidden");
        }
    }, 50);
});
