const Channel = require("../models/packagesPageModel/channelModel");
const Bouquet = require("../models/packagesPageModel/bouquetModel");
const Broadcaster = require("../models/packagesPageModel/broadcasterModel");
const Language = require("../models/packagesPageModel/languageModel");

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
    const channels = await Channel.find();
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
    const language = await Language.create({ name });
    res.status(200).json(language);
  } catch (error) {
    console.error(error);
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
    const { name, type, channelsRef, broadcasterRef, price } = req.body;
    const bouquet = await Bouquet.create({
      name,
      type,
      channelsRef,
      broadcasterRef,
      price,
    });
    res.status(200).json(bouquet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBouquets = async (req, res) => {
  try {
    const bouquets = await Bouquet.find().populate("channelsRef");
    res.status(200).json(bouquets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Broadcaster-----------------------------------------------------------------------------------
const createBroadcaster = async (req, res) => {
  try {
    const { name, price, channelsRef, bouquetsRef } = req.body;
    const broadcaster = await Broadcaster.create({
      name,
      price,
      channelsRef,
      bouquetsRef,
    });
    res.status(200).json(broadcaster);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBroadcasters = async (req, res) => {
  try {
    const broadcasters = await Broadcaster.find()
      .populate("channelsRef")
      .populate("bouquetsRef");

    res.status(200).json(broadcasters);
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
  createBroadcaster,
  getBroadcasters,
};
