const mongoose = require("mongoose");

const treeChema = new mongoose.Schema({
  treename: {
    type: String,
    require,
  },
  description: {
    type: String,
  },
  image: { type: String },
});
const Tree = mongoose.model("Tree", treeChema);
module.exports = Tree;
