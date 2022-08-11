input1.addEventListener('keypress', sumznac);
input2.addEventListener('keypress', sumznac);
input3.addEventListener('keypress', sumznac);
/*addEventListener обработчик, который как я понял, прослушивает действия в поле input1(n),
 при определнных дествиях (нажатие кнопки keyup, отпускания кнопки keydown, или ввода input и тд 'клик мышки, наведения и тд' )
 и выполняет фунцию sumznac при наструпления дествия (keyup) */
function sumznac() {
let obn = `Верстка<br>${input1.value}<br>`+
`<br>Менеджмент <br><br>${input2.value}<br>` + 
`<br>Программинг <br><br>${input3.value}<br>`;

$(".jqte-test").jqteVal(obn);
    };