const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')
const Usermenu = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if ( !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    const userExist = await Usermenu.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create the user
    const user = await Usermenu.create({
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({
            _id: user.id,

            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const {email,password} = req.body
    
    //Check user email
    if (!email || !password){
        res.status(400)
        throw new Error ('Please enter your Email & Password')
    }
    const user = await Usermenu.findOne({email})

    //check the password
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            email: user.email,
            token: generateToken(user._id)
        })
        }else{
            res.status(400)
            throw new Error("Invalid credentials")
    }
})

//Generate JWT 
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}
module.exports = {
    registerUser,
    loginUser
}