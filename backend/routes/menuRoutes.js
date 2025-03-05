const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");
// Create (POST)
router.post("/joe", menuController.createMenuItem);

// Read (GET)
router.get("/", menuController.getAllMenuItems);
router.get("/", menuController.getMenuItemById);

// Update (PUT)
router.put("/:id", menuController.updateMenuItem);

// Delete (DELETE)
router.delete("/:id", menuController.deleteMenuItem);

module.exports = router;
