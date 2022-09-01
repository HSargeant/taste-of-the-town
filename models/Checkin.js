const mongoose = require('mongoose')

const CheckinSchema = new mongoose.Schema({
  resturant: {
    type: String,
    required: true,
  },
  blurb:{
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Checkin', CheckinSchema)