const Checkin = require('../models/Checkin')
const countryList = require('country-list')

module.exports = {
    getIndex: async (req,res)=>{
        console.log(req.user)
        try{
            const posts = await Checkin.find({status:"public"})
            res.render('index.ejs', {title: 'Tastes of the Town', posts: posts, user: req.user, countryData: countryList.getData()})
        }catch(err){
            console.log(err)
        }
    }
}