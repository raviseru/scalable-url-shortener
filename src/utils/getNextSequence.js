const Counter = require("../models/counter.model");

const getNextSequence = async (name) => {
  const counter = await Counter.findOneAndUpdate(
    { name },
    { $inc: { sequenceValue: 1 } },
    { new: true, upsert: true },
  );

  return counter.sequenceValue;
};

module.exports = getNextSequence;
