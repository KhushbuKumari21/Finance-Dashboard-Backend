const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const controller = require("../controllers/recordController");
const { validateRecord } = require("../utils/validators");

// CREATE record (Admin only + validation)
router.post(
  "/",
  auth,
  role("admin"),
  validateRecord,
  controller.createRecord
);

// GET all records (All logged-in users)
router.get(
  "/",
  auth,
  controller.getRecords
);

// UPDATE record (Admin only + validation)
router.put(
  "/:id",
  auth,
  role("admin"),
  validateRecord,
  controller.updateRecord
);

// DELETE record (Admin only)
router.delete(
  "/:id",
  auth,
  role("admin"),
  controller.deleteRecord
);

module.exports = router;