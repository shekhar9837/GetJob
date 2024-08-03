import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({ message: "Company name is required" });
    }

    let company = await Company.findOne({ title: companyName });
    if (company) {
      return res.status(400).json({ message: "Company name already exists" });
    }
     company = await Company.create({
      title: companyName,
      userId: req.id,
    });
    return res.status(200).json({ message: "Company registered successfully" });
  } catch (error) {
    console.log(error);
  }
};
//get all company
export const getCompany = async (req, res) => {
  try {
    const userId  = req.id
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({ message: "No companies found" });
    }
    return res.status(200).json({message:"all company list", companies});
  } catch (error) {
    console.log(error);
  }
};

//get company by id
export const getCompanyById = async (req, res) => {
    try {
      const companyId  = req.params.id // Corrected this line
      const company = await Company.findById(companyId); // Corrected this line
  
      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }
  
      return res.status(200).json({ company });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server error" }); // Added this line to send a response in case of an error
    }
  };
  

export const updateCompany = async (req, res) => {
    try {
        const {title, description, website, location} = req.body
        const file = req.file

        const updateData = {title, description, website, location}

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new:true})

        if(!company){
            return res.status(404).json({message: 'Company not found'})
        }
        return res.status(200).json({message:"Company updated"})
    } catch (error) {
            console.error(error)
    }   
}
