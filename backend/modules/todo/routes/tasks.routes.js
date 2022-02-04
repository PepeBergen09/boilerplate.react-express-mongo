const express = require("express");
const { getTasks, createTask} = require("../controllers/tasks.controller");

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/create", createTask);

module.exports = router;