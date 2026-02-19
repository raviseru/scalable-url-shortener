const Url = require("../models/url.model");
const encodeToBase62 = require("../utils/base62");
const getNextSequence = require("../utils/getNextSequence");

exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "Original URL is required" });
    }

    // 1️⃣ Get next sequence number
    const sequence = await getNextSequence("url");

    // 2️⃣ Convert to Base62
    const shortCode = encodeToBase62(sequence);

    // 3️⃣ Save in DB
    const newUrl = await Url.create({
      originalUrl,
      shortCode,
    });

    res.status(201).json({
      shortUrl: `${req.protocol}://${req.get("host")}/${shortCode}`,
      data: newUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
