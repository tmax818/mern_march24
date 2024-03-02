import {model, Schema} from 'mongoose';

const ShowSchema = new Schema(
{
    name: {type: String}
},
{timestamps: true}
);

const TvShow = model("TvShow", ShowSchema);
export default TvShow;