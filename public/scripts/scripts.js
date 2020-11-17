
import crearTabla from "../scripts/tabla.js";
import inicializarBotones from "../scripts/abm.js";
import {traerAnuncios} from "../scripts/AxiosABM.js"
import {llenarSelect, filtrarPrecio} from "../scripts/filtros.js"
import {agregarEventListenerCheckbox} from "../scripts/checkboxFilter.js"
import {traerAnunciosFetch} from "../scripts/apiFetch.js";
//const btnTabla;
export let listaAnuncio;
let divTabla;

export let filtroPrecio = document.getElementById("filtroPrecio");

window.addEventListener('load', inicializarManejadores);


async function inicializarManejadores() {
  //listaAnuncio = await traerAnuncios();
  listaAnuncio = await traerAnunciosFetch();
  //console.log(listaAnuncio);
  //console.log(listaPersonas);
  divTabla = document.getElementById('divTabla');

  //CARGA LA TABLA AL CARGAR LA PAGINA SI ESTA EXISTE
  actualizarLista();
  llenarSelect();


  inicializarBotones();
  agregarEventListenerCheckbox();
  filtroPrecio.value = "N/A";
}
function obtenerId() {
  // RETORNO LA ID GuARDADA EN nextId SI ES QUE EXISTE SI NO 2000
  return JSON.parse(localStorage.getItem('nextId')) || 2000;

}


//CAMBIAR
export function guardarDatos() {
  localStorage.setItem('anuncios', JSON.stringify(listaAnuncio));
  localStorage.setItem('nextId', proximoId);
}

export function actualizarLista() {
  //VACIA
  divTabla.innerHTML = "";
  //CREA ELEMENTO DE IMAGEN
  const imgSource = document.createElement('img');
  // SE AGREGA EL SRC
  imgSource.src = "../materials/208.gif";
  //SE LO APENDEA A DIVTABLA
  divTabla.appendChild(imgSource);

  //TIMEOUT DE 3 SEG, LUEGO LIMPIA DE NUEVO Y CARGA LA TABLA
  setTimeout(() => {
    divTabla.innerHTML = "";
    //console.log(listaAnuncio);
    divTabla.appendChild(crearTabla(listaAnuncio));
    //filtroPrecio.value = "N/A";
    //filtroPrecio.value = filtrarPrecio(listaAnuncio);
  }, 1000);
}


