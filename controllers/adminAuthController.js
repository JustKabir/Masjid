require('dotenv').config();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express()
app.use(cookieParser());


exports.login_get = (req, res)=>{
    res.status(200).render('auth/adminLogin');
}

exports.login_post = async(req, res)=>{
    console.log(req.body.id)
    const player = User.findOne({its: req.body.id})
    .then(async (result)=>{
        if(result){
            if(result.type === "admin"){
                if(await bcrypt.compare(req.body.password, result.password)){
                    var key = process.env.ACCESS_TOKEN_SECRET
                    const user = result.toJSON();
                const accessToken = jwt.sign(user, key, {
                    expiresIn: '5h'
                }); 
                // console.log(accessToken)
                    return res.cookie('jwtToken', accessToken).redirect('/admin/dashboard')
                }else{
                    return res.status(401).json({
                        message: "Login Credentials are incorrect"
                    });        
            }
            }else{
                return res.status(401).json({
                    message:"Tu admin nahi hai bro"
                });
            }
            
        }else{
            return res.status(401).json({
                message: "No such user exists"
            });
        }

    }).catch((err)=>{
        console.log(err);
    })
}


exports.logout_post = (req,res)=>{
    res.cookie('jwtToken', '', {maxAge: 1});
    return res.redirect('/admin');
}