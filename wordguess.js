function getRandomInt(min, max)  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function wordGuess() {
    const arr = ["камень", "ножницы", "бумага"];
    let wordIndex = getRandomInt(0, 2);
    let word = arr[wordIndex];
    let userWord;
    let userIndex;
    do {
        userWord = prompt("Введите одно из слов: камень, ножницы, бумага.");
        if (userWord != null) {
            console.log(userWord);
            userWord = userWord.toLowerCase();
            userIndex = arr.indexOf(userWord);
            if (userIndex == -1) {
                alert("Вы ввели неправильное слово. Попробуйте еще раз.");
            } 
        } else {
            userIndex = -1;
        }
    } while (userIndex == -1); 
    
    let result = 'dont know';
    
    if ((wordIndex == userIndex - 1) || (wordIndex == 2 && userIndex == 0)) {
        result = "компьютер победил!";
    } else {
        result = "компьютер проиграл";
    }
    if (wordIndex == userIndex) {
        result = "ничья";
    }

   alert(`Компьютер: ${word.toUpperCase()}, Вы: ${userWord.toUpperCase()}.\nРезультат игры: ${result.toUpperCase()}`);     
    
}