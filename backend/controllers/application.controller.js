import { Application } from "../models/application.model";
import { Job } from "../models/job.model";



export const applyJob = async (req, res)=>{
    try {
        const userId = req.id
        const jobId = req.params.id

        if(!jobId){
            return res.status(400).json({message: 'Job id is required'});
        }

        const existingApplication = await Application.find({ job:jobId, application: userId})
        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this jobs",
                success: false
            });
        }

        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({message: 'Job not found'});
        }   

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })

        job.application.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully.",
            success:true
        })

        
    } catch (error) {
        console.log(error);
    }
}


export const getAppliedJob = async (req, res) => {
    try {
        const userId = req.id
        const applications = await Application.find({applicant: userId})

        if(!applications) {
            return res.status(404).json({message: 'No applications found'});
        }

        return res.status(200).json({
            applications,
           
        })

        
    } catch (error) {
        console.log(error);
    }
}