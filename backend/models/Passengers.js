import mongoose from "mongoose";

const PassengersSchema = new mongoose.Schema({
    "Name" : { type: String },
     "Age" : { type: Number },
    "Email" : { type: String },
    "Phone" : { type: Number },
    "Seat" : { type: String },
});

export default mongoose.model('Passengers', PassengersSchema);
