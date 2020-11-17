import { listaAnuncio, actualizarLista ,filtroPrecio} from "../scripts/scripts.js"
import crearTabla from "../scripts/tabla.js"

//GLOBALES
var transacciones = [];
let valorSeleccionado = 'Todos';

let select = document.getElementById("selectFiltros");

select.addEventListener('change', () => {
    
    
    filtroPrecio.value = "N/A";
    valorSeleccionado = select.options[select.selectedIndex].text;
    console.log(valorSeleccionado);
    console.log(valorSeleccionado);
    if (valorSeleccionado == 'Todos') {
        //console.log("Todos entro ahi");
        filtroPrecio.value = "N/A";
        divTabla.innerHTML = "";
        divTabla.appendChild(crearTabla(listaAnuncio));
    } else {
        var listaFiltrada = listaAnuncio.filter(anuncio => {
            return anuncio.transaccion === valorSeleccionado;
        });
        divTabla.innerHTML = "";
        
        divTabla.appendChild(crearTabla(listaFiltrada));
        if(valorSeleccionado != 'Permuta' ){
            filtroPrecio.value = filtrarPrecio(listaFiltrada);
        }

    }

});

export function llenarSelect() {
    var transacciones = Array.from(filtrarTransaccionesUnicas());
    //AGREGO OPCIONES AL SELECT, DE UN ARRAY CON VALORS UNICOS
    transacciones.forEach(transaccion => {
        var option = document.createElement("option");
        option.text = transaccion;
        option.value = transaccion;

        select.appendChild(option);
    });
}

export function filtrarTransaccionesUnicas() {
    listaAnuncio.forEach(anuncio => {
        transacciones.push(anuncio.transaccion);
    });
    var transaccionesUnicas = new Set(transacciones);
    //console.log(transaccionesUnicas);
    return transaccionesUnicas;
}

export function filtrarPrecio(lista) {
    //GUARDA EN ARRAY LOS PRECIOS DE ANUNCIO
    let listaPrecios = lista.map(anuncio => anuncio.precio);
    //SUMA LOS PRECIOS PARA CONSEGUIR TOTAL
    let sumaPrecios = listaPrecios.reduce((prev, actual) => {
        return prev + actual;
    });
    let promedio = sumaPrecios / listaPrecios.length;
    return promedio.toFixed(2);
}
