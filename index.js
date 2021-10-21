const express = require ("express");
let app = express ();
let cors = require ("cors");
const PORT = 3000;
const produccontroller = require("./components/listaproductos/controllers/produccontroller");

app.use(cors('*'));

app.get("/", async(req, res)=> {
    res.json(true);
} );

app.get ("/Lista/productos", async(req, res) =>{
     let response = await produccontroller.getAll()
     res.json (response);
});
app.get ("Lista/productoRandom/",async (req, res)=>{});
app.post ("Lista/",async (req, res)=>{});
app.put ("Lista/", async(req, res)=>{});
app.delete("Lista/", async(req, res)=>{});

app.listen (PORT, () => {
     console.log(`servidor funciona correctamente ${PORT}`);
})