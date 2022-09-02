const Checkin = require('../models/Checkin')

module.exports = {
    getCheckins: async (req,res)=>{
        // console.log(req.user)
        try{
            const posts = await Checkin.find({userId:req.user.id})
            res.render('reviews.ejs', {title: 'Tastes of the Town', posts: posts, user: req.user})
        }catch(err){
            console.log(err)
        }
        //changed title from Checkins
    },
    createCheckin: async (req, res)=>{
        try{
            await Checkin.create({
                restaurant: req.body.restaurant,
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
    },
    editCheckin: async (req,res)=>{
        console.log(req.user.id,req.params.id)

        const review = await Checkin.findOne({
            _id: req.params.id
        }).lean()
            console.log(review)
   
        if(!review){
            res.render('error/404')
        }
    
        if(review.userId != req.user.id){
            res.redirect('/')
        }else      res.render('./edit.ejs',{ 
            post: review,title:"Taste of the Town", user:req.user.id
        })
    },
    updateCheckin: async (req, res)=>{
        try{
            await Checkin.findOneAndUpdate({_id:mongoose.Types.ObjectId(`${req.body.review}`)},{
                country: req.body.country,
             
            })
            console.log('updated')
            res.json('updated')
        }catch(err){
            console.log(err)
        }
    },

}    