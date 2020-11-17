
var checkedArray = [];
export function agregarEventListenerCheckbox() {
    //console.log("entro checkbox");
    var checkboxElems = document.querySelectorAll("input[type='checkbox']");
    //console.log(checkboxElems);
    for (var i = 0; i < checkboxElems.length; i++) {
        checkboxElems[i].addEventListener("change", actualizarTablaCheckbox);
    }

}
//GUARDA EN ARRAY CHECKBOX QUE SON DESMARCADOS
function actualizarTablaCheckbox(e) {
    if (e.target.checked) {
        console.log("checked");
        //console.log(e.target.value);
        checkedArray.forEach(element => {
            if (element == e.target.value) {
                //console.log(element);
                var index = checkedArray.indexOf(e.target.value);
                mostrarElementos(element);
                checkedArray.splice(index, 1);
            }
        });
    }
    else {
        console.log("unchecked");
        checkedArray.push(e.target.value);
        //console.log(checkedArray);
        ocultarElementos(checkedArray);
    }

}
function mostrarElementos(claseIdentificacion) {
    var elementos = document.getElementsByClassName(claseIdentificacion);
    //console.log(elementos);
    for (let el of elementos) {

        el.style.display = 'table-cell';
        if ($(el).hasClass("hide")) {
            {
                el.style.display = 'table-cell';
            }

        }
    }
}
function ocultarElementos(lista) {
    //console.log(lista);
    lista.forEach(tableElement => {
        var elementos = document.getElementsByClassName(tableElement);
        for (let el of elementos) {
            el.style.display = 'none';
          
        };
    });
}
