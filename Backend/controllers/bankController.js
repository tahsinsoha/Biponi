const asyncHandler = require('express-async-handler')
const Bank_acc = require('../model/bankaccountModel')
const getBank_accs = asyncHandler(async(req,res) => {
    const Bank_accs = await Bank_acc.find()
    res.status(200).json(Bank_accs)
}
)
const setBank_acc =  asyncHandler(async(req,res) => {
  console.log(req)
  console.log(req.body)   
  if(!req.body.Account_no){
         res.status(400)
         throw new Error('Please add a title field')

     }
     const bank_acc = await Bank_acc.create({
         Account_no : req.body.Account_no,
         Pin: req.body.Pin,
         Current_amount: req.body.Current_amount,
         User_id: req.body.User_id,
         
     })
    res.status(200).json(bank_acc)
})


const updateBank_acc = asyncHandler(async (req, res) => {
    const Bank_acc = await Bank_acc.findById(req.params.id)
  
    if (!Bank_acc) {
      res.status(400)
      throw new Error('Bank_acc not found')
    }
  
    const updatedBank_acc = await Bank_acc.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedBank_acc)
  })

  const getBank_accByid = asyncHandler(async (req, res) => {
    const Bank_acc = await Bank_acc.findById(req.params.id)
  
    if (!Bank_acc) {
      res.status(400)
      throw new Error('Bank_acc not found')
    }
  
    res.status(200).json(Bank_acc)
  })

  const deleteBank_acc = asyncHandler(async (req, res) => {
    const Bank_acc = await Bank_acc.findById(req.params.id)
  
    if (!Bank_acc) {
      res.status(400)
      throw new Error('Bank_acc not found')
    }
  
    await Bank_acc.remove()
  
    res.status(200).json({ id: req.params.id })
  })
module.exports = {
getBank_accs, 
setBank_acc, 
updateBank_acc,
deleteBank_acc,
getBank_accByid,

}