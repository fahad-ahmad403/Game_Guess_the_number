let num = Math.floor(Math.random() * 10) + 1;
let total_attempts = 3;
let attempts = 0;
let Guesses = [];

function guess_btn() {

    const guess_input = document.getElementById("input");
    const input_element = parseInt(guess_input.value);
    const display_result = document.getElementById("input_result");
    const guesses_display = document.getElementById("previous_guesses");
    const btn = document.getElementById("btn");

    if (input_element >= 1 && input_element <= 10) {
        Guesses.push(input_element);
        guesses_display.textContent = "Previous guesses: " + Guesses.join(", ");
    }

    else {
        display_result.textContent = "Please enter a valid number.";
        return;
    }

    attempts++;

    if (input_element === num) {
        display_result.textContent = "Congratulations! You entered the correct number.";
        guess_input.disabled = true;
        btn.onclick = false;
        btn.classList.add("Active");
        return;
    }

    else if (input_element >= 11) {
        display_result.textContent = `Please enter the number which is less than 10 & equals to 10. Attempts left : ${total_attempts - attempts}`;
    }

    else if (input_element < num) {
        display_result.textContent = `The entered number is less than given number. Attempts left : ${total_attempts - attempts}`;
    }

    else if (input_element > num) {
        display_result.textContent = `The entered number is greater than given number. Attempts left : ${total_attempts - attempts}`;
    }

    if (total_attempts <= attempts) {
        display_result.textContent = `You are ran out of attempts. Game Over! The number is ${num}.`
        guess_input.disabled = true;
        btn.onclick = false;
        btn.classList.add("Active");
        return;
    }
    guess_input.value = "";
}

const guess_input = document.getElementById("input");
const btn = document.getElementById("btn");

guess_input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        guess_btn();
    }
});