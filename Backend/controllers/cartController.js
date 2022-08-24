const asyncHandler = require('express-async-handler')
const Cart = require('../model/cartModel')
const getCarts = asyncHandler(async(req,res) => {
    const Carts = await Cart.find()
    res.status(200).json(Carts)
}
)
const setCart =  asyncHandler(async(req,res) => {
  console.log(req)
  console.log(req.body)   
  if(!req.body.Transaction_id){
         res.status(400)
         throw new Error('Please add a title field')

     }
     const cart = await Cart.create({
         Transaction_id: req.body.Transaction_id,
         Quantity: req.body.Quantity,
         Product_list: req.body.Product_list,
         User_id: req.body.User_id,
         
     })
    res.status(200).json(cart)
})


const updateCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id)
  
    if (!cart) {
      res.status(400)
      throw new Error('Cart not found')
    }
  
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedCart)
  })

  const getCartByid = asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id)
  
    if (!Cart) {
      res.status(400)
      throw new Error('Cart not found')
    }
  
    res.status(200).json(cart)
  })

  const deleteCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id)
  
    if (!cart) {
      res.status(400)
      throw new Error('Cart not found')
    }
  
    await Cart.remove()
  
    res.status(200).json({ id: req.params.id })
  })
module.exports = {
getCarts, 
setCart, 
updateCart,
deleteCart,
getCartByid,

}