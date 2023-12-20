const Channel = require("../models/packagesPageModel/channelModel");
const Bouquet = require("../models/packagesPageModel/bouquetModel");
const Broadcaster = require("../models/packagesPageModel/broadcasterModel");
const Language = require("../models/packagesPageModel/languageModel");
const Type = require("../models/packagesPageModel/typeModel");
const Package = require("../models/packagesPageModel/packageModel");
const PackageBouque = require("../models/packagesPageModel/packageBouqueModel");
const BouqueChannel = require("../models/packagesPageModel/bouqueChannel");
const Category = require("../models/packagesPageModel/categoryModel");
const mongoose = require("mongoose");
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
    // .populate("type").populate("language");
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
  const { name, price, broadcasterRef } = req.body;
  try {
    const existingBouquet = await Bouquet.findOne({ name });
    if (existingBouquet) {
      return res.status(400).json({ error: "Bouque Already Added" });
    }

    const bouquet = await Bouquet.create({
      name,
      price,
      // channelRef,
      broadcasterRef,
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
    const bouquets = await Bouquet.find().populate("broadcasterRef");
    // .populate("broadcasterRef")
    // .populate({
    //   path: "channelRef",
    //   // select: "name",
    //   populate: {
    //     path: "language",
    //   },
    // });
    // .populate({
    //   path: "broadcasterRef",
    // });

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
    const broadcasters = await Broadcaster.find();
    // .populate({
    //   path: "bouqueRef",
    //   populate: {
    //     path: "broadcasterRef",
    //   },
    // });

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
  const { name } = req.body;
  try {
    // const existingPackage = await Package.findOne({ name });
    const existingPackage = await Package.findOne({
      name: { $regex: new RegExp(name, "i") },
    });
    if (existingPackage) {
      return res.status(400).json({ error: "Package Already Added" });
    }

    const package = await Package.create({ name });
    res.status(200).json(package);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPackage = async (req, res) => {
  try {
    const package = await Package.find();
    // .populate({
    //   path: "broadcasterRef",
    //   populate: {
    //     path: "bouqueRef",
    //     populate: {
    //       path: "channelRef",
    //     },
    //   },
    // });
    res.status(200).json(package);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const createPackageBouque = async (req, res) => {
//   const { packageRef, broadcasterRef, bouqueRef } = req.body;
//   try {
//     const existingPackageBouque = await PackageBouque.findOne({ packageRef });
//     if (existingPackageBouque) {
//       return res.status(400).json({ error: "Duplicate Package! Not Allowed" });
//     }

//     const packageBouque = await PackageBouque.create({
//       packageRef,
//       broadcasterRef,
//       bouqueRef,
//     });
//     res.status(200).json(packageBouque);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
//-----------------------working normally but not corresponding
// const createPackageBouque = async (req, res) => {
//   try {
//     const { packageRef, broadcasterRef, bouqueRef } = req.body;

//     const packageBouques = [];

//     const broadcasterRefs = Array.isArray(broadcasterRef)
//       ? broadcasterRef
//       : [broadcasterRef];

//     const bouqueRefs = Array.isArray(bouqueRef) ? bouqueRef : [bouqueRef];

//     broadcasterRefs.forEach((broadcasterId) => {
//       bouqueRefs.forEach((bouqueId) => {
//         const packageBouque = new PackageBouque({
//           packageRef,
//           broadcasterRef: broadcasterId,
//           bouqueRef: bouqueId,
//         });
//         packageBouques.push(packageBouque.save());
//       });
//     });

//     await Promise.all(packageBouques);

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const createPackageBouque = async (req, res) => {
//   try {
//     const { packageRef, broadcasters } = req.body;

//     const packageBouques = [];

//     for (const broadcaster of broadcasters) {
//       const { broadcasterRef, selectedBouques } = broadcaster;

//       for (const bouqueRef of selectedBouques) {
//         const packageBouque = new PackageBouque({
//           packageRef,
//           broadcasterRef,
//           bouqueRef,
//         });
//         packageBouques.push(packageBouque.save());
//       }
//     }

//     await Promise.all(packageBouques);

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const createPackageBouque = async (req, res) => {
  try {
    const { packageRef, broadcasters } = req.body;

    // Ensure broadcasters is an array
    const broadcastersArray = Array.isArray(broadcasters)
      ? broadcasters
      : [broadcasters];

    const packageBouques = [];

    for (const broadcaster of broadcastersArray) {
      const { broadcasterRef, selectedBouques } = broadcaster;

      for (const bouqueRef of selectedBouques) {
        const packageBouque = new PackageBouque({
          packageRef,
          broadcasterRef,
          bouqueRef,
          // broadcasterRef: mongoose.Types.ObjectId(broadcasterRef), // Convert to ObjectId
          // bouqueRef: mongoose.Types.ObjectId(bouqueRef), // Convert to ObjectId
        });
        packageBouques.push(packageBouque.save());
      }
    }

    await Promise.all(packageBouques);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPackageBouque = async (req, res) => {
  try {
    const packageBouque = await PackageBouque.find();
    // .populate("packageRef")
    // .populate("broadcasterRef")
    // .populate("bouqueRef");
    res.status(200).json(packageBouque);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createBouqueChannel = async (req, res) => {
  const { bouqueRef, channelRef } = req.body;
  try {
    const bouqueChannel = await BouqueChannel.create({ bouqueRef, channelRef });
    res.status(200).json(bouqueChannel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getBouqueChannel = async (req, res) => {
  try {
    const bouqueChannel = await BouqueChannel.find();
    res.status(200).json(bouqueChannel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
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
  createPackageBouque,
  getPackageBouque,
  createBouqueChannel,
  getBouqueChannel,
  createCategory,
  getCategory,
};
