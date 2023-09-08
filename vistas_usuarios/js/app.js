function getUsers(inicio){
    const resultado = fetch("http://127.0.0.1:5000/usuarios");

    resultado
        .then(responder => responder.json())
        .then(datos => {
            inicio(datos);
        });
}

getUsers(datos => {
    /*console.log(datos);*//*inspeccionamos la pagina y vemos el arry de objetos*/
    datos.forEach(usuarios => {
       let busqueda = document.getElementById("busqueda");
        busqueda.innerHTML+=`
        <tr style="font-size: 12px;">
            <td>${usuarios.id}</td>
            <td>${usuarios.nombre_usuario}</td>
            <td>${usuarios.contrasena}</td>
            <td style="text-align: center;"><a href="./editar_usuario.html?id=${usuarios.id}"><button class="btn btn-dark" style="font-size: 12px;">Editar</button></a></td>
            <td style="text-align: center;"><a href="./"><button class="btn btn-dark" style="font-size: 12px;">Eliminar</button></a></td>
        </tr>
         `
    });
});

function postUsers(inicio) {
    let formulario = new FormData(); //crear un objeto para enviar los valores del formulario a nuestro servidor
    formulario.append('nombre_usuario',document.getElementById="nombre_usuario")
    formulario.append('contrasena',document.getElementById="contrasena")
    console.log(formulario)
}