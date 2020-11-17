export async function traerAnuncios() {
    try {
        let res = await axios('http://localhost:3000/anuncios');
        //console.log(res.data);
        return res.data;
    } catch (error) {
        console.log("FALLO EL OBTENER ANUNCIO");
    }
};
// NO USADO, SE USA LO DE apiFetch
export async function altaAnuncio(nuevoAnuncio) {
    //ARCHIVO CONFIG QUE VA EN FETCH
    console.log(nuevoAnuncio);
    const config = {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        data: JSON.stringify(nuevoAnuncio) //PASAMOS COMO JSON STRING EL OBJETO
    }
    try {
        let res = await axios('http://localhost:3000/anuncios', config);
        console.log("Guardado con exito");
    }
    catch (error) {
        console.error(err.response.status, err.response.statusText);
    }
}

export async function modificarAnuncio(anuncioModificado) {

    let id = anuncioModificado.id;
    //ARCHIVO CONFIG
    const config = {
        method: "PUT",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        data: JSON.stringify(anuncioModificado) //PASAMOS COMO JSON STRING EL OBJETO
    }
    try {
        let res = await axios('http://localhost:3000/anuncios/'+id, config);
        console.log("ANUNCIO MODIFICADA");
    } catch (error) {
        console.log("ERROR");
        console.error(error.response.status, error.response.statusText);
    }
}
//NO USADO, SE USA LO DE apiFetch
export async function bajaAnuncio(id) {
    const config = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
    }
    try {
        let res = await axios('http://localhost:3000/anuncios/'+id, config);
        console.log("BORRADO", res.data);
    } catch (error) {
        console.log("FALLO EL BORRADO");
    }

}