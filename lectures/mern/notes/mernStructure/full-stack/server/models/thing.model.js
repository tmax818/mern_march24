//? MODEL
import {model, Schema} from 'mongoose';
const ThingSchema = new Schema(
    {  
        name: {type: String},
        number: {type: Number}
      },
    { timestamps: true }
);

const Thing = model("Thing", ThingSchema);

export default Thing;