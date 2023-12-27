const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./skyproyashwant/src/assets/images/complianceFilePDF");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const pdfUploadMiddleware = (fieldName) => (req, res, next) => {
  upload.single(fieldName)(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);
      res.status(500).json({ error: "File upload failed" });
    } else {
      console.log("file upload successful middleware compliance");
      next();
    }
  });
};

module.exports = {pdfUploadMiddleware}
