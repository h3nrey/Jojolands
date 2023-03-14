const mongoose = require("mongoose");

const standSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  name: {
    type: String,
    required: [true, "Please add the stand name"]
  },
  standMaster: {
    type: String,
    required: [true, "Please add the stand master of the stand"]
  },
  type: {
    type: String,
    required: [true, "Please add the stand type"]
  },
  stats: {
    type: String,
    required: [true, "Please add the stand stats"]
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model("Stand", standSchema)