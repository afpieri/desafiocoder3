const express = require ("express");
let app = express ();
let cors = require ("cors");
const PORT = 3000;
const produccontroller = require("./components/listaproductos/controllers/produccontroller");

app.use(cors('*'));

app.get("/", async(req, res)=> {
    let response = await produccontroller.getAll()
     res.json (response);
} );

app.get ("Lista/productos/", () =>{});
app.get ("Lista/productoRandom/", () =>{});
app.post ("Lista/", () =>{});
app.put ("Lista/", () =>{});
app.delete("Lista/", () =>{});

app.listen (PORT, () => {
     console.log(`servidor funciona correctamente ${PORT}`);
})