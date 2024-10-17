# 🍲 Recipe API

A **RESTful API** built with **Node.js (Express.js)** and **MongoDB** for managing recipes. This API supports full **CRUD operations** (Create, Read, Update, Delete), along with search functionality to query recipes by title or ingredients.

---

## 🚀 Features

- **CRUD Operations**: Create, retrieve, update, and delete recipes.
- **Search Functionality**: Search for recipes by title or ingredients.
- **Timestamps**: Automatically track creation and last update times for each recipe.
- **MongoDB**: NoSQL database used to store recipe data.
- **Mongoose**: ODM (Object Data Modeling) library for schema modeling and interaction with MongoDB.

---

## 🛠️ Requirements

- **Node.js** (v14+)
- **MongoDB** (Local instance or MongoDB Atlas)
- **Postman** (for API testing)

---

## 🧑‍💻 Installation

1. **Clone this repository:**

    ```bash
    git clone https://github.com/yourusername/recipe-api.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd recipe-api
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    - Create a `.env` file in the root directory.
    - Add the following environment variables:

      ```bash
      MONGO_URI=mongodb://localhost:27017/recipesDB
      PORT=5000
      ```

    > Note: Replace the MongoDB URI with your own if using MongoDB Atlas.

5. **Start the server:**

    ```bash
    npm start
    ```

    The API should now be running on [http://localhost:5000](http://localhost:5000).

---

## 📋 API Endpoints

### Base URL: `/api`

1. **Get All Recipes**

   - **Endpoint**: `GET /api/recipes`
   - **Description**: Retrieve a list of all recipes.
   - **Response Example**:

     ```json
     [
       {
         "_id": "609adf2f1c2b9a0017d3e1a4",
         "title": "Spaghetti Carbonara",
         "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
         "instructions": "Boil spaghetti. Fry pancetta. Mix with eggs and cheese. Toss and serve.",
         "image": "http://example.com/carbonara.jpg",
         "createdAt": "2021-05-12T10:05:35.920Z",
         "updatedAt": "2021-05-12T10:05:35.920Z",
         "__v": 0
       }
     ]
     ```

2. **Get Recipe by ID**

   - **Endpoint**: `GET /api/recipes/:id`
   - **Description**: Retrieve details for a specific recipe.
   - **Example**: `GET /api/recipes/609adf2f1c2b9a0017d3e1a4`

3. **Create a Recipe**

   - **Endpoint**: `POST /api/recipes`
   - **Description**: Add a new recipe.
   - **Request Body**:

     ```json
     {
       "title": "Spaghetti Carbonara",
       "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
       "instructions": "Boil spaghetti. Fry pancetta. Mix with eggs and cheese. Toss and serve.",
       "image": "http://example.com/carbonara.jpg"
     }
     ```

   - **Response**: `201 Created` with the created recipe data.

4. **Update a Recipe**

   - **Endpoint**: `PUT /api/recipes/:id`
   - **Description**: Update an existing recipe.
   - **Request Body Example**:

     ```json
     {
       "title": "Spaghetti Carbonara (Updated)",
       "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper", "Garlic"],
       "instructions": "Boil spaghetti. Fry pancetta with garlic. Mix with eggs and cheese. Toss and serve."
     }
     ```

5. **Delete a Recipe**

   - **Endpoint**: `DELETE /api/recipes/:id`
   - **Description**: Delete a specific recipe.
   - **Response Example**:

     ```json
     {
       "message": "Recipe deleted"
     }
     ```

6. **Search Recipes**

   - **Endpoint**: `GET /api/recipes/search?query=<search_term>`
   - **Description**: Search for recipes by title or ingredients.
   - **Example**: `GET /api/recipes/search?query=spaghetti`

---

## 🧪 Running Tests with Postman

1. **Open Postman** and create a new request.
2. Enter the **API URL** and select the appropriate **HTTP method** (GET, POST, PUT, DELETE).
3. For **POST** and **PUT** requests:
   - Select the **Body** tab.
   - Choose **raw** and set the format to **JSON**.
   - Then, provide the recipe data as JSON.
4. **Send the request** and view the response.


---

## 🛠️ Technologies Used

- **Node.js**: Server-side JavaScript environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM library for schema modeling and MongoDB interaction.

---

## 👥 Contributing

Feel free to submit issues or pull requests if you'd like to contribute to the project. All contributions are welcome!

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 📧 Contact

If you have any questions or suggestions, please contact me at [pranjalk449@gmail.com](mailto:pranjalk449@gmail.com).

