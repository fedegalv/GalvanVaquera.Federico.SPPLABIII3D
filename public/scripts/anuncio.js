
function Anuncio (id, titulo, transaccion, descripcion, precio){
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = parseInt(precio);
    }

export default function Anuncio_Auto (id, titulo, transaccion, descripcion, precio, num_puertas, num_KMs, potencia){
    
    //PROPiEDAD QUE APUNTA CONSTRUCTOR anuncio
    this.ClasePadre = Anuncio;
    //SE EJECUTA EL CTR Y PASA VALORES
    this.ClasePadre(id, titulo, transaccion, descripcion, parseInt(precio));
    this.num_puertas = num_puertas;
    this.num_KMS = num_KMs;
    this.potencia = potencia;
}
Anuncio_Auto.prototype = new Anuncio();
export function ObtenerAnuncio_Auto( proximoId, formAuto){
    const anuncio = new Anuncio_Auto(
        proximoId,
        formAuto.titulo.value,
        formAuto.transaccion.value,
        formAuto.descripcion.value,
        formAuto.precio.value,
        formAuto.puertas.value,
        formAuto.Kms.value,
        formAuto.potencia.value
        );
    return anuncio;      
}