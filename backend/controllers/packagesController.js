const Channel = require("../models/packagesPageModel/channelModel");
const Bouquet = require("../models/packagesPageModel/bouquetModel");
const Broadcaster = require("../models/packagesPageModel/broadcasterModel");

// channel Controller--------------------------------------------------------------------------
const createChannel = async (req, res) => {
  try {
    const { name, description } = req.body;

    const channel = await Channel.create({ name, description });
    res.status(200).json(channel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.status(200).json(channels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Bouque Controller------------------------------------------------------------------------------------
const createBouquet = async (req, res) => {
  try {
    const { name, channels, price } = req.body;
    const bouquet = await Bouquet.create({ name, channels, price });
    res.status(200).json(bouquet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBouquets = async (req, res) => {
  try {
    const bouquets = await Bouquet.find().populate("channels");
    res.status(200).json(bouquets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Broadcaster-----------------------------------------------------------------------------------
const createBroadcaster = async (req, res) => {
  try {
    const { name, channels, bouquets } = req.body;
    const broadcaster = await Broadcaster.create({ name, channels, bouquets });
    res.status(200).json(broadcaster);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBroadcasters = async (req, res) => {
  try {
    const broadcasters = await Broadcaster.find()
      .populate("channels")
      .populate("bouquets");
    res.status(200).json(broadcasters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createChannel,
  getChannels,
  createBouquet,
  getBouquets,
  createBroadcaster,
  getBroadcasters,
};
