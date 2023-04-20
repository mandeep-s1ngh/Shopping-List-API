const db = require("../db");

exports.insertItem = (item_name) => {
  // safely create dynamic parameterised SQL queries by providing two arguments - 1. query string, 2.array containing the value/s
  return (
    db
      .query(
        `INSERT INTO items
        (item_name) VALUES ($1) RETURNING *;`,
        [item_name]
      )
      // rows will contain the rows added to the database
      .then(({ rows }) => {
        return rows[0];
      })
  );
};

exports.fetchItems = () => {
  return db.query(`SELECT * FROM items;`).then((result) => {
    return result.rows;
  });
};

exports.fetchSingleItem = (item_id) => {
  return db
    .query(`SELECT item_name FROM items WHERE item_id = $1;`, [item_id])
    .then((result) => {
      if (result.rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: "No item with that ID found. Please try a different ID number",
        });
      }
      return result.rows;
    });
};

exports.removeItemById = (item_id) => {
  return db
    .query(`DELETE FROM items WHERE item_id = $1 RETURNING *;`, [item_id])
    .then((result) => {
      if (result.rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: "No item with that ID found. Please try a different ID number",
        });
      }
    });
};
