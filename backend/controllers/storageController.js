// server.js

const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

// Set up Multer with a destination directory and file filter
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Uploads will be stored in the 'uploads/' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename to avoid overwriting
  },
});

// File filter function to allow only image files
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|gif/;
  const extname = path.extname(file.originalname).toLowerCase();
  const isAllowed = allowedFileTypes.test(extname);
  if (isAllowed) {
    return cb(null, true);
  } else {
    return cb(
      new Error("Only image files (jpeg, jpg, png, gif) are allowed!"),
      false
    );
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Serve uploaded files statically
app.use("/uploads", express.static("uploads"));

// Handle image upload
app.post("/upload", upload.single("image"), (req, res) => {
  // req.file contains information about the uploaded image
  res.json({ message: "Image uploaded successfully!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
