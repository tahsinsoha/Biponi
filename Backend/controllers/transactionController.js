const asyncHandler = require('express-async-handler')
const Transaction = require('../model/transactionModel')
const getTransactions = asyncHandler(async(req,res) => {
    const Transactions = await Transaction.find()
    res.status(200).json(Transactions)
}
)
const setTransaction =  asyncHandler(async(req,res) => {
  console.log(req)
  console.log(req.body)   
  if(!req.body.Current_amount){
         res.status(400)
         throw new Error('Please add a title field')

     }
     const transaction = await Transaction.create({
         Current_amount: req.body.Current_amount,
         User_id: req.body.User_id,
         
     })
    res.status(200).json(transaction)
})


const updateTransaction = asyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id)
  
    if (!transaction) {
      res.status(400)
      throw new Error('Transaction not found')
    }
  
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedTransaction)
  })

  const getTransactionByid = asyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id)
  
    if (!transaction) {
      res.status(400)
      throw new Error('Transaction not found')
    }
  
    res.status(200).json(transaction)
  })

  const deleteTransaction = asyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id)
  
    if (!transaction) {
      res.status(400)
      throw new Error('Transaction not found')
    }
  
    await Transaction.remove()
  
    res.status(200).json({ id: req.params.id })
  })
module.exports = {
getTransactions, 
setTransaction, 
updateTransaction,
deleteTransaction,
getTransactionByid,

}