const jwt = require('jsonwebtoken')

module.exports = function signedIn(req, res, next){
    const {cookies} = req;
    if(!cookies.jwtToken){
        return next();

    }else{

        const token = cookies.jwtToken.replace("Bearer ","")
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
            if(error){
                return res.status(401).json({error: "You must be signed in"})
            }
            req.user = user;
            return res.redirect('/home');
        });
    }
  
}