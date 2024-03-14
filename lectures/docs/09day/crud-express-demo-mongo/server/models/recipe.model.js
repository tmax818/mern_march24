import {model, Schema} from 'mongoose';
const RecipeSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "First name is required!"]
        },
        description: {
            type: String,
            required: [true, "Last name is required!"]
        }
    },
    { timestamps: true }
);
const Recipe = model("Recipe", RecipeSchema);
export default Recipe;
