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

module.exports = router;