var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer();
const TreeController = require("../Controller/TreeController");

router.get("/", TreeController.getAllTrees);
router.get("/create", TreeController.getCreateTreeForm);
router.post("/create", upload.single("image"), TreeController.createTree);
router.get("/edit/:id", TreeController.getEditTreeForm);
router.post("/edit/:id", upload.single("image"), TreeController.updateTree);
router.post("/delete/:id", TreeController.resetTree);

module.exports = router;
