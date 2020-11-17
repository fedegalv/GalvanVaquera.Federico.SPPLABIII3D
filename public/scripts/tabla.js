import { traerAnuncios } from "../scripts/AxiosABM.js";
import { listaAnuncio } from "../scripts/scripts.js"
export default function crearTabla(lista) {
    //console.log(lista);
    const tabla = document.createElement('table');

    tabla.appendChild(crearCabecera(lista[0]));

    tabla.appendChild(crearCuerpoTabla(lista));

    return tabla;
}

function crearCabecera(item) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    for (const key in item) {
        if (key != "ClasePadre") {
            const th = document.createElement('th');
            const texto = document.createTextNode(key);
            th.className = key;
            th.appendChild(texto);
            tr.appendChild(th);
        }

    }
    thead.appendChild(tr);
    return thead;
}

function crearCuerpoTabla(lista) {
    const tbody = document.createElement('tbody');
    lista.forEach(element => {
        const tr = document.createElement('tr');
        for (const key in element) {
            if (key != "ClasePadre") {
                const td = document.createElement('td');
                const texto = document.createTextNode(element[key]);
                td.className = key;
                td.appendChild(texto);
                tr.appendChild(td);
            }
        }
        // CHECK IF ELEMENT TIENE PROP ID
        if (element.hasOwnProperty('id')) {
            // SE SETEA UN ATTRIBUTO data-id QUE CONTIENE la PROPieDAD id de element
            tr.setAttribute('data-id', element['id']);
            //tr.dataset.id = element['id'];
        }
        agregarManejadorTR(tr);
        tbody.appendChild(tr);
    });
    return tbody;
}

//FUNCION QUE AGREGA UN EVENT LISTENER AL TR Y PARA OBTENER ID
function agregarManejadorTR(tr) {
    tr.addEventListener('click', function (e) {
        //alert(e.target.getAttribute('data-id'));
        //alert(e.target.dataset.id);
        //alert(e.target.parentNode.dataset.id);
        document.getElementById('btnEliminar').className = "mostrar-boton btn btn-outline-primary";
        document.getElementById('btnModificar').className = "mostrar-boton btn btn-outline-primary";
        document.getElementById('btnCancelar').className = "mostrar-boton btn btn-outline-primary";
        llenarFormulario(e.target.parentNode.dataset.id);

    })
}

function llenarFormulario(id) {

    listaAnuncio.forEach(element => {
        //console.log(element);
        if (element['id'] == id) {
            //console.log(element);
            let form = document.forms[0];
            form.id.value = element['id'];
            form.titulo.value = element['titulo'];
            form.transaccion.value = element['transaccion'];
            form.descripcion.value = element['descripcion'];
            form.precio.value = element['precio'];
            form.Kms.value = element['num_KMS'];
            form.puertas.value = element['num_puertas'];
            form.potencia.value = element['potencia'];
        }
    });

}