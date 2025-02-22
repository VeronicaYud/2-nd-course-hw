function getRandomInt(min, max)  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function simpleMath() {
    let number1 = getRandomInt(1, 100);
    let number2 = getRandomInt(1, 100);
    let oper = getRandomInt(0, 3); // 0+, 1-, 2*, 3/
    const operSign = ["+", "-", "*", ":"];
    let result;
    switch (oper) {
        case 0:
            result = number1 + number2;
            break;
        case 1:
            result = number1 - number2;
            break;
        case 2:
            result = number1 * number2;
            break;
        case 3:
            result = number1 / number2;
               
    }

    let userNumber = prompt(`Решите задачку: ${number1} ${operSign[oper]} ${number2}`);
    if(userNumber == result) {
        alert('Верно');
    } else {
        alert('Ошибка');
    }
}

