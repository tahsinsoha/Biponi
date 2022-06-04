const mongoose = require('mongoose')
const Userdata = mongoose.Schema(
    {
        Name :{
            type: String,
            required: [true, 'please add a text value']

        }
        ,

        Email: {
            type: String,
            required: [true, 'please add a text value']

        },
        Password: {
            type: String,
            required: [true, 'please add a text value']

        },
    }
)

module.exports = mongoose.model('User', Userdata)