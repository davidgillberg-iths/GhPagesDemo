document.addEventListener("DOMContentLoaded", () => {
    let colorPicker = document.getElementById("colorPicker");
    let addColorButton = document.getElementById("addColor");
    let colorPalette = document.getElementById("colorPalette");

    // Funktion för att lägga till en färg
    addColorButton.addEventListener("click", () => {
        let selectedColor = colorPicker.value;
        let colorBox = document.createElement("div");

        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = selectedColor;

        // Ta bort färgen vid klick
        colorBox.addEventListener("click", () => {
            colorBox.remove();
        });

        colorPalette.appendChild(colorBox);
    });

    // Datumhantering
    let dateElement = document.getElementById("currentDate");
    let today = new Date();
    dateElement.textContent = today.toLocaleDateString("sv-SE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    // Citatlista
    let quotes = [
        "Den som väntar på något gott väntar aldrig för länge.",
        "Gör ditt bästa och lite till.",
        "Framtiden börjar idag, inte imorgon.",
        "Livet är vad du gör det till."
    ];

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    let quoteElement = document.getElementById("quote");
    quoteElement.textContent = getRandomQuote();

    document.getElementById("newQuote").addEventListener("click", () => {
        quoteElement.textContent = getRandomQuote();
    });
});
