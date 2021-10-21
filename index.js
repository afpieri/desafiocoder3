const express = require ("express");
let app = express ();
let cors = require ("cors");
const PORT = 3000;

app.use(cors('*'))

app.get("/", (req, res)=> {
     res.json (true);
} );

app.get ("Lista/productos/", () =>{});
app.get ("Lista/productoRandom/", () =>{});
app.post ("Lista/", () =>{});
app.put ("Lista/", () =>{});
app.delete("Lista/", () =>{});

app.listen (PORT, () => {
     console.log(`servidor funciona correctamente ${PORT}`);
})