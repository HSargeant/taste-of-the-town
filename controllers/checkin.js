const Checkin = require('../models/Checkin')

module.exports = {
    getCheckins: async (req,res)=>{
        console.log(req.user)
        try{
            const posts = await Checkin.find({userId:req.user.id})
            res.render('restaurants.ejs', {title: 'Checkins', posts: posts, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createCheckin: async (req, res)=>{
        try{
            await Checkin.create({
                resturant: req.body.name,
                state: req.body.state, 
                userId: req.user.id,
                city: req.body.city,
                country: req.body.country,
                comment: req.body.comment,
                favDish: req.body.favDish,
                foodType: req.body.foodType,
                public: "True",
            })
            console.log('Checkin has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Checkin.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Checkin.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteCheckin: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Checkin.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Checkin')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    