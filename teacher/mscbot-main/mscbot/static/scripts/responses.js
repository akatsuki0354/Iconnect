

function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    if (input == "bakit ka absent") {
        return "Kase po meron po ako lagnat";
    } else if (input == "ahh ok pagaling ka") {
        return "thank you po";
    } else if (input == "your welcome") {
        return "good bye";
    } else if (input == "bakit") {
        return "abesnt po ako nga yun";
    }

    if (input == "generate number") {
        let randomNum = Math.floor(Math.random() * 10) + 1;
        if (randomNum <= 5) {
        return "The number is less than or equal to 5.";
        } else {
        return "The number is greater than 5.";
        }
    }

    // Simple responses
    if (input == "hello") {
        return "Hi";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

   
}