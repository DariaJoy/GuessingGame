const gameBotFunction = function () {
    const randomGenerate = parseInt((Math.random() * 100) + 1);    

    let mysteryNumber = randomGenerate;  
    console.log(mysteryNumber); 

    const maxTryCount = 3;	

    const loop = (tryCount = 1) => {
        const userAnswer = prompt('Угадай число от 1 до 100! Для выхода нажмите q');

        if (userAnswer === "q") {
            alert("Вы завершили игру.");
            return;
        }

        if (isNaN(userAnswer) || !isFinite(userAnswer) || userAnswer.trim() === "") {
            alert("Введите корректное число!");
            loop(tryCount);
            return;
        }
		
        const userAnswerNum = +userAnswer;

        if (userAnswerNum === mysteryNumber) {
            if (confirm(`Поздравляю, Вы угадали! Использовано попыток: ${tryCount}. Хотите сыграть ещё раз?`)) {
                gameBotFunction(); 
            } else {
                alert("Спасибо за игру!");
            }
            return;
        } else if (userAnswerNum > mysteryNumber) {
            if (tryCount < maxTryCount) {
                alert(`Вы ввели слишком большое число. Попыток осталось: ${maxTryCount - tryCount}`);
                loop(tryCount + 1);
            } else {
                if (confirm(`Извините, Вы проиграли! :( Правильный ответ: ${mysteryNumber}. Хотите попробовать ещё раз?`)) {
                    gameBotFunction();  
                } else {
                    alert("Спасибо за игру!");
                }
            }
        } else if (userAnswerNum < mysteryNumber) {
            if (tryCount < maxTryCount) {
                alert(`Вы ввели слишком маленькое число. Попыток осталось: ${maxTryCount - tryCount}`);
                loop(tryCount + 1);
            } else {
                if (confirm(`Извините, Вы проиграли! :( Правильный ответ: ${mysteryNumber}. Хотите попробовать ещё раз?`)) {
                    gameBotFunction();  
                } else {
                    alert("Спасибо за игру!");
                }
            }
        }
    };

    loop(); 
}

gameBotFunction();