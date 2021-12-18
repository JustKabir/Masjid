const mongoose = require('mongoose');
const News = mongoose.model("News");

exports.newsCreate_post = (req,res)=>{
    console.log(req.body)
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
