
// задание 1
let password = 'пароль';
let result = prompt("Введите пероль");
if (password === result) {
    console.log("Пароль введен верно"); 
} else {
    console.log("Пароль введен неправильно");
}
    

// задание 2
let c = 5;
if (c >= 0 && c <= 10) {
    console.log("Верно")
} else {
    console.log("Неверно")  
}


// зедение 3
let d = 5;
let e = 7;
if (d > 100 || e > 100) {
    console.log("Верно"); 
} else {
    console.log("Неверно");
}


//  задание 4
let a = '2';
let b = '3';
console.log( parseInt(a) + parseInt(b)) ;
console.log( +a + +b) ;


// задание 5
 var monthNumber = 12;
 switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима'); 
        break;
    case 3:
    case 4:    
    case 5:
        console.log('Весна'); 
        break;   
    case 6:
    case 7:    
    case 8:
        console.log('Лето'); 
        break;   
    case 9:
    case 10:    
    case 11:
        console.log('Осень'); 
        break; 
    default: 
        console.log('неправильный номер месяца')
}


// задание 2.1
let a = prompt("Пожалуйста, введите любое число");
console.log(parseInt(a));
if (parseInt(a) === NaN)

if (a % 2 === 0) {
    console.log("even");
}  else {
    console.log("odd"); 
}


//  задание 2.2
const platform = navigator.platform;
let clientOS;
if (platform.includes("Mac")) {
    clientOS = 0;
} else {
    clientOS = 1;
}
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке'); 
}

 

