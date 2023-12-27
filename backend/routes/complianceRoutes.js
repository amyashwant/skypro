const router = require("express").Router();
// Change this line in complianceRoutes.js
const {pdfUploadMiddleware} = require("../middleware/compliancePageMiddleware");
const {pdfComplianceControllers} = require("../controllers/complianceController");

router.post("/", pdfUploadMiddleware("pdfFile"), pdfComplianceControllers);

module.exports = router;