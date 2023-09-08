function getAlbums(inicio){
    const resultado = fetch("http://127.0.0.1:5000/albums");

    resultado
        .then(responder => responder.json())
        .then(datos => {
            inicio(datos);
        });
}

getAlbums(datos => {
    /*console.log(datos);*//*inspeccionamos la pagina y vemos el arry de objetos*/
    datos.forEach(albums => {
       let busqueda = document.getElementById("busqueda");
        busqueda.innerHTML+=`
        <tr style="font-size: 12px;">
            <th>${albums.id}</th>
            <td>${albums.titulo}</td>
            <td>${albums.anio}</td>
            <td>${albums.descripcion}</td>
            <td>${albums.medio.llave}</td>
            <td>${albums.usuario}</td>
            <td style="text-align: center;"><a href="./editar_album.html?id=${albums.id}"><button class="btn btn-dark" style="font-size: 12px;">Editar</button></a></td>
            <td style="text-align: center;"><a href="./"><button class="btn btn-dark" style="font-size: 12px;">Eliminar</button></a></td>
        </tr>
         `
    });
});