Recipe API
A RESTful API built with Node.js (Express.js) and MongoDB for managing recipes. This API supports full CRUD operations (Create, Read, Update, Delete) as well as a search functionality to query recipes by title or ingredients.

Features
CRUD Operations: Add, retrieve, update, and delete recipes.
Search Functionality: Search for recipes by title or ingredients.
Timestamps: Automatically tracks creation and last update times for each recipe.
MongoDB: Used to store recipe data.
Mongoose: Used for schema modeling and interaction with MongoDB.
Requirements
Node.js (v14+)
MongoDB (local instance or MongoDB Atlas)
Postman (for testing)
Installation
Clone this repository:

bash
Copy code
git clone https://github.com/yourusername/recipe-api.git
Navigate to the project folder:

bash
Copy code
cd recipe-api
Install dependencies:

bash
Copy code
npm install
Set up your environment variables:

Create a .env file in the root directory.

Add the following environment variable:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/recipesDB
PORT=5000
Note: Replace the MongoDB URI with your own if using MongoDB Atlas.

Start the server:

bash
Copy code
npm start
The API should now be running on http://localhost:5000.

API Endpoints
Base URL: /api
1. Get All Recipes
Endpoint: GET /api/recipes

Description: Retrieve a list of all recipes.

Response:

json
Copy code
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
2. Get Recipe by ID
Endpoint: GET /api/recipes/:id
Description: Retrieve details for a specific recipe.
Example: GET /api/recipes/609adf2f1c2b9a0017d3e1a4
3. Create a Recipe
Endpoint: POST /api/recipes

Description: Add a new recipe.

Body:

json
Copy code
{
  "title": "Spaghetti Carbonara",
  "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
  "instructions": "Boil spaghetti. Fry pancetta. Mix with eggs and cheese. Toss and serve.",
  "image": "http://example.com/carbonara.jpg"
}
Response: 201 Created with the created recipe data.

4. Update a Recipe
Endpoint: PUT /api/recipes/:id

Description: Update an existing recipe.

Example: PUT /api/recipes/609adf2f1c2b9a0017d3e1a4

Body:

json
Copy code
{
  "title": "Spaghetti Carbonara (Updated)",
  "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper", "Garlic"],
  "instructions": "Boil spaghetti. Fry pancetta with garlic. Mix with eggs and cheese. Toss and serve."
}
5. Delete a Recipe
Endpoint: DELETE /api/recipes/:id

Description: Delete a specific recipe.

Response:

json
Copy code
{
  "message": "Recipe deleted"
}
6. Search Recipes
Endpoint: GET /api/recipes/search?query=<search_term>
Description: Search for recipes by title or ingredients.
Example: GET /api/recipes/search?query=spaghetti
Running Tests with Postman
You can use Postman to test the API. Follow these steps:

Open Postman and create a new request.
Enter the API URL and select the appropriate HTTP method (GET, POST, PUT, DELETE).
For POST and PUT requests, select the Body tab, choose raw, and set the format to JSON. Then provide the recipe data.
Send the request and view the response.
Project Structure
graphql
Copy code
recipe-api/
├── config/
│   └── db.js            # MongoDB connection setup
├── controllers/
│   └── recipeController.js # Controller for handling recipe routes
├── models/
│   └── recipe.js        # Recipe schema for MongoDB
├── routes/
│   └── recipeRoutes.js  # API routes for recipes
├── app.js               # Main entry point
├── package.json         # Project metadata and dependencies
└── README.md            # Project description
Technologies Used
Node.js: Server-side JavaScript environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database.
Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
