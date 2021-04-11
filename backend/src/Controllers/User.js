const jwt = require("jsonwebtoken");
const User = require('./../Database/Models/User');
module.exports = {
    signin: async (req,res) => {
        const {email,password} = req.body;
        const user = await User.findOne({where:{
            email,
            password,
        }});
        if(user){
            const {id,name} = user;
            const token = jwt.sign({id}, process.env.SECRET, {
                expiresIn:120,
            });
            return res.json({auth: true, token, name});
        }
        res.status(500).json({msg:"Login invalido!"});
    },
    signup: async (req,res) => {
        const {email,password, name} = req.body;
        try{
            const user = await User.create({email,name,password});
            return res.json({msg: "Usuario cadastrado com sucesso!!!"});

        }catch(error){
            res.status(500).json({msg:"Usuario ja cadastrado, utilize outro email!"});
        }
    }
}