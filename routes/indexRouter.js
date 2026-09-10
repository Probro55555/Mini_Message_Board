const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "I am Batman",
    user: "Bruce Wayne",
    added: new Date(),
  },
];
const { Router, text } = require("express");

const IndexRouter = Router();

IndexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

IndexRouter.get("/messages/:message_id", (req, res) => {
  const { message_id } = req.params;
  res.render("indi_msg", { message: messages[message_id] });
});

IndexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.msg1,
    user: req.body.name1,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = IndexRouter;
