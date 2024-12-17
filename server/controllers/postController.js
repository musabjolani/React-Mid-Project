const express = require("express");
const router = express.Router();
const postServ = require("../services/postService");

router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;
    res.json(await postServ.getPostsByUserId(userId));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await postServ.getPostById(id));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const post = req.body;
    res.json(await postServ.addPost(post));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    res.json(await postServ.updatePost(id, post));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await postServ.deletePost(id));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

module.exports = router;
