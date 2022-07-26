const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    category: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array }
  },
  { timestamps: true } //created at and updated at time stamps
);

module.exports = mongoose.model("List", ListSchema);
