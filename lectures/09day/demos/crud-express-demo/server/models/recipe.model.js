//? import dependencies
import {model, Schema} from 'mongoose';
const RecipeSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"]
        },
        description: {
            type: String,
            required: [true, "description is required!"]
        }
    },
    { timestamps: true }
);
const Recipe = model("Recipe", RecipeSchema);
export default Recipe;