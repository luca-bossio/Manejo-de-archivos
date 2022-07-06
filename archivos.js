const fs = require("fs");


class contenedor {

     save(productos)

     async getById(numero) {
          try {
               const id = await fs.promises.readFileSync("1", "utf-8")
               console.log(id)
          }

          catch (err) {
               console.log("Error de lectura", err)

          }

     }
     getById(numero)

     async getAll() {

          try {
               const productos = await fs.promises.readFileSync("./productos.txt", "utf-8")

               console.log(productos)
          }

          catch (err) {
               console.log("Error de lectura", err)

          }
                   
     }
     getAll()



     async deleteById(numero) { }


     async deleteAll() {

     }






}