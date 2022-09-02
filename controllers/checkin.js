const Checkin = require('../models/Checkin')
const countryList = require('country-list')

module.exports = {
    getCheckins: async (req,res)=>{
        console.log(req.user)
        try{
            const posts = await Checkin.find({userId:req.user.id})
            res.render('restaurants.ejs', {title: 'Tastes of the Town', posts: posts, user: req.user, countryData: countryList.getData()})
        }catch(err){
            console.log(err)
        }
        //changed title from Checkins
    },
    createCheckin: async (req, res)=>{
        try{
            await Checkin.create({
                restaurant: req.body.name,
                state: req.body.state, 
                userId: req.user.id,
                city: req.body.city,
                country: req.body.country,
                comment: req.body.comment,
                favDish: req.body.favDish,
                foodType: req.body.foodType,
                status: req.body.status,
            })
            console.log('Checkin has been added!')
            res.redirect('/reviews')
        }catch(err){
            console.log(err)
        }
    },
    deleteCheckin: async (req, res)=>{
        console.log(req.body.reviewId)
        try{
            await Checkin.findOneAndDelete({_id:req.body.reviewId})
            console.log('Deleted Checkin')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    