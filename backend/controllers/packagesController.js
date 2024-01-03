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
      console.log("existingLanguage>>/>>>", existingLanguage);

      if (existingLanguage.isDeleted === true) {
        await Language.findByIdAndUpdate(existingLanguage._id, {
          isDeleted: false,
        });
        return res.status(200).json("success");
        // return res.status(400).json({ error: "Already added" });
      }
      return res.status(400).json({ error: "Already added" });
    }

    const language = await Language.create({
      name,
      isActive: true,
      isDeleted: false,
    });
    res.status(200).json(language);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLanguage = async (req, res) => {
  try {
    const language = await Language.find({ isActive: true, isDeleted: false });
    res.status(200).json(language);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateLanguage = async (req, res) => {
  const { name } = req.body;
  try {
    const updatedItem = await Language.findByIdAndUpdate(
      req.params.itemId,
      { name: name },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(400).json({ error: "Item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const languageId = req.params.id;
    const updatedLanguage = await Language.findByIdAndUpdate(
      languageId,
      { isDeleted: true },
      { new: true }
    );

    if (!updatedLanguage) {
      return res.status(404).json({ error: "Language not found" });
    }

    res.status(200).json(updatedLanguage);
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
  const { name, packagePrice } = req.body;
  try {
    // const existingPackage = await Package.findOne({ name });
    const existingPackage = await Package.findOne({
      name: { $regex: new RegExp(name, "i") },
    });
    if (existingPackage) {
      return res.status(400).json({ error: "Package Already Added" });
    }

    const package = await Package.create({ name, packagePrice });
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
    const packageBouque = await PackageBouque.find()
      .populate("packageRef")
      .populate("broadcasterRef")
      .populate("bouqueRef");
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
    const bouqueChannel = await BouqueChannel.find()
      .populate("bouqueRef")
      .populate({
        path: "channelRef",
        populate: {
          path: "language",
        },
      });
    res.status(200).json(bouqueChannel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ error: "Already added" });
    }
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
  //------------------------------------------------------
  updateLanguage,
  deleteLanguage,
};
