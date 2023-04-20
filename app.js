const express = require("express");
const app = express(); // starts our express app
const port = 3000;

const {
  createItem,
  getAllItems,
  getSingleItem,
  deleteSingleItem,
} = require("./controllers/controller");

const {
  handle404nonExistentPaths,
  handleServerError,
  handleCustomErrors,
  handlePostgreErrors,
} = require("./errors/errorHandling");

// parses incoming request bodies that are in JSON format. this makes sure it is parsed correctly before any routes are matched
app.use(express.json());

// endpoints
app.get("/api/all-items", getAllItems);
app.get("/api/item/:item_id", getSingleItem);
app.post("/api/new-item", createItem);
app.delete("/api/remove-item/:item_id", deleteSingleItem);

// error handling
app.use(handle404nonExistentPaths);
app.use(handleCustomErrors);
app.use(handlePostgreErrors);

// 500 error handler must be defined last
app.use(handleServerError);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

module.exports = app;
