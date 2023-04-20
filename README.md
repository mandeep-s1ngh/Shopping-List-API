# **Shopping List API**

## <ins>Summary</ins>

This is a restful API built with Express and PostgreSQL, using the node-postgres library to interact with the database. It uses localhost to connect to the PostgreSQL server.

The purpose of this API is to provide endpoints for managing a shopping list database which gives the ability to add new items, retrieve all items, retrieve a single item by ID, and delete an item. Error handling middleware has also been setup to provide the appropriate error codes and messages.

I also wanted to solidify my understanding of API's and that tech stack having learnt them whilst enrolled on the NorthCoders Software Engineering bootcamp.

## <ins>List of endpoints</ins>

- `POST /api/new-item`
- `GET api/all-items`
- `GET api/item/:item_id`
- `DELETE api/remove-item/:item_id`

All requests and responses are in JSON format.

## <ins>Local Setup</ins>

I used [postgres.app](https://postgresapp.com/) to be able to access the PostgreSQL command line interface and create the database. I also used [Insomnia](https://insomnia.rest/) to make the requests to the various endpoints.

Once you have those setup, feel free to clone the repo and install the dependencies with `npm install`

You can then run `psql -f db.sql` in the terminal from the root of the project to setup the database and table followed by `npm run dev` to start the app and test the endpoints via Insomnia.
