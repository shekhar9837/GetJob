import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    title:{ type: 'string', required: true},
    description:{ type:'string', required: true},
    website:{ type:'string', required: true},
    location:{ type:'string'},
    logo:{type:'string'},
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

export const Company=mongoose.model('Company', companySchema); 