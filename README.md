# **Shopping List API**

## <ins>Summary</ins>

This is a RESTful API built with Express and PostgreSQL, using the node-postgres library to interact with the PostgreSQL database. The app runs on localhost port 3000.

The purpose of this API is to provide endpoints for managing a shopping list database which gives the ability to add new items, retrieve all items, retrieve a single item by ID, and delete an item. Error handling middleware has also been setup to provide the appropriate error codes and messages.

I also wanted to solidify my understanding of RESTful API's, Express, PostgreSQL having learnt them whilst enrolled on the NorthCoders Software Engineering bootcamp.

---

## <ins>Endpoints & Screenshots</ins>

NOTE: All requests and responses are in JSON format.

### `POST localhost:3000/api/new-item`

![POST new item](./screenshots/post%20request%20-%20new%20item.png)

### `GET locahost:3000/api/all-items`

![GET all items](./screenshots/get%20request%20-%20all%20items.png)

### `GET localhost:3000/api/item/:item_id`

![GET single item](./screenshots/get%20request%20-%20single%20item.png)

### `DELETE localhost:3000/api/remove-item/:item_id`

![DELETE single item](./screenshots/delete%20request%20-%20single%20item.png)

---

## <ins>Tech Stack</ins>

- Express.JS
- JavaScript
- PostgreSQL

---

## <ins>Local Setup</ins>

1. Install [postgres.app](https://postgresapp.com/) which will allow you to be able to access the PostgreSQL command line interface and create the database.

NOTE: If you are on Windows OS, you can use [postgreSQL](https://www.postgresql.org/download/windows/)

2. Install [Insomnia](https://insomnia.rest/) which will allow you to make the requests to the various endpoints.

3. Open up your terminal and run `git clone https://github.com/mandeep-s1ngh/Shopping-List-API.git` to clone the repo.

4. Move the folder to your usual directory for projects (if necessary).

5. Open up the folder in your code editor of choice and run `npm install` in it's integrated terminal to install all the dependencies.

6. Then run `psql -f db.sql` to setup the database and table followed by `npm run dev` to start the app. The app will continue to run in the background and you can then test the endpoints via Insomnia.
