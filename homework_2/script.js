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
let day = Math.floor(Math.random()*31) + 1;
if (day < 1 || day > 31) {
    console.log('Число введено некорректно, введите любое число от 1 до 31');
} else if (day > 0 && day < 11) {
    console.log('Первая декада');
} else if (day < 21 && day > 10) {
    console.log('Вторая декада');
} else {
    console.log('Третья декада');
}
console.log(day);

//Задание 4
// let userNumber = parseInt(prompt('Введите любое положительное целое число'));
// let unitUserNumber = userNumber % 10;
// let decadeUserNumber = parseInt((userNumber / 10) % 10);
// let hundredUserNumber = parseInt((userNumber / 100) % 10);
// console.log(`В числе ${userNumber} количество сотен: ${hundredUserNumber}, десятков: ${decadeUserNumber}, единиц: ${unitUserNumber}`);