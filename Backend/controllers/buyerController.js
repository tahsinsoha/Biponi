const asyncHandler = require('express-async-handler')
const Buyer = require('../model/buyerModel')
const getBuyers = asyncHandler(async(req,res) => {
    const Buyers = await Buyer.find()
    res.status(200).json(Buyers)
}
)
const setBuyer =  asyncHandler(async(req,res) => {
  console.log(req)
  console.log(req.body)   
  if(!req.body.Transaction_id){
         res.status(400)
         throw new Error('Please add a title field')

     }
     const buyer = await Buyer.create({
         Transaction_id: req.body.Transaction_id,
         Quantity: req.body.Quantity,
         Product_list: req.body.Product_list,
         User_id: req.body.User_id,
         
     })
    res.status(200).json(buyer)
})


const updateBuyer = asyncHandler(async (req, res) => {
    const buyer = await Buyer.findById(req.params.id)
  
    if (!buyer) {
      res.status(400)
      throw new Error('Buyer not found')
    }
  
    const updatedBuyer = await Buyer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedBuyer)
  })

  const getBuyerByid = asyncHandler(async (req, res) => {
    const buyer = await Buyer.findById(req.params.id)
  
    if (!buyer) {
      res.status(400)
      throw new Error('Buyer not found')
    }
  
    res.status(200).json(buyer)
  })

  const deleteBuyer = asyncHandler(async (req, res) => {
    const buyer = await Buyer.findById(req.params.id)
  
    if (!buyer) {
      res.status(400)
      throw new Error('Buyer not found')
    }
  
    await Buyer.remove()
  
    res.status(200).json({ id: req.params.id })
  })
module.exports = {
getBuyers, 
setBuyer, 
updateBuyer,
deleteBuyer,
getBuyerByid,

}