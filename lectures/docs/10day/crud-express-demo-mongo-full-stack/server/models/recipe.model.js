import {model, Schema} from 'mongoose';
const RecipeSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "First name is required!"],
            minlength: [2, "First name must be at least 2 characters long!"],
            maxlength: [255, "First name must be less than 255 characters long"]
        },
        description: {
            type: String,
            required: [true, "Last name is required!"],
            minlength: [2, "Last name must be at least 2 characters long!"],
            maxlength: [255, "Last name must be less than 255 characters long"]
        }
    },
    { timestamps: true }
);
const Recipe = model("Recipe", RecipeSchema);
export default Recipe;
