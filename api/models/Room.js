import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new Schema({
    title:{
        type: String,
        required:true,
       
    },
    price:{
        type: Number,
        required:true,
       
    },
    maxPeople:{
        type:Number,
        required:true,
    },
    desc:{
        type: String,
        required:true,
       
    },
    roomNumbers:[{number:Number,unavailableDates:{type:[Date]}}]
})
// [{number:1,unavailableDates:[d1,d2]}]
// [{number:2,unavailableDates:{type:[Date]}}]
// [{number:3,unavailableDates:{type:[Date]}}]
// [{number:4,unavailableDates:{type:[Date]}}]

export default mongoose.model("room",roomSchema)