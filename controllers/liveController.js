const mongoose = require('mongoose')
const Live = mongoose.model("Live");

exports.live_get = async(req, res)=>{
    try{
        user = req.user
        const live = await Live.findOne({})
        res.status(200).render('live', {user, live});

    }catch(err){
        console.log(err)
    }
    // console.log(homeContents[1])
}

exports.live_post = async(req, res)=>{
    try{
        user = req.user
        const live = await Live.find({})
        console.log(live[0])
        if(live[0] === undefined){
            const newLink = new Live({
                title: req.body.title,
                link: req.body.link
            });
            newLink.save()
            res.status(200).send('/live');
        }else{
            return res.json({
                message: "Already ek chalra hai live"
            });
        }

    }catch(err){
        console.log(err)
    }
    
};
