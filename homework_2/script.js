//Задание 1
// let num1 = Number(prompt('Введите любое число, которое равно или меньше 1'));
// let num2 = Number(prompt('Введите любое число, которое равно или больше 3'));
// if (num1 === 1 ) {
//     console.log('Переменная num1 равна 1');
// } else if (num1 < 1) {
//     console.log('Переменная num1 меньше 1');
// }
// if (num2 === 3 ) {
//     console.log('Переменная num2 равна 3');
// } else if (num2 > 3) {
//     console.log('Переменная num2 больше 3');
// }

//Задание 2
// let test = true;
// (test === true) ? console.log('+++'): console.log('---');

//Задание 3
// let day = Number(prompt('Введите любое число от 1 до 31'));
// if (day < 1 || day > 31) {
//     console.log('Число введено некорректно, введите любое число от 1 до 31');
// }
// if (day > 0 && day < 11) {
//     console.log('Первая декада');
// }
// if (day < 21 && day > 10) {
//     console.log('Вторая декада');
// }
// if (day < 32 && day > 20) {
//     console.log('Третья декада');
// }

//Задание 4
let userNumber = Number(prompt('Введите любое положительное целое число'));
let unitUserNumber = userNumber % 10;
let decadeUserNumber = Math.floor((userNumber / 10) % 10);
let hundredUserNumber = Math.floor((userNumber / 100) % 10);
console.log(`В числе ${userNumber} количество сотен: ${hundredUserNumber}, десятков: ${decadeUserNumber}, единиц: ${unitUserNumber}`);