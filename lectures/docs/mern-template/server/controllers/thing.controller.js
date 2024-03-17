/**
 * !    thing.controller.js
 */


import Thing from '../models/thing.model.js';

//!CREATE FUNCTION


export const createThing = async (req, res) => {
    try {
        const newThing = await Thing.create(req.body);
        res.json(newThing);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//! READ ALL

export const getAllThings = async (req, res) => {
    try {
        const allThings = await Thing.find();
        res.json(allThings);
    } catch (e) {
        console.error(e)
        res.status(400).json(e);
    }
}

//! READ ONE

export const getOneThingById = async (req, res) => {
    try {
        const theThing = await Thing.findById(req.params.id);
        res.json(theThing);
    } catch (e) {
        console.error(e);
        res.status(400).json(e)
    }
}

//! UPDATE

export const editThing = async (req, res) => {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedThing = await Thing.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedThing);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


//! DELETE

export const deleteOneThing = async (req, res) => {
    try {
        const deletedThing = await Thing.findByIdAndDelete(req.params.id);
        res.json(deletedThing);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

