// resources that do not exist
exports.handle404nonExistentPaths = (req, res) => {
  res.status(404).send({ msg: "Requested Resource not found" });
};

// trying to make a get by id request but that id does not exist in the db. e.g /api/resource/999 when there are only 12 id's
exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};

// trying to make a get by id request but that id is not a valid id. e.g /api/resources/banana
exports.handlePostgreErrors = (err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({ msg: "Item ID should be a number" });
  } else if (err.code === "23502") {
    res.status(400).send({ msg: "item_name key and value are required" });
  } else if (err.code === "22001") {
    res.status(400).send({
      msg: "item_name must not be more than twelve characters in length",
    });
  } else {
    next(err);
  }
};

// general 500 error handler
exports.handleServerError = (err, req, res, next) => {
  if (err) res.status(500).send({ msg: "Internal Server Error!" });
};
