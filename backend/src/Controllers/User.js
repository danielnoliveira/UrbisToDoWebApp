const jwt = require("jsonwebtoken");
const User = require('./../Database/Models/User');
module.exports = {
    login: async (req,res) => {
        const {login,password} = req.body;
        const user = await User.findOne({where:{
            email:login,
            password,
        }});
        if(user){
            const {id} = user;
            const token = jwt.sign({id}, process.env.SECRET, {
                expiresIn:120,
            });
            return res.json({auth: true, token});
        }
        res.status(500).json({msg:"Login invalido!"});
    }
}