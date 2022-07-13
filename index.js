const contenedor = require ("./archivos");

const productoService = new contenedor();

const enviroment = async () => {
    console.log("Todos los productos")
    let productos = await productoService.getAll();
    console.log(productos)

    console.log("Producto elegido")
    let producto = {
        "producto": "Pelota de rugby",
        "precio": 3500,
    }
    await productoService.save(producto)

    console.log("Buscando un producto mediante un ID")
    await productoService.getById(2)

    await productoService.deletById(2)

    console.log("formateaste el json")
    await productoService.deletAll()
}

enviroment();
