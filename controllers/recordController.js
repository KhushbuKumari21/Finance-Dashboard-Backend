const Record = require("../models/Record");

// CREATE RECORD
exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      user: req.user.id
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET RECORDS (with filter)
exports.getRecords = async (req, res) => {
  try {
    const { type, category } = req.query;

    const filter = { user: req.user.id };

    if (type) filter.type = type;
    if (category) filter.category = category;

    const records = await Record.find(filter).sort({ date: -1 });

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE RECORD 
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id }, // ownership check
      req.body,
      { new: true }
    );

    if (!record) {
      return res.status(404).json({
        message: "Record not found or not authorized"
      });
    }

    res.json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE RECORD 
exports.deleteRecord = async (req, res) => {
  try {
    const record = await Record.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id // ownership check
    });

    if (!record) {
      return res.status(404).json({
        message: "Record not found or not authorized"
      });
    }

    res.json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};