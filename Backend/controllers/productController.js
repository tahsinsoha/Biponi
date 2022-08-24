const asyncHandler = require('express-async-handler')
const Product = require('../model/productModel')
const User = require('../model/userModel')
const ObjectId = require('mongodb').ObjectID;
const getProducts = asyncHandler(async(req,res) => {
    const products = await Product.find()
    res.status(200).json(products)
}
)
const setProduct =  asyncHandler(async(req,res) => {
  // console.log(req)
  console.log(req.body)   
  // console.log(req.Title)
  if(!req.body.Title){
         res.status(400)
         throw new Error('Please add a title field')

     }
     const product = await Product.create({
         Title : req.body.Title,
         Description: req.body.Description,
         Price: req.body.Price,
         Category: req.body.Category,
         Image: req.body.Image
     })
    res.status(200).json(product)
})


const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (!product) {
      res.status(400)
      throw new Error('product not found')
    }
  
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedProduct)
  })

  const getProductByid = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (!product) {
      res.status(400)
      throw new Error('product not found')
    }
  
    res.status(200).json(product)
  })

  const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (!product) {
      res.status(400)
      throw new Error('Product not found')
    }
  
    await product.remove()
  
    res.status(200).json({ id: req.params.id })
  })

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  console.log("found ", req.body);

  if (product) {
    console.log("hi")
    // const alreadyReviewed = product.reviews.find(
    //   (r) => r.user.toString() === req.body.user.toString()
    // )
// products/629ee45820bbe33432055f6a/reviews
    // if (alreadyReviewed) {
    //   res.status(400)
    //   throw new Error('Product already reviewed')
    // }

    // const user= await User.findById(req.body.user);
    // console.log(user._id)
    // const review = {
    //   name: user.Name,
    //   rating: Number(rating),
    //   comment,
    //   user: user
    // }

    //console.log("review ",review)

   // product.reviews.push(review)

    product.numReviews = parseInt(product.numReviews)+1;
    console.log(req.body.Rating, " ", product.rating, " ", product.rating+req.body.Rating)
    product.rating = ((parseInt(product.rating)*(product.numReviews-1) + parseInt(req.body.Rating)))/product.numReviews
    console.log(product.rating, " ", parseInt(product.rating)+parseInt(req.body.Rating))
    console.log(product.numReviews)
    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

module.exports = {
getProducts, 
setProduct, 
updateProduct,
deleteProduct,
getProductByid,
createProductReview 
}