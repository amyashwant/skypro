const router = require("express").Router();
// Change this line in complianceRoutes.js
const {
  pdfUploadMiddleware,
} = require("../middleware/compliancePageMiddleware");
const {
  pdfComplianceControllers,
  getComplianceController,
} = require("../controllers/complianceController");

router.post("/", pdfUploadMiddleware("pdfFile"), pdfComplianceControllers);
router.get("/", getComplianceController);
module.exports = router;
