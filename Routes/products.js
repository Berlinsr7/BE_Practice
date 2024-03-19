import express from "express";
import { getAllProducts, getProductsById, deleteProducts, addProducts, updateProducts } from "../helper.js";

const router = express.Router()

// .charAt(0).toUpperCase() + material.slice(1)
router.get('/', async (req, res) => {
    const { material, color } = req.query;
    const result = await getAllProducts(req);
    res.send(result);
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    // const product = products.find(pd => pd.id == id)
    const product = await getProductsById(id);
    product ? res.send(product) : res.status(404).send({ message: "Product Not Found" });
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    // const product = products.find(pd => pd.id == id)
    const product = await deleteProducts(id);
    res.send(product);
});
router.post('/',async (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    const result = await addProducts(newProduct);
    res.send(result);
});

router.put('/:id',async (req, res) => {
    const updatedProduct = req.body;
    const {id} = req.params
    console.log(updatedProduct);
    const result = await updateProducts(id, updatedProduct);
    res.send(result);
});

export const productsRoute = router