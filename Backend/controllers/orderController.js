const asyncHandler = require('express-async-handler')
const Order = require('../model/orderModel')
const User = require('../model/userModel')
const ObjectId = require('mongodb').ObjectID;
const getOrders = asyncHandler(async(req,res) => {
    const orders = await Order.find()
    res.status(200).json(orders)
}
)
const setOrder =  asyncHandler(async(req,res) => {
  // console.log(req)
  console.log(req.body.products)   
  // console.log(req.Title)
 
     const order = await Order.create({
         products : req.body.products,
         cost : req.body.cost,
         username: req.body.username,
         date : req.body.date

    
     })
    res.status(200).json(order)
})


const updateOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    if (!order) {
      res.status(400)
      throw new Error('Order not found')
    }
  
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedOrder)
  })

  const getOrderByid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    if (!order) {
      res.status(400)
      throw new Error('Order not found')
    }
  
    res.status(200).json(order)
  })

  const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    if (!order) {
      res.status(400)
      throw new Error('Order not found')
    }
  
    await Order.remove()
  
    res.status(200).json({ id: req.params.id })
  })



module.exports = {
getOrders, 
setOrder, 
updateOrder,
deleteOrder,
getOrderByid,
}