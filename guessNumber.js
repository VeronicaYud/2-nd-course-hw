function getRandomInt(min, max)  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

function guessNumberGame() {
    let number = getRandomInt(1, 100);
    let userNumber;

    do {
        userNumber = prompt("Я загадала число. Угадай его!\nВведи число:");
        if (userNumber == null) {
            alert("Конец игры");
            return;
        }
        if (number > userNumber) {
            alert("Ваше число меньше, чем загаданное");
        } else if (number < userNumber) {
            alert("Ваше число больше, чем загаданное");
        } else {
            alert("Вы угадали!");
        }
    } while(number != userNumber);

    alert("Конец игры");
}

