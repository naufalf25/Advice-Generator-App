document.addEventListener("DOMContentLoaded", () => {
    const idAdvice = document.getElementById("id");
    const adviceUpdate = document.getElementById("advice");

    async function updateAdvice() {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        if (response.ok) {
            adviceUpdate.textContent = data.slip.advice;
            idAdvice.textContent = data.slip.id;
        } else {
            adviceUpdate.textContent = "An error occured";
            console.log(data);
        }
    }
    updateAdvice();
});