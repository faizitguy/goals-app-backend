const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
