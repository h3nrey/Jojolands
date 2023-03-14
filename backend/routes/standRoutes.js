const express = require("express");
const router = express.Router();
const { getStands, getStandFromUser, setStand, updateStand, deleteStand }  = require("../controllers/standController")
const { protect } = require("../middleware/authMiddleware")

// --- Short way of doing, if have repetead route can just do this and add the functions for each HTTP methods
router.route("/all").get(getStands)
router.route("/").get(protect, getStandFromUser).post(protect, setStand);
router.route("/:id").put(protect, updateStand).delete(protect, deleteStand);

// --- Direct setting the methods ---
// router.get("/", getGoals);
// router.post("/", setGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

module.exports = router;