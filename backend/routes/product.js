const router = require("express").Router();
const Product = require("../models/product.model");


router.post("/add-product", (req,res) => {
    const {name , price , description , category , stock , imageUrl} = req.body;
    if(!name || !price || !description || !category || !stock || !imageUrl){
        return res.status(400).json({error: "Please fill all the fields"});
    }

    try {
        const newProduct = new Product({name , price , description , category , stock , imageUrl});
        const savedProduct = newProduct.save();
        return res.status(200).json({message: "Product added successfully", product: savedProduct});
    } catch (error) {
        return res.status(400).json({error: "Error adding product"});
    }
})

router.get("/get-products", async (req,res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({products});
    } catch (error) {
        return res.status(400).json({error: "Error fetching products"});
    }
})

router.delete("/:id" , async (req , res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);
        if(!deleteProduct)
        {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({error : "Error deleting Product"});
    }
})

router.get("/:id" , async (req , res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product)
        {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({error : "Error fetching Product"});
    }   
})

router.put("/:id" , async (req , res) => {
    const {name , price , description , category , stock , imageUrl} = req.body;
    if(!name || !price || !description || !category || !stock || !imageUrl){
        return res.status(400).json({error: "Please fill all the fields"});
    }
    try {
        const updatedProduct = await
            Product.findByIdAndUpdate(
                req.params.id,
                {name , price , description , category , stock , imageUrl},
                {new: true}
            );
        if(!updatedProduct)
        {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        return res.status(500).json({error : "Error updating Product"});
    }
})

module.exports = router;