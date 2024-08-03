import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
      companyId,
      experience
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !companyId ||
      !experience ||
      !jobType ||
      !position ||
      !location
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const job = await Job.create({
      title,
      description,
      requirements:requirements.split(","),
      salary:Number(salary),
      location,
      jobType,
      position,
      company:companyId,
      userId,
      experience,
      createdBy:userId
    });
    return res.status(201).json({ message: "Job created", job });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query).populate({path:"company"}).sort({createdAt:-1})

    if (!jobs) return res.status(404).json({ message: "No jobs found" });

    return res.status(200).json({
      jobs,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"application"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}

//admin job
export const adminJob = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ createdBy: adminId });

    if (!jobs) {
      return res.status(404).json({ message: "No admin jobs found" });
    }
    return res.status(200).json({
      jobs,
    });
  } catch (error) {
    console.log(error);
  }
};
