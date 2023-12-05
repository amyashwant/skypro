const router = require("express").Router();

const {
  registerController,
  authController,
  allUsers,
} = require("../controllers/userControllers");

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerController);
// router.route("/api/register").post(registerController);
router.post("/login", authController);

router.route("/").get(protect, allUsers);

module.exports = router;
