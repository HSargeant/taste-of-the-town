const Checkin = require('../models/Checkin')

module.exports = {
    getIndex: async (req,res)=>{
        console.log(req.user)
        try{
            const posts = await Checkin.find({status:"public"})
            res.render('index.ejs', {title: 'Tastes of the Town', posts: posts, user: req.user})
        }catch(err){
            console.log(err)
        }
    }
}