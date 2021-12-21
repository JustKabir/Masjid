const mongoose = require('mongoose')
const Home = mongoose.model("Home");

exports.home_get = async(req, res)=>{
    try{
        user = req.user
        homeContents = await Home.find({}).sort({createdAt: -1})
        res.status(200).render('home', {user, homeContents});

    }catch(err){
        console.log(err)
    }
    // console.log(homeContents[1])
}

exports.committee_get = (req, res)=>{
    const user = req.user 
    res.status(200).render('committee', {user});
};
