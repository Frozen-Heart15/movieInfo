require("dotenv").config()
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/",(req,res)=>{
    res.render("index",{movies:""});
});

router.post("/",(req,res)=>{
const moviename = req.body.moviename;
//console.log(process.env.API_KEY);
axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${moviename}`)
.then((result)=>{
    let movies = result.data.Search;
    res.render("index",{movies:movies})
})
.catch((err)=>{
    console.log(err);
})

});

router.get("/movie/:movieId",(req,res)=>{
const movieId = req.params.movieId;
//console.log(process.env.API_KEY);
axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${movieId}`)
.then((result)=>{
    let movie = result.data;
    res.render("movie",{movie:movie})
})
.catch((err)=>{
    console.log(err);
})
})

module.exports = router