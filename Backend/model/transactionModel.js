const mongoose = require('mongoose')
const Transactiondata = mongoose.Schema(
    {
        User_id :{
            type: String,
            required: [true, 'please add a text value']

        }
        ,

        // Pin: {
        //     type: String,
        //     required: [true, 'please add a text value']

        // },
        // Account_no: {
        //     type: String,
        //     required: [true, 'please add a text value']

        // },
        Current_amount: {
            type: Number,
            required: [true, 'please add a text value']

        },
    }
)

module.exports = mongoose.model('Transaction', Transactiondata)