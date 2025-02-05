// задание 1

const numbs = [1, 5, 4, 10, 0, 3];
for     (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) break;
}

// задание 2
console.log('task 2');
const numbers = [1, 5, 4, 10, 0, 4];
let index;
/*
for(i = 0; i < numbers.length; i++) {
    if (numbers[i] == 4) {
      index  = i; 
      break;
    }
}
*/
index = numbers.indexOf(4);
console.log(index);

// задание 3
console.log('task 3');
const numbs3 = [1, 3, 5, 10, 20];
let joinedNumbs3 = numbs3.join(' '); 
console.log(joinedNumbs3);

//  задание 4
console.log('task 4');
 const arr = [];

for(let j = 0; j < 3; j++) {
    const arr1 = [];
    for(let i = 0; i < 3; i++) {
        arr1.push(1);
    }
    arr.push(arr1);
}
console.log(arr);

//задание 5
console.log('task 5');
 const numbs5 = [1, 1, 1];
 numbs5.push(2, 2, 2);
 console.log(numbs5);

 // задание 6
 console.log('task 6');
 let numbs6 = [9, 8, 7, 'a', 6, 5];
numbs6.sort();
const numbers6 = numbs6.filter(a => a != 'a');

console.log(numbers6);
   
  
// заданиеи 7
console.log('task 7');
const numbs7 = [9, 8, 7, 6, 5];
let userNumber = prompt('Угадайте число');
userNumber = Number(userNumber);
let isFound = numbs7.includes(userNumber);
console.log(isFound);
if (isFound == true) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// задание 8
console.log('task 8');
const str = "abcdef";
const arrey = str.split('');
const rev = arrey.reverse();
console.log(rev);

//  задание 9
console.log('task 9');
const numbs8 = [
    [1, 2, 3],
    [4, 5, 6]
];
const allNumbs = [...numbs8[0], ...numbs8[1]];
console.log(allNumbs);

// задание 10
console.log('task 10');
const numbs10 = [6, 7, 3, 5, 2, 1];

for(i = 0; i < numbs10.length; i++) {
  if (i < numbs10.length - 1) {
    let sum = numbs10[i]  + numbs10[i + 1];
    console.log(sum);
  }
}

// задание 11
console.log('task 11');

 function numbs11(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] **2; 
    }
    return arr;
 }

 const arr11 = [6, 7, 3, 5, 2, 1];
 console.log(numbs11(arr11));


function numbs11(arr) {
    const newArr = arr.map(b => b **2);
    return newArr;
 }
 console.log(numbs11([6, 7, 3, 5, 2, 1]));

 // задание 12
 console.log('task 12');
 function str12(strArr) {
    const newStr = strArr.map(c => c.length);
    return newStr;
 }
const strArr12 = ["части", "тела", "голова", "туловище"];
console.log(str12(strArr12));

// задание 13
console.log('task 13');
function numbers13(numb13) {
    const newNumb13 = numb13.filter(d => d < 0 );
    return newNumb13;
}
const numbArr13 = [5, -1, 8, 13, -25, 40];
console.log(numbers13(numbArr13));

// задание 14 
console.log('task 14');
function getRandomInt(min, max)  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let numbers14 = [];
for(i = 0; i < 10; i++) {
    const number = getRandomInt(1, 10); 
    numbers14.push(number);
}
console.log(numbers14);

numbers14 = numbers14.filter(e => e % 2 == 0);
console.log(numbers14);

// задание 15
console.log('task 15');
function getRandomInt(min, max)  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let numbers15 = [];
for(i = 0; i < 10; i++) {
    const number = getRandomInt(1, 10); 
    numbers15.push(number);
}
console.log(numbers15); 
const numbs15 = numbers15.reduce((sum, number) => sum + number / numbers15.length, 0);
console.log(numbs15); 
