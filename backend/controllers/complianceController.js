const Compliance = require('../models/compliancePageModel/compliancesModel')


const pdfComplianceControllers = async (req,res) => {
    try {
        const {title} = req.body
        const pdfFile = req?.file?.filename  
        // console.log(title,"titlleeeeee")
// console.log(req.file.filename, "fillleeeee")
        const compliance = new Compliance({
            title,
            pdfFile
        })

        const savedCompliance = await compliance.save()

        res.status(200).json({
            message: 'File Uploaded Successfully',
            compliance: savedCompliance
        })
    } catch (error) {
        console.error('Error in pdfComplianceControllers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {pdfComplianceControllers} 