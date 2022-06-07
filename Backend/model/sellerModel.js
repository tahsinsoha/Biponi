const mongoose = require('mongoose')
const Sellerdata = mongoose.Schema(
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
        // Account_no: {
        //     type: String,
        //     required: [true, 'please add a text value']

        // },
        Quantity: {
            type: String,
            required: [true, 'please add a text value']

        },
    }
)

module.exports = mongoose.model('Seller', Sellerdata)