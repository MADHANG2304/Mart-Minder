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

router.delete("/:id" , async (req , res) => {
    try {
        const deleteMarket = await Market.findByIdAndDelete(req.params.id);
        if(!deleteMarket)
        {
            return res.status(404).json({ error: 'Market not found' });
        }
        return res.status(200).json({ message: 'Market deleted successfully' });
    } catch (error) {
        return res.status(500).json({error : "Error deleting Market"});
    }
})

router.get("/:id" , async (req , res) => {
    try {
        const market = await Market.findById(req.params.id);
        if(!market)
        {
            return res.status(404).json({ error: 'Market not found' });
        }
        return res.status(200).json({ market });
    } catch (error) {
        return res.status(500).json({error : "Error fetching Market"});
    }   
})

router.put("/:id" , async (req , res) => {
    const {name , description , location , activeHours , imageUrl} = req.body;
    if(!name || !description || !location || !activeHours || !imageUrl)
    {
        return res.status(400).json({error : "Please fill all the fields"});
    }
    try {
        const updatedMarket = await
            Market.findByIdAndUpdate(
                req.params.id,
                {name , description , location , activeHours , imageUrl},
                {new: true}
            );
        if(!updatedMarket)
        {
            return res.status(404).json({ error: 'Market not found' });
        }
        return res.status(200).json({ message: 'Market updated successfully', market: updatedMarket });
    } catch (error) {
        return res.status(500).json({error : "Error updating Market"});
    }
})

module.exports = router;