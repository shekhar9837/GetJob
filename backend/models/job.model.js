
import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements:[{type: String}],
    salary: { type: Number },
    experience: { type: Number},
    location: { type: String, required: true },
    jobType:{ type: String, required:true},
    position:{ type: Number, required:true},
    company: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Company' },
    createdBy:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    application:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
    },
    datePosted: { type: Date, default: Date.now },

}, {timestamp:true})

export const Job = mongoose.model("Job", jobSchema);