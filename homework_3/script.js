// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// const degreeNumber = number => number * number * number;

// console.log(degreeNumber(2) + degreeNumber(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// function calculateSalary(salary) {
//     salary = salary * 0.87;
//     console.log(`Размер заработной платы за вычетом налогов равен: ${salary}`);
// }

// let sizeSalary = Number(prompt('Введите ваш размер заработной платы'));
// if (sizeSalary < 0) {
//     console.log('Значение заработной платы задано неверно, введите положительное число')
// } else if (sizeSalary > 0) {
//     calculateSalary(sizeSalary);
// } else {
//     console.log('Значение заработной платы задано неверно, введите положительное число')
// }

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// function foundMax(firstNumber, secondNumber, thirdNumber) {
//     if (firstNumber > secondNumber || firstNumber === secondNumber) {
//         maxNumber = firstNumber;
//     } 
//     if (firstNumber > thirdNumber || firstNumber === thirdNumber) {
//         maxNumber = firstNumber;
//     } 
//     if (secondNumber > firstNumber || secondNumber === firstNumber) {
//         maxNumber = secondNumber;
//     } 
//     if (secondNumber > thirdNumber || secondNumber === thirdNumber) {
//         maxNumber = secondNumber;
//     }
//     if (thirdNumber > firstNumber || thirdNumber === firstNumber) {
//         maxNumber = thirdNumber;
//     }
//     if (thirdNumber > secondNumber || thirdNumber === secondNumber) {
//         maxNumber = thirdNumber;
//     }
//     return maxNumber;
// }

// console.log(foundMax(Number(prompt('Введите первое число')), Number(prompt('Введите второе число')), Number(prompt('Введите третье число'))));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function foundSum (num1, num2){
    return num1 + num2;
}

function foundDif (num1, num2){
    if (num1 > num2) {
        return num1 - num2;
    }
    else {
        return num2 - num1;
    }
}

function foundMulti (num1, num2){
    return num1 * num2;
}

function foundDiv (num1, num2){
    return num1 / num2;
}

console.log(foundSum(2,5), foundDif(2,5), foundMulti(2,5), foundDiv(2,5));