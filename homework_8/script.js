// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

window.addEventListener('DOMContentLoaded', function() {
    console.log('Все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', function() {
    console.log('Все ресурсы страницы прогрузились');
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener('click', function(e) {
    if (e.target.className == 'super_element') {
        console.log(`Класс "super_element" присутствует в элементе ${e.target.tagName}`);
        console.log(e.target.tagName.toLowerCase());
    } else {
        console.log(`Класс "super_element" в элементе ${e.target.tagName} отсутствует`);
        console.log(e.target.tagName.toLowerCase());
    };
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textareaEl = document.querySelector('textarea');
textareaEl.addEventListener('mouseover', function() {
    console.log('Вы навели на textarea');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() == 'button') console.log(e.target.textContent);
})

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Потому, что при наступлении события обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, затем выше и так далее, вверх по цепочке вложенности. Это всплытие. В 5 задание EventTarget является Element, поэтому сначала мы видим текст из этого задания. А в 3 задание - Document.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
// const liEl = document.querySelectorAll('li');
// console.log(liEl);
// for (let index = 0; index < liEl.length; index++) {
//     if (index % 2 != 0) liEl[index].style.backgroundColor = 'red';    
// }
