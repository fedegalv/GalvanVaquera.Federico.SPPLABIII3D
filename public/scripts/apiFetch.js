export async function traerAnunciosFetch() {
    try {
        let res = await fetch("http://localhost:3000/anuncios");
        if(!res.ok)
        {
            let mensaje = res.statusText || "Se produjo un error";
            throw Error(res.status + "-" +mensaje);
        }
        let data = await res.json();
        return data; //ol.appendChild(crearItems(data));

    } catch (err) {
        console.error(err);
    }
}

export async function bajaAnunciFetch(id) {
    try {
        let res = await fetch('http://localhost:3000/anuncios/' + id, {
            method: 'DELETE',
          });
        if(!res.ok)
        {
            let mensaje = res.statusText || "Se produjo un error";
            throw Error(res.status + "-" +mensaje);
        }

    } catch (err) {
        console.error(err);
    }
}
