const mongoose = require ("mongoose")
const filmSchema = new mongoose.Schema({
     title: String,
     director: String,
     stars: [String],
     image: String,
     description: String,
     showtimes: [String]
})

const Film = mongoose.model("Film", filmSchema)

module.exports = Film