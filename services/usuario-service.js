fetch("https://api.escuelajs.co/api/v1/users")
    .then((response) => response.json())
    .then((data) => {procesarUsuarios(data)});

function procesarUsuarios(usuarios) {
    const contenedor = document.getElementById("contenedor-usuarios");
    
}