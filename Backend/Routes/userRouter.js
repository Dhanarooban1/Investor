const Express = require("express");
const {
  signupUser,
  loginUser,
  logoutUser,
  getData,
} = require("../Controller/userController");

const router = Express.Router();
const { protectRoute } = require('../middleware/protectRoute');
const { getUserPosts } = require('../Controller/userController');

router.post("/register", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/get-data", getData);
router.get('/user-posts', protectRoute, getUserPosts);

module.exports = router;
