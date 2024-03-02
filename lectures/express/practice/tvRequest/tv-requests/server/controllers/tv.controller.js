    // Ninja Bonus: Attempt to modularize your dataset into a models folder and file named tv.model.js
    import tvShows from "../models/tv.model.js";



export function getAllTvShows(req, res){
    res.json(tvShows);
}

export function getTvShowsByYear(req, res){
    const showsFilteredByYear = tvShows.filter((tvShow)=>
        tvShow.yearCreated == req.params.year)
    res.json(showsFilteredByYear)
}

export function deleteTvShowsByTitle (req, res){
    const showTitle = req.params.title;
    const index = tvShows.findIndex(tvShow => tvShow.title == showTitle);
    tvShows.splice(index, 1);
    res.json(tvShows);
};


// If each title is unique
export function updateStarringByTitle(req, res){
    tvShows.forEach((tvShow)=>{
        if(tvShow.title == req.params.title){
            tvShow.starring = req.body.starring;
        }
    })
    res.json(tvShows)
}

// {
//     "starring": [
//       "Spongebob",
//       "Patrick"
//     ]
// }

// ninja bonus
// If titles were not unique:
    // function updateStarringByTitle(req, res){
    //     const updatedShows = [];
    //     tvShows.forEach((tvShow)=>{
    //         if(tvShow.title == req.params.title){
    //             tvShow.starring = req.body.starring;
    //             updatedShows.push(tvShow)
    //         }
    //     })
    //     res.json(updatedShows)
    // }



export function addTvShows(req, res){
    tvShows.push(req.body)
    res.json(tvShows);
}

// export { getAllTvShows, getTvShowsByYear, deleteTvShowsByTitle, updateStarringByTitle, addTvShows}