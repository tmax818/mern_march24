import { Router } from "express";
import { addTvShows, getAllTvShows} from "../controllers/tv.controller.js";

const router = Router();

router.route("/")
    .get(getAllTvShows)
    .post(addTvShows)

// router.route("/years/:year")
//     .get(getTvShowsByYear)

// router.route("/:title")
//     .delete(deleteTvShowsByTitle)
//     .put(updateStarringByTitle)

export default router;