const mongoose = require('mongoose');
const Home = mongoose.model("Home");
const News = mongoose.model("News");

exports.dashboard_get = (req, res)=>{
    res.status(200).render('dashboard/dashboard');
}

exports.homeCreate_post = (req, res)=>{
    // This is how we can have the parsed image details
    // console.log(req.file);
    try{
        const home = new Home({
            description: req.body.description,
            image: req.file.path,
            title: req.body.title
        });
        home.save();
        return res.send('success')
    }catch(err){
        console.log(err)
    }

    
    // res.send("sup")
}

exports.newsCreate_post = (req,res)=>{
    console.log(req.file)
    try{
        const news = new News({
            title: req.body.title,
            image: req.file.path,
            content: req.body.content
        })
        news.save()
        return res.send("news Uploaded")
    }catch(err){
        console.log(err)
    }
}
