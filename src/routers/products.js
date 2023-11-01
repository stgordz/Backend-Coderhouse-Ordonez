//Imports
import { Router } from 'express';
import ProductManager from '../models/productos.js'

//Const
const router = Router();
const productos = new ProductManager();

///GET /products
router.get('/', (req, res) => {
    const { limit } = req.query;
    const p =  productos.getProduct();
    let cantProductos;
    if (limit)
    cantProductos = p.slice(0, limit);
    else {
    }
    cantProductos = p.slice(0, limit);
        cantProductos = p;
    return res.json({ cantTotal: p.length, productos: cantProductos });
});

//GET by ID
router.get('/:id', (req, res) => {
    const { id } = req.params
    return res.json(productos.getProductById(parseInt(id)))
});

//POST (AGREGAR)
router.post ('/', (req, res) => {
    const {title, description, code, price, thumbnail, status, stock, category} = req.body;
    const result = productos.addProduct(title, description, code, price, thumbnail, status, stock, category);
    return res.json({ result });
})
//PUT (MODIFICAR)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const result = productos.updtaeProduct(parseInt(id), req.body);
    return res.json({ result });
});
//DELETE (BORRAR)
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const result = productos.deleteProduct(parseInt(id));
    return res.json({ result });
});

//Exports
export default router;