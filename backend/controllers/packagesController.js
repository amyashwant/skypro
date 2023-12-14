const Channel = require("../models/packagesPageModel/channelModel");
const Bouquet = require("../models/packagesPageModel/bouquetModel");
const Broadcaster = require("../models/packagesPageModel/broadcasterModel");
const Language = require("../models/packagesPageModel/languageModel");
const Type = require("../models/packagesPageModel/typeModel");
const Package = require("../models/packagesPageModel/packageModel");

// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // cb(null, "./skyproyashwant/src/assets/images/packagesImages"); // Uploads will be stored in the 'uploads/' directory
//     cb(null, "uploads/"); // Uploads will be stored in the 'uploads/' directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Unique filename to avoid overwriting
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload-image", upload.single("image"), async (req, res) => {
//   console.log(req.file.filename);
//   res.send("uploaded!!");
// });

// channel Controller--------------------------------------------------------------------------

// const createChannel = async (req, res) => {
//   // console.log("req.file.filename>", req.file.filename);
//   try {
//     const { name, type, language, image, channelPrice } = req.body;

//     const channel = await Channel.create({
//       name,
//       type,
//       language,
//       image,
//       channelPrice,
//     });
//     res.status(200).json(channel);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const getChannels = async (req, res) => {
  try {
    const channels = await Channel.find().populate("type");
    res.status(200).json(channels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//language controller--------------------------------------------------------------------
const createLanguage = async (req, res) => {
  try {
    const { name } = req.body;
    const existingLanguage = await Language.findOne({ name });
    if (existingLanguage) {
      return res.status(400).json({ error: "Already added" });
    }

    const language = await Language.create({ name });
    res.status(200).json(language);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLanguage = async (req, res) => {
  try {
    const language = await Language.find();
    res.status(200).json(language);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Bouque Controller------------------------------------------------------------------------------------
const createBouquet = async (req, res) => {
  try {
    const { name, price, broadcasterRef, channelRef } = req.body;
    const bouquet = await Bouquet.create({
      name,
      price,
      broadcasterRef,
      channelRef,
    });
    res.status(200).json(bouquet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBouquets = async (req, res) => {
  try {
    // const bouquets = await Bouquet.find()
    //   .populate("broadcasterRef")
    //   .populate("channelRef");
    const bouquets = await Bouquet.find()
      .populate({
        path: "channelRef",
        // select: "name",
        populate: {
          path: "language",
        },
      })
      .populate({
        path: "broadcasterRef",
      });

    res.status(200).json(bouquets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Broadcaster-----------------------------------------------------------------------------------
// const createBroadcaster = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const broadcaster = await Broadcaster.create({
//       name,
//     });
//     res.status(200).json(broadcaster);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const getBroadcasters = async (req, res) => {
  try {
    const broadcasters = await Broadcaster.find().populate({
      path: "bouqueRef",
      populate: {
        path: "broadcasterRef",
      },
    });

    res.status(200).json(broadcasters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createType = async (req, res) => {
  try {
    const { name } = req.body;
    const existingType = await Type.findOne({ name });
    if (existingType) {
      return res.status(400).json({ error: "Already added" });
    }

    const type = await Type.create({ name });
    res.status(200).json(type);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getType = async (req, res) => {
  try {
    const type = await Type.find();
    res.status(200).json(type);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createPackage = async (req, res) => {
  try {
    const { name, price, broadcasterRef } = req.body;
    const package = await Package.create({ name, price, broadcasterRef });
    res.status(200).json(package);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPackage = async (req, res) => {
  try {
    const package = await Package.find().populate({
      path: "broadcasterRef",
      populate: {
        path: "bouqueRef",
        populate: {
          path: "broadcasterRef",
        },
      },
    });
    res.status(200).json(package);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  // createChannel,
  getChannels,
  createLanguage,
  getLanguage,
  createBouquet,
  getBouquets,
  // createBroadcaster,
  getBroadcasters,
  createType,
  getType,
  createPackage,
  getPackage,
};
