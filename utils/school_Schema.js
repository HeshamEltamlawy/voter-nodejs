const mongoose = require('mongoose')

const schoolSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    name_arabic:{
        required: true,
        type: String
    },
    address:{
        required: true,
        type: String
    },
    location:{
        coordinates:{
            type: [],
            required: true
        },
        type:{
            type: String,
            required: true,
            enum: ['Point', 'Polygon']

        }
    },
    file: {
        data: Buffer,
        contentType: String,
      }
})

module.exports = mongoose.model('school', schoolSchema);