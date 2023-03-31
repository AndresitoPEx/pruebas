const listarProductos = () => fetch('https://api.escuelajs.co/api/v1/products').then (response => response.json());

export const productosService = {
    listarProductos
}