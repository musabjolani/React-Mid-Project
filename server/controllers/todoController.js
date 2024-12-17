const express = require("express");
const router = express.Router();
const todoServ = require("../services/todoService");

router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;
    res.json(await todoServ.getTodosByUserId(userId));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await todoServ.getTodosById(id));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const todo = req.body;
    res.json(await todoServ.addTodo(todo));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = req.body;
    res.json(await todoServ.updateTodo(id, todo));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await todoServ.deleteTodo(id));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

module.exports = router;
