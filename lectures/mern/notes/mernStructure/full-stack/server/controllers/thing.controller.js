//? CONTROLLERS
import Thing from '../models/thing.model.js';

//! CREATE


export async function createThing(req, res) {
    try{
        console.log(req.body)
        const newThing = await Thing.create(req.body);
        res.json(newThing);
    } catch (e) {
        console.error(e);
        res.status(400).json(e);
    }
}


//! READ ALL


export async function getAllThings(req, res) {
    try {
        const allBooks = await Thing.find();
        res.json(allBooks)
     } catch (e) {
        console.error(e);
        res.status(400).json(e);
     }
}


//! READ ONE

export async function getOneThing(req, res){
    try {
        const oneThing = await Thing.findById(req.params.id);
        res.json(oneThing);
    } catch (e) {
        console.error(e);
        res.status(400).json(e);
    }
}

//! UPDATE

export async function updateThing(req, res){
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedThing = await Thing.findByIdAndUpdate(req.params.id, req.body, options);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
}


//! DELETE

export async function deleteOneThing(req, res) {
    try {
        const deletedThing = await Thing.findByIdAndDelete(req.params.id);
        res.json(deletedThing);
    } catch (e) {
        console.error(e);
        res.status(400).json(e);
    }
}







const ThingController = {
    getAllThings: (req, res) => {
        res.send("Dude, it works");
    },
    createThing: (req, res) => {
        res.send("POST Request");
    }
}

export default ThingController;
