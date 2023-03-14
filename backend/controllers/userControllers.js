const createUser = (req, res) =>{
    res.status(200).json({Message: 'user created'})
}
const loginUser = (req, res) =>{
    res.status(200).json({Message: 'user created'})
}

module.exports={
    createUser,
    loginUser
}