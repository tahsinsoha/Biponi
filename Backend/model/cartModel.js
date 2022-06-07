const mongoose = require('mongoose')
const Cartdata = mongoose.Schema(
    {
        Transaction_id :{
            type: String,
            required: [true, 'please add a text value']

        }
        ,

        Product_list: {
            type: String,
            required: [true, 'please add a text value']

        },
        User_id: {
            type: String,
            required: [true, 'please add a text value']

        },
        Quantity: {
            type: String,
            required: [true, 'please add a text value']

        },
    }
)

module.exports = mongoose.model('Cart', Cartdata)