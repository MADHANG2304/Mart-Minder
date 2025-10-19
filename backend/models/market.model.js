const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: { 
        type: String,
        required: true,
    },
    location: { 
        type: String,
        required: true,
    },
    activeHours: { 
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Market = mongoose.model('Market', marketSchema);
module.exports = Market;