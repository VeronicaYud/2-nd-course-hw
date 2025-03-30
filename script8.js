// задание 1 
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 let arr;
 arr = people.sort((a, b) => {
    if(a.age < b.age) {
         return -1;
    }
    if (a.age > b.age)  {
        return 1;
    } 
  })
 console.log(arr);

 
 // задание 2

function isPositive(a) {
    return a > 0;
}
function isMale(b) {
    return b.gender == 'male';
}
function filter(arr, callback) {
    let array = [];
    arr.forEach(el => {
        if(callback(el)) {
            array.push(el);
        }
    });
    return array;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));

// задание 3
const timer = () => {
    const id1 = setInterval(() => {
        console.log(new Date);
    }, 3000);

    setTimeout(() => {
        clearInterval(id1); 
        console.log('30 секунд прошло');
    }, 30000)
};

timer();

// задание 4
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {  cb()  }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() =>  sayHi('Глеб') );