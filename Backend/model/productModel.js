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



    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Goal', productSchema)