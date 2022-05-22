const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        Title :{
            type: String,
            required: [true, 'please add a text value']

        }
        ,

        Description: {
            type: String 

        },
        Category: {
            type: String 

        },
        Price: {
            type: Number

        },

        Image: {
            data: Buffer,
        contentType: String
        },



    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Product', productSchema)