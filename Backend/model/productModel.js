const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      user: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User',
             },
     },
    {
      timestamps: true,
    }
  )

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
        reviews: [reviewSchema],
     rating: {
       type: Number,
       required: true,
       default: 0,
     },
     numReviews: {
       type: Number,
       required: true,
       default: 0,
     },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Product', productSchema)