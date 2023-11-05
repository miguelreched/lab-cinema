const express = require('express');
const router = express.Router();

const Film = require("../models/Movie.models")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// ruta /movies lista de peliculas
router.get("/movies", (req, res, next)=> {
    
Film.find()
.select({image:1, title:1})
.then((response)=>{
    console.log(response)
    res.render("movies.hbs", {movies: response})
})
.catch((err)=>{
    next(err)
})

});

router.get("/movies/:moviesId", async (req, res, next) => {

    try{
        console.log(req.params)
        const response = await Film.findById(req.params.moviesId)
        res.render("detalles.hbs", {
            unaPelicula: response
        })

    }
    catch(err) {
        next(err)
    }
})

module.exports = router;
