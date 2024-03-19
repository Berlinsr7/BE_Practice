import { client } from "./index.js";

async function getAllProducts(req) {
    return await client.db("PracticeDB").collection("products").find(req.query).toArray();
}
async function getProductsById(id) {
    return await client.db("PracticeDB").collection("products").findOne({ id: id });
}
async function deleteProducts(id) {
    return await client.db("PracticeDB").collection("products").deleteOne({ id: id });
}
async function addProducts(newProduct) {
    return await client.db("PracticeDB").collection("products").insertMany(newProduct);
}
async function updateProducts(id, updatedProduct) {
    return await client.db("PracticeDB").collection("products").updateOne({id : id}, {$set : updatedProduct});
}

export { getAllProducts, getProductsById, deleteProducts, addProducts, updateProducts }