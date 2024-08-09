let num = Math.floor(Math.random() *10) +1;
let total_attempts = 3;
let attempts = 0;

function guess_btn(){

    const guess_input = document.getElementById("input");
    const input_element = parseInt(guess_input.value);
    const display_result = document.getElementById("input_result");

    
    if(input_element === num){
        display_result.textContent = "Congratulations! You entered the correct number.";
        Break;
    }
    else if(input_element >= 11) {
        display_result.textContent = `Please enter the number which is less than 10 & equals to 10. Attempts left : ${total_attempts - attempts}`;
    }
    else if(input_element < num) {
        display_result.textContent = `The entered number is less than given number. Attempts left : ${total_attempts - attempts}`;
    }
    else if(input_element > num) {
        display_result.textContent = `The entered number is greater than given number. Attempts left : ${total_attempts - attempts}`;
    }
    attempts++;

    if (total_attempts < attempts) {
        display_result.textContent = `You are ran out of attempts. Game Over! The number is ${num}.`
    }
}