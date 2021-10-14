const { Console } = require("console");
const express = require ("express");
const { get } = require("http");
const { json } = require("stream/consumers");
let app = express ();
const PORT = 3000

app.get("/", (req, res)=> {
     res.json (true);
} );

app.get ("/productos/list", () =>{});
app.get ("/productoRandom/list", () =>{});

app.listen (PORT, () => {
     console.log(`servidor funciona correctamente ${PORT}`);
})