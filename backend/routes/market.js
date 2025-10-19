const router = require("express").Router();
const Market = require("../models/market.model");

router.post("/add-market" , (req , res) => {
    const {name , description , location , activeHours , imageUrl} = req.body;
    if(!name || !description || !location || !activeHours || !imageUrl)
    {
        return res.status(400).json({error : "Please fill all the fields"});
    }
    
    try {
        const newMarket = new Market({name , description , location , activeHours , imageUrl});
        const savedMarket = newMarket.save();
        return res.status(200).json({message: "Market Added Successfully" , market : savedMarket});
    } catch (error) {
        return res.status(400).json({error : "Error adding Market"})
    }
})

router.get("/get-markets" , async (req , res) => {
    try {
        const markets = await Market.find();
        return res.status(200).json({markets});
    } catch (error) {
        return res.status(400).json({error : "Error fetching Markets"});
    }
})

module.exports = router;