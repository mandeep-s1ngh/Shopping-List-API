const {
  insertItem,
  fetchItems,
  fetchSingleItem,
  removeItemById,
} = require("../models/model");

exports.createItem = (req, res, next) => {
  // the body of the request will hold the item being created so we use req.body
  const { item_name } = req.body;
  insertItem(item_name)
    .then((item) => {
      res.status(201).send({ item });
    })
    // catch errors performing the db query and pass control to the next middleware function in the chain
    .catch((err) => {
      next(err);
    });
};

exports.getAllItems = (req, res, next) => {
  fetchItems().then((items) => {
    res.status(200).send({ items });
  });
};

exports.getSingleItem = (req, res, next) => {
  // item_id has been defined in the endpoint as a parameter and will be held in the req.params object
  const { item_id } = req.params;
  fetchSingleItem(item_id)
    .then((item) => {
      res.status(200).send({ item });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteSingleItem = (req, res, next) => {
  const { item_id } = req.params;
  removeItemById(item_id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      next(err);
    });
};
