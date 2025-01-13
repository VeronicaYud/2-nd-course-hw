// задание 1
for (let i = 1; i < 3; i++) {
    console.log("Привет!");
}
// задание 2
for (let i = 1; i < 5; i++) {
    console.log(i);
}
// задание 3
for (let i = 7; i < 22; i++) {
    console.log(i);
}
// задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}
// задание 5
let num = 0;
let n = 1000;
while( n > 50) {
    n = n / 2; 
    num++;
}
console.log(n);
console.log(num);
//  задание 6
let ff = 1;
for(let i = 1; i <= 31; i++) {
    if(i % 7 === ff) {
        console.log(`Сегодня пятница, ${i}-е число, необходимо подготовить отчет.`)
    }
}
// задание 2.1
let iterations = 0;
let k = 100;
while( k > 0) {
    k = k - 7;
    iterations++;
}
console.log(k);
console.log(iterations);
// задание 2.2
let months = ["Январь 1", "Февраль 2", "Март 3", "Апрель 4", "Май 5", "Июнь 6", "Июль 6", "Август 8", "Сентябрь 9", "Октябрь 10", "Ноябрь 11", "Декабрь 12"];
for ( let i = 0; i <= 11; i++ ) {
    alert( months[i]);
}
// задание 2.3
const object = {
    название : "Мессия Дюны",
    автор : "Френк Герберт",
    год_издаания : 2022,
    жанр : "фантастика"
}
for(let key in object) {
    console.log( `${key} : ${object[key]}`);
}
// задание 2.4
let min = 100;
let numbers = [5, 1, 8, 6, 3, 2, 7, 9, 4, -1];
    
for(i = 0; i <= 9; i++) {
    if(numbers[i] < min) {
        min = numbers[i];
    }
    console.log(numbers[i]);
}
console.log(`минимальное число ${min}`);




