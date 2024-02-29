const mongoose = require('mongoose');
const validator = require('validator');

const dataSchema = new mongoose.Schema({
 
    location: {

        coordinates: { // Specified coordinates of location
            type: [],
            required: true
        },
        type: {  // Type of Location
            type: String,
            required: true,
            enum: ['Point', 'Polygon']
        }
    },

    name: {
        required: true,
        type: String
    },
    nationalID: {
        required: true,
        type: Number,
    
    }


})

module.exports = mongoose.model('schools', dataSchema);