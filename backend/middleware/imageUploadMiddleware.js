const multer = require("multer");
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const { CloudinaryStorage } = require('multer-storage-cloudinary');
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'your_folder_name',
      // format: async (req, file) => 'png', // or jpg, jpeg, etc.
      public_id: (req, file) => `${Date.now()}-${file.originalname}`

    },
  });


const upload = multer({ storage: storage }); 

// console.log("storage>>",storage)

const imageUploadMiddleware = (fieldName) => (req, res, next) => {
  console.log("outer single error>")
    upload.single(fieldName)(req, res, (err) => {
      if (err) {
        // Handle multer error
        // console.log("multer above error:::")
        console.error("Multer error:", err);
        res.status(500).json({ error: "File upload failed" });
        console.log()
      } else {
        // File upload successful, pass to the next middleware or route handler
        console.log("file upload successfull");
        next();
      }
    });
  };

module.exports = { imageUploadMiddleware };

























// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./skyproyashwant/src/assets/images/packagesImages"); // Uploads will be stored in the 'uploads/' directory
//     // cb(null, "uploads/"); // Uploads will be stored in the 'uploads/' directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Unique filename to avoid overwriting
//   },
// });

// const upload = multer({ storage: storage });
// // console.log(upload, "upload>>>>");

// const imageUploadMiddleware = (fieldName) => (req, res, next) => {
//   upload.single(fieldName)(req, res, (err) => {
//     if (err) {
//       // Handle multer error
//       console.error("Multer error:", err);
//       res.status(500).json({ error: "File upload failed" });
//     } else {
//       // File upload successful, pass to the next middleware or route handler
//       console.log("file upload successfull");
//       next();
//     }
//   });
// };

// module.exports = { imageUploadMiddleware };
