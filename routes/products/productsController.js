const Products = require("../../models/Products");
const { errors } = require("../../utils/errors");
const { success } = require("../../utils/success");

const addProduct = async (req, res) => {
    const { title, description, inventoryCount } = req.body;

    if (!title || !description || inventoryCount === undefined) {
        return res.status(400).json(errors.badRequest('Please provide all fields'));
    }
    try {
        const newProduct = new Products({ title, description, inventoryCount });
        await newProduct.save();
        res.status(201).json(success.created('Product created', newProduct));
    } catch (err) {
        res.status(500).json(errors.internalServerError('Error creating product'));
    }
}
const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(success.ok('Products retrieved successfully', products));
    } catch (err) {
        res.status(500).json(errors.internalServerError('Error fetching products'));
    }
}
const updateProducts = async (req, res) => {
    const { id } = req.params;
    const { title, description, inventoryCount } = req.body;

    if (!title || !description || inventoryCount === undefined) {
        return res.status(400).json(errors.badRequest('Please provide all fields'));
    }

    try {
        const product = await Products.findByIdAndUpdate(id, { title, description, inventoryCount }, { new: true });
        res.status(200).json(success.ok('Product updated successfully', product));
    } catch (err) {
        res.status(500).json(errors.internalServerError('Error updating product'));
    }
}
const deleteProducts = async (req, res) => {
    const { id } = req.params;
    try {
        await Products.findByIdAndDelete(id);
        res.status(200).json(success.deleted('Product deleted'));
    } catch (err) {
        res.status(500).json(errors.internalServerError('Error deleting product'));
    }
}

module.exports = { addProduct, getProducts, updateProducts, deleteProducts }