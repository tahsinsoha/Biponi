const asyncHandler = require('express-async-handler')
const Product = require('../model/productModel')
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
module.exports = {
getProducts, 
setProduct, 
updateProduct,
deleteProduct,
getProductByid,

}