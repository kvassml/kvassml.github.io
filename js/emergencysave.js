window.onbeforeunload = function () {
  localStorage.setItem('comment-save',(input4.value));
}

/*onbeforeunload - обработчик, который инициирует собитие (условие функции),
 а именно записывает в localStorage значение value поля input4 в ключ comment-save */
window.onload = function () {
 $(".jqte-test").jqteVal(localStorage.getItem('comment-save'));
}
/*onload - обработчик, который инициирует собитие (условие функции),
 а именно записывает в приравние значение value в поле input 4 к значению ключа localStorage.getItem('comment-save'); */

 /* подсказка window.onbeforeunload запускает код до закрытия страницы. Вы всегда можете изменить событие, например

document.getElementById('comment').input
должен сохранять значение каждый раз, когда пользователь что-то набирает. Следующая строка сохранит значение textarea в localStorage называется comment-save

Блок кода будет работать при загрузке страницы. Он найдет #comment поле #comment и установит его значение в сохраненный комментарий */
