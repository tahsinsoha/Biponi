const mongoose = require('mongoose')


const orderSchema = mongoose.Schema(
    {
        userid: {
            type: String
        }, 
        username: {
            type: String
        },
        products: {
            type: String

        },

        cost: {
            type: Number
        }
        ,
        date: {
            type: String
        }
        ,
    },

    {
        timestamps: true
    }
)

module.exports = mongoose.model('Order', orderSchema)
