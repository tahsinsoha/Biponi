const mongoose = require('mongoose')


const orderSchema = mongoose.Schema(
{
  productid :{
        type: String,
    

    },

   quantity: {
       type: Number
   }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Order', orderSchema)
