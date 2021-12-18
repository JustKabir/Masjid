const jwt = require('jsonwebtoken');
module.exports = function signin(req, res, next){
    const {cookies} = req;
    // console.log(req.user);
    if(!cookies){
        return res.status(401).json({error:"You must be signed in"})

    }
  
    const token = cookies.jwtToken.replace("Bearer ","")
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
        if(error){
            return res.status(401).json({error: "You must be signed in"})
        }
        if(user.type === "user"){
            return res.redirect('/home')
        }
        // console.log(user.type)
        req.user = user;
        next();
    });
}