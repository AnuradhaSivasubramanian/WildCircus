const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Admin = new Schema(
  {
    name: { type: String, required: true },
    email: { type: [String], required: true },
    password: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("admin", Admin);
