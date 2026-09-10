const { Router, text } = require("express");

const MessageRouter = Router();

MessageRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = MessageRouter;
