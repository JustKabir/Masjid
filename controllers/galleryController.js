const mongoose = require('mongoose')
const Gallery = mongoose.model("Gallery");
const Image = mongoose.model("Image");

exports.videoPath_post = async(req, res)=>{
    try{
        user = req.user
        // const video = 

    }catch(err){
        console.log(err)
    }
    // console.log(homeContents[1])
}

exports.images_post = (req,res)=>{
        // console.log(req.files.length)
    try {
        const files = req.files
        const gallery = new Gallery({
            folderName: req.body.folderName,
        })
        gallery.save();
        for(var i = 0; i < files.length; i++){
            const images = new Image({
                imagePath: files[i].path,
                relatedFolder: gallery._id
            });
            images.save();
            return res.redirect('/admin/dashboard');
        }
    } catch (error) {
        console.log(err)
    }
}
