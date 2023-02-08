const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

const jsonParser = bodyParser.json();

router.get("/users/:id", getUser);

router.get("/users", getUsers);

router.post("/users", jsonParser, createUser);

router.patch("/users/:id", jsonParser, updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
