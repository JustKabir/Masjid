const mongoose = require('mongoose');
const News = mongoose.model("News");

exports.newsCreate_post = (req,res)=>{
    // console.log(req.body)
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
exports.news_get = async(req, res)=>{
    try{

        const news = await News.find({}).sort({createdAt: -1});
        console.log(news)
        const user = req.user;
        return res.status(200).render('news', {user, news})
    }catch(err){
      console.log(err)  
    }
}
