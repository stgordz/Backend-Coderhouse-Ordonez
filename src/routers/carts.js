//Imports
import { Router } from 'express';
import Cart from '../models/carts.js'

//Const
const router = Router();
const cart = new Cart();

//GET Complete Cart
router.get('/', (req, res) => {
    const result = cart.getCarts();
    return res.json({ result });
});
//GET by ID
router.get('/:id', (req, res) => {
    const result = cart.getCartById(parseInt(req.params.id));
    return res.json({ result });
});
//POST (AGREGAR)
router.post('/', (req, res) => {
    const result = cart.createCart();
    return res.json({ result });
});

router.post('/:id/product/:pid', (req, res) => {
    const { id, pid } = req.params;
    const result = cart.addProductCart(parseInt(id), parseInt(pid))
    return res.json({ result });
});

//Exports
export default router;