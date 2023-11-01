//Imports
import express from 'express';
import products from './src/routers/products.js';
import carts from './src/routers/carts.js';

console.log('Coderhouse-Backend');

//Constantes
const app = express();
const port = 8080;

app.use(express.json());
app.use('/api/products', products);
app.use('/api/carts', carts);

//Inicio en localhost
app.get ('/', function (req, res) {
    return res.send('home')
});


//Mensaje de puerto en uso
app.listen(port, () => {
    console.log(`Ejecutando app en el puerto ${port}`)
});