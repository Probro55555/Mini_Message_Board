const express = require("express");
const app = express();
// app.js
const path = require("node:path");

// app.js
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const IndexRouter = require("./routes/indexRouter");
const MessageRouter = require("./routes/messagesRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", IndexRouter);
app.use("/new", MessageRouter);

// app.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log("Listening on Port 3000");
});
