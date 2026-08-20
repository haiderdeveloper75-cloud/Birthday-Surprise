function openSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.classList.remove("hidden");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();
}


function openGift() {

    const message = document.getElementById("loveMessage");

    message.classList.remove("hidden");

    document.getElementById("giftText").innerHTML =
        "Your surprise is from my heart ❤️";

    createConfetti();

    setTimeout(() => {

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);
}


function openLetter() {

    const letter = document.getElementById("letter");

    letter.style.transform = "translateY(-80px)";

    letter.style.zIndex = "10";

    createConfetti();

}


function blowCandles() {

    const flames = document.querySelectorAll(".flame");

    flames.forEach(flame => {

        flame.style.display = "none";

    });

    document.getElementById("wishMessage").innerHTML =
        "✨ May your wish come true. Happy Birthday ❤️ ✨";

    createConfetti();

}


/* Confetti */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.background =
            ["#ff5fa2", "#ffd166", "#a855f7", "#ffffff"][Math.floor(Math.random() * 4)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";

        confetti.style.borderRadius = "2px";

        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 3000;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {

            confetti.remove();

        }, duration);

    }

}