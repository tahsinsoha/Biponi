const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const getUsers = asyncHandler(async(req,res) => {
    const users = await User.find()
    res.status(200).json(users)
}
)
const setUser =  asyncHandler(async(req,res) => {
  console.log(req)
  console.log(req.body)   
 
  if(!req.body.Name){
         res.status(400)
         throw new Error('Please add a title field')

     }
     const user = await User.create({
         Name : req.body.Name,
         Email: req.body.Email,
         Password: req.body.Password,
     })
    res.status(200).json(user)
})


const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (!user) {
      res.status(400)
      throw new Error('user not found')
    }
  
    const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedUser)
  })

  const getUserByemail = asyncHandler(async (req, res) => {
    const user = await User.findOne({
		Email: req.body.Email,
        Password: req.body.Password,
    })
	if (!user) {
        res.status(400)
        throw new Error('user not found')
	}
      res.status(200).json(user)
      //res.status(200).json(req.body.Password)
    
    // const isPasswordValid = await bcrypt.compare(
	// 	req.body.Password,
	// 	user.Password
	// )

	// if (user.Password === req.body.Password) {
	// 	const token = jwt.sign(
	// 		{
	// 			Name: user.Name,
	// 			Email: user.Email,
	// 		},
	// 		'secret123'
	// 	)

	// 	res.status(200).json(token)
	// } else {
    //     res.status(400)
    //     throw new Error('password not correct')
	// }


  })

  const getUserByid = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
      res.status(400)
      throw new Error('User not found')
    }
  
    res.status(200).json(user)
  })

  const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (!user) {
      res.status(400)
      throw new Error('user not found')
    }
  
    await user.remove()
  
    res.status(200).json({ id: req.params.id })
  })
module.exports = {
getUsers, 
setUser, 
updateUser,
deleteUser,
getUserByid,
getUserByemail
}