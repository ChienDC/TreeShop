const Tree = require("../Models/TreeCollection");

exports.getAllTrees = async (req, res) => {
  try {
    const trees = await Tree.find();
    res.render("trees/index", {
      trees: trees,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCreateTreeForm = (req, res) => {
  res.render("trees/create");
};

exports.createTree = async (req, res) => {
  const { treename, description } = req.body;
  const image = req.file ? req.file.buffer.toString("base64") : null;
  try {
    const newTree = new Tree({ treename, description, image });
    await newTree.save();
    res.redirect("/trees");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEditTreeForm = async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);
    res.render("trees/edit", { tree: tree });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTree = async (req, res) => {
  try {
    const { treename, description } = req.body;
    let updateData = { treename, description };

    if (req.file) {
      updateData.image = req.file.buffer.toString("base64");
    }

    await Tree.findByIdAndUpdate(req.params.id, updateData);
    res.redirect("/trees");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.resetTree = async (req, res) => {
  try {
    await Tree.findByIdAndDelete(req.params.id);
    res.redirect("/trees");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
