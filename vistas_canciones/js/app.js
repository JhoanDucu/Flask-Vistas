function getCanciones(inicio){
    const resultado = fetch("http://127.0.0.1:5000/canciones");

    resultado
        .then(responder => responder.json())
        .then(datos => {
            inicio(datos);
        });
}

getCanciones(datos => {
    /*console.log(datos);*//*inspeccionamos la pagina y vemos el arry de objetos*/
    datos.forEach(cancion => {
       let busqueda = document.getElementById("busqueda");
        busqueda.innerHTML+=`
        <tr style="font-size: 12px;">
            <th>${cancion.id}</th>
            <td>${cancion.titulo}</td>
            <td>${cancion.minutos}</td>
            <td>${cancion.segundos}</td>
            <td>${cancion.interprete}</td>
            <td style="text-align: center;"><a href="./editar_album.html?id=${cancion.id}"><button class="btn btn-dark" style="font-size: 12px;">Editar</button></a></td>
            <td style="text-align: center;"><a href="./"><button class="btn btn-dark" style="font-size: 12px;">Eliminar</button></a></td>
        </tr>
         `
    });
});