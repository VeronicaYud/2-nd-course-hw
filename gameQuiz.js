function gameQuiz() {
    const quiz = [
        { 
            question: "Сколько цветов у радуги?",
            options: ["1.пять", "2.восемь", "3.семь" ],
            correctAnswer: 3
        },
        {
            question: "Столица Японии",
            options: ["1. Осака ", "2. Киото", "3.Токио"],
            correctAnswer: 3
        },
        {   question: "Самая ядовитая змея в мире",
            options: ["1. Эфа", "2. Королевская кобра", "3. Тайпан"],
            correctAnswer: 3
        }
    ];
    let result = 0;
    for(i = 0; i < quiz.length; i++) {
        let answer = prompt(quiz[i].question + '\n' + "Варианты ответов: " + quiz[i].options.join(' '), "введите номер правильного ответа");
        if(answer == quiz[i].correctAnswer) {
            result = result + 1;
        }
    }
    
    alert(`Поздравляем! Вы ответили правильно на ${result} вопрос${result == 1 ? '' : 'a'}`);
}
