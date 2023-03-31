import { productosService } from '../services/producto-service.js';


const table = document.getElementById("productos-table");

const crearNuevaLinea = (producto) => {
    const linea = document.createElement('tr');
    const contenido = `
        <td><img src="${producto.image}" width="100" class="img-thumbnail"></td>
        <td>${producto.name}</td>
        <td>${producto.description}</td>
        <td>${producto.price}</td>
        <td>${producto.quantity}</td>
        <td><button class="btn btn-danger">Eliminar</button></td>
    `;
    linea.innerHTML = contenido;
    return linea;
    
};


productosService.listarProductos().then((data) => {
    data.forEach((producto) => {
        const nuevaLinea = crearNuevaLinea(producto);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => {
    console.log(error);
});

