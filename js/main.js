// 1 Задание
let printName = (name) => console.log("Привет " + name);
printName("Артур");

// 2 Задание
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

function findMaxValue(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Максимально большое число: " + findMax(3, 7, 5));
console.log("Максимально большое число: " + findMaxValue(2, -5, 4));

// 3 Задание

let calculateAreaOfCircle = (radius) => (radius > 0) ? "Радиус равен: " + Math.PI * (radius ** 2) : "Радиус должен быть положительным числом";
console.log(calculateAreaOfCircle(3))

// 4 Задание
let multiplyNumbers = (array) => array.map(x => x ** 2);
console.log("Новый массив: " + multiplyNumbers([1, 2, 3, 4, 5]))

// 5 Задание
let isEven = (number) => number % 2 == 0;
console.log("Проверка четности числа: " + isEven(2));

// 6 Задание
const func = function(){
    console.log("Анонимная функция")
}

func();

// 7 Задание
let  performOperation = (a, b, callback) => callback(a, b);

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;

console.log(`Сложение: ${performOperation(2, 5, add)}`);
console.log(`Вычитание: ${performOperation(2, 5, substract)}`);
console.log(`Умножение: ${performOperation(2, 5, multiply)}`);

// ПЛАНИРОВАНИЕ ФУНКЦИИ
// let greet = () => console.log("Hello World");
// setTimeout(greet, 2000);

let greet = (name) => console.log("Привет, " + name);
setTimeout(() => {greet('Алекс');}, 3000);

let printNumbers = (start, end) => (start <= end) ? console.log(start) : clearInterval(intervalId);

let start = 1;
let end = 5;

const intervalId = setInterval(() => {
    printNumbers(start, end);
    start++;
}, 1000);