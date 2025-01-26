// задание 1
function min(a, b) {
    if(a < b) {
        return a;
    } else {
        return b;
    }
}
alert(min(8, 4)); 
  
  // задание 2
function even(a) {
    if(a % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
} 
alert(even(4));

// задание 3
function number(a) {
    console.log(a * a);
}
function task3(a) {
    return a * a;
}
let result = task3(5);

// задание 4
function task4() {
    let age = prompt("Сколько Вам лет?");
    if(age < 0) {
        console.log("Вы ввели неправильное значение");
    } else if(age < 12) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
}
task4();
 
// задание 5
function task5(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Одно или оба значения не являются числом";
    } else {
        return a * b;
    }
}
alert(task5(8, 5));

// задание 6
function task6() {
    let number = prompt("Введите число");
    if(isNaN(number)) {
        return "Переданный параметр не является числом";
    } else {
        let number3 = number ** 3;
        return `${number} в кубе равняется ${number3}`;
    }
}
alert(task6());

// задание 7
let getAreaExt = radius => Math.PI * radius ** 2;
let getPerimeterExt = radius => 2 * Math.PI * radius;

const circle1 = {
    radius: 5,
    getArea() {
        return getAreaExt(this.radius);
    },
    getPerimeter() {
        return getPerimeterExt(this.radius);
    }
}

const circle2 = {
    radius: 8,
    getArea() {
        return getAreaExt(this.radius);
    },
    getPerimeter() {
        return getPerimeterExt(this.radius);
    }
}

alert("Площадь круга1 равна " + circle1.getArea());
alert("Периметр круга1 равен " + circle1.getPerimeter());
alert("Площадь круга2 равна " + circle2.getArea());
alert("Периметр круга2 равен " + circle2.getPerimeter());