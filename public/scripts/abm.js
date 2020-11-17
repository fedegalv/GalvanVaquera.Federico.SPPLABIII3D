let formAnuncio;
import { ObtenerAnuncio_Auto } from "../scripts/anuncio.js";
import { listaAnuncio, guardarDatos, actualizarLista, } from "./scripts.js";
import { altaAnuncio, modificarAnuncio, bajaAnuncio } from "../scripts/AxiosABM.js";
import {bajaAnunciFetch} from "../scripts/apiFetch.js"
export default function inicializarBotones() {

    //BOTON SUBMIT
    const btnAlta = document.getElementById('btnAlta');
    btnAlta.addEventListener('click', function () {

        formAnuncio = document.forms[0];
        let lastId = listaAnuncio[listaAnuncio.length - 1].id;
        const nuevoAnuncio = ObtenerAnuncio_Auto(lastId + 1, formAnuncio);
        if (nuevoAnuncio) {
            altaAnuncio(nuevoAnuncio);
            formAnuncio.reset();
            divTabla.innerHTML = "";
            actualizarLista();
        }

    });

    //BOTON MODIFICAR
    const btnModificar = document.getElementById('btnModificar');
    btnModificar.addEventListener('click', function (e) {
        formAnuncio = document.forms[0];
        //console.log(listaAnuncio);
        //console.log(listaAnuncio.length);

        for (let i = 0; i < listaAnuncio.length; i++) {
            if (listaAnuncio[i].id == formAnuncio.id.value) {
                const anuncioModificado = ObtenerAnuncio_Auto(formAnuncio.id.value, formAnuncio);
                modificarAnuncio(anuncioModificado);
                //console.log("PERSONA MODIFICADA");
                formAnuncio.reset();
                actualizarLista();
            }
        }

    });

    //BOTON ELIMINAR
    const btnEliminar = document.getElementById('btnEliminar');
    btnEliminar.addEventListener('click', function () {
        formAnuncio = document.forms[0];
        for (let i = 0; i < listaAnuncio.length; i++) {
            if (listaAnuncio[i].id == formAnuncio.id.value) {
                //bajaAnuncio(formAnuncio.id.value);
                bajaAnunciFetch(formAnuncio.id.value);
                formAnuncio.reset();
                actualizarLista();
            }
        }
    });

    // BTN CANCELAR
    const btnCancelar = document.getElementById('btnCancelar');
    btnCancelar.addEventListener('click', function () {
        document.getElementById("formulario").reset(); 
        ocultarBotones();
    })




}

function ocultarBotones() {
    document.getElementById('btnEliminar').className = "btn-opcional";
    document.getElementById('btnModificar').className = "btn-opcional";
    document.getElementById('btnCancelar').className = "btn-opcional";
}