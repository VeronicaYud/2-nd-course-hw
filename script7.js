// задание 1
let str = "js";
console.log(str.toUpperCase());

// задание 2
console.log("task2");
function fruits(arr, s) {
    return arr.filter(fruit => fruit.toLowerCase().startsWith(s.toLowerCase()));
}
console.log(fruits(["Апельсин", "Яблоко", "Груша", "Арбуз"], "А"));

// задание 3
console.log("task3");
let number = 32.58884;
console.log( Math.floor(number));
console.log( Math.ceil(number));
console.log( Math.round(number));

// задание 4
console.log("task4");
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// задание 5
console.log("task5");
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}
let number5 = getRandom(1, 10);
console.log(number5);

// задание 6
console.log("task6");
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}
function number6(a) {
    const array = [];
    for(let i = 0; i < a / 2; i++) {
        array.push(getRandom(0, a));
    }
    return array;
}
console.log(number6(8));
 

 // задание 7
 console.log("task7");
 function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}
console.log(getRandom(7, 100));
 

 // задание 8
 console.log("task8");
 let currentDate = new Date();
 console.log(currentDate);

 // задание 9
 console.log("task9");
 let currentDate9 = new Date();
 console.log(+currentDate9);
 let days73 = 73 * 24 * 60 * 60 * 1000;
 let searchDate = +currentDate9 + days73;
 let date73 = new Date(searchDate);
 
console.log(date73);

currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// задание 10
console.log("task10");
 const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
 const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
 
 let myDate = new Date();
 let fullDate = "Сегодня: " + myDate.getDate() + " " + month[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()] + ", " + myDate.getHours() + ":" +  myDate.getMinutes() + ":" + myDate.getSeconds(); 
 console.log(fullDate);





