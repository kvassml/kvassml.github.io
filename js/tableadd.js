/*document.createElement(tag)   - создание нового элемента 

let tr = document.createElement('tr')

document.body.append(div). - для вставки элемента 

<br>node.after(...nodes or strings) –- вставляет узлы или строки после node, (под nodes понимается элемент (например tr)) */
function onchek(){ // кнопка показать - переключение на of
    document.getElementById('stelsdiv').style.display='block';
    document.getElementById('open_but').style.display='none';
    document.getElementById('cloce_but').style.display='block';
        }
function ofchek(){ // кнопка off - переключение на on
    document.getElementById('stelsdiv').style.display='none';
    document.getElementById('cloce_but').style.display='none';
    document.getElementById('open_but').style.display='block';
}
function addelemets(){ // кнопка добавления элемента
   let tableadds = table.insertAdjacentHTML('beforeend','<tr>' +
    '<td><textarea id="textarea5" class="textarea5"/></textarea></td>'+
    '<td><input type="checkbox" name="enabled"></td>'+
    '</tr>');
}
