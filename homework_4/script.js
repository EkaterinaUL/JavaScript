// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let number = 0; number < 11; number++) {
//     if (number % 2 === 0) {
//         console.log(`${number} - четное число`);
//     } else {
//         console.log(`${number} - нечетное число`);
//     }
    
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arrayNumber = [1, 2, 3, 4, 5, 6, 7];
// const newFirstArray = arrayNumber.slice(0,3);
// const newSecondArray = arrayNumber.slice(5,7);
// for (let i = 0; i < newSecondArray.length; i++) newFirstArray.push(newSecondArray[i]);
// console.log(newFirstArray);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const arr = [];
// let size = 5;
// for (let i = 0; i < size; i++) arr.push(Math.floor(Math.random()*10));

// let sum = 0;
// let result = 'В массиве нет числа 3';
// let minElement = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (arr[i] < minElement) minElement = arr[i];
//     if (arr[i] === 3) result = 'В массиве есть число 3';
// }

// console.log(arr);
// console.log(`Сумма элементов массива равна: ${sum}`);
// console.log(`Минимальное число в массиве: ${minElement}`);
// console.log(result);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let stringX = 'x';
for (let i = 0; i < 21; i++) {
    console.log(stringX);
    stringX  += 'x';
    
}