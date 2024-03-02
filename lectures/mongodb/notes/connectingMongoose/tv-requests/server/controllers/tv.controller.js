    // Ninja Bonus: Attempt to modularize your dataset into a models folder and file named tv.model.js
import TvShow from "../models/tv.model.js";


export async function addTvShows(req, res){
    try {
        console.log(req.body)
        const newTvShow = await TvShow.create(req.body);
        res.json(newTvShow);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
}



export async function getAllTvShows(req, res){
    try{
        const allShows = await TvShow.find();
        res.json(allShows); 
    } catch (e){
        console.error(e);
        res.status(400).json(e);
    }
}

