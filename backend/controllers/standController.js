const asyncHandler = require("express-async-handler");

const Stand = require("../models/StandModel");
const User = require("../models/userModel");

// @desc Get stand from a specific user
// @route Get /api/Stands
// @acess Private
const getStandFromUser = asyncHandler(async(req,res) => {
  const Stands = await Stand.find({ user: req.user.id });

  res.status(200).json(Stands);
})

// @desc Get stand from a specific user
// @route Get /api/Stands
// @acess Public
const getStands = asyncHandler(async(req,res) => {
  const stands = await Stand.find();

  res.status(200).json(stands);
})

// @desc Get Stands
// @route Post /api/Stands
// @acess Private
const setStand = asyncHandler(async(req,res) => {
  if(!req.body.name){
    res.status(400)
    throw new Error("Please add name field");
  }

  const stand = await Stand.create({
    name: req.body.name,
    standMaster: req.body.standMaster,
    type: req.body.type,
    stats: req.body.stats,
    user: req.user.id,
  })

  res.status(200).json(stand);
})

// @desc Update Stand
// @route Put /api/Stands
// @acess Private
const updateStand = asyncHandler(async(req,res) => {
  const stand = await Stand.findById(req.params.id)

  if(!Stand) {
    res.status(400)
    throw new Error("Stand not found")
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if(!user){
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the Stand user
  if(stand.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized")
  }

  const updatedStand = await stand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedStand);
})

// @desc Delete Stand
// @route delete /api/Stands
// @acess Private
const deleteStand = asyncHandler(async(req,res) => {
  const stand =  await Stand.findById(req.params.id);

  if(!stand) {
    res.status(400)
    throw new Error("Stand not found")
  }
  
  const user = await User.findById(req.user.id);

  // Check for user
  if(!user){
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the Stand user
  if(stand.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized")
  }

  const deletedStand = await Stand.findByIdAndRemove(req.params.id);

  res.status(200).json(deletedStand);
})

module.exports = {
  getStands,
  getStandFromUser,
  setStand,
  updateStand,
  deleteStand,
}