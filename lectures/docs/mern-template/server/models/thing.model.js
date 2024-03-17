/**
 * ! thing.model.js
 */


import {model, Schema} from 'mongoose';
const ThingSchema = new Schema(
    {
        StringProperty: {
            type: String,
            required: [true, "StringProperty is required! and validations are working"]

        },
        NumberProperty: {
            type: Number,
            required: [true, "NumberProperty is required!"]

        },
        BooleanProperty: {
            type: Boolean,
            required: [true, "BooleanProperty is required!"]
        }
    },
    { timestamps: true }
);
const Thing = model("Thing", ThingSchema);
export default Thing;
