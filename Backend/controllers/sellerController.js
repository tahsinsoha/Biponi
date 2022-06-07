const asyncHandler = require('express-async-handler')
const Seller = require('../model/SellerModel')
const getSellers = asyncHandler(async(req,res) => {
    const Sellers = await Seller.find()
    res.status(200).json(Sellers)
}
)
const setSeller =  asyncHandler(async(req,res) => {
  console.log(req)
  console.log(req.body)   
  if(!req.body.Transaction_id){
         res.status(400)
         throw new Error('Please add a title field')

     }
     const seller = await Seller.create({
         Transaction_id: req.body.Transaction_id,
         Quantity: req.body.Quantity,
         Product_list: req.body.Product_list,
         
     })
    res.status(200).json(seller)
})


const updateSeller = asyncHandler(async (req, res) => {
    const seller = await Seller.findById(req.params.id)
  
    if (!seller) {
      res.status(400)
      throw new Error('Seller not found')
    }
  
    const updatedSeller = await Seller.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedSeller)
  })

  const getSellerByid = asyncHandler(async (req, res) => {
    const seller = await Seller.findById(req.params.id)
  
    if (!Seller) {
      res.status(400)
      throw new Error('Seller not found')
    }
  
    res.status(200).json(seller)
  })

  const deleteSeller = asyncHandler(async (req, res) => {
    const seller = await Seller.findById(req.params.id)
  
    if (!seller) {
      res.status(400)
      throw new Error('Seller not found')
    }
  
    await Seller.remove()
  
    res.status(200).json({ id: req.params.id })
  })
module.exports = {
getSellers, 
setSeller, 
updateSeller,
deleteSeller,
getSellerByid,

}