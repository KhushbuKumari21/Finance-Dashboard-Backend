const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const controller = require("../controllers/userController");

router.get("/", auth, role("admin"), controller.getUsers);
router.put("/:id/role", auth, role("admin"), controller.updateUserRole);
router.put("/:id/status", auth, role("admin"), controller.toggleUserStatus);

module.exports = router;