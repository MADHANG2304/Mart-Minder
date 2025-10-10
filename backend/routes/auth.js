const router = require("express").Router();
const passport = require("passport");
const Product = require("../models/product.model");

// Auth API's:
router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Login successful",
            user: req.user,
        });
    }
    else {
        res.status(403).json({
            error: true,
            message: "Not authorized",
        });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login failed",
    });
});

router.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:5173/",
        failureRedirect: "auth/login/failed",
    })
)

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));


router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { 
      return next(err); 
    }
    res.redirect("http://localhost:5173/");
  });
});



//Product API's:
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

module.exports = router;