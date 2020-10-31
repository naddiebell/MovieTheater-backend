[![Actions Status](https://github.com/naddiebell/MovieTheater-backend/workflows/Movie_Theater_backend/badge.svg)](https://github.com/naddiebell/MovieTheater-backend/actions)

# MovieTheater-backend

Starts with `npm run dev`
Runs on Port 5709

# UsersRouter

1. Create (new user)
   Route: POST '/api/v1/users'
   Request Body: {firstName: string, lastName: string, email: string}

2. Read (all users)
   Route: GET '/api/v1/users'

3. Read (user by Id)
   Route: GET '/api/v1/users/userId'

4. Update(user by Id)
   Route: PATCH '/api/v1/users/userId'
   Request Body: {firstName: string || lastName: string || email: string}

5. Delete(user by Id)
   Route: DELETE '/api/v1/users/userId'

# ProductsRouter

1. Create (new product for a specific user)
   Route: POST '/api/v1/users/userId/products'
   Request Body: {name: string, price: number, link: string, imageUrl: string }

2. Read (all products of an specific user)
   Route: GET '/api/v1/users/userId/products'

3. Read (product by Id)
   Route: GET '/api/v1/users/userId/products/productId'

4. Update(product by Id)
   Route: PUT '/api/v1/users/userId/products/productId'
   Request Body: {name: string, price: number, link: string, imageUrl: string}

5. Delete(product by Id)
   Route: DELETE '/api/v1/users/userId/products/productId'

# AnswersRouter

1. Create (new answer for a specific product)
   Route: POST '/api/v1/users/userId/products/productId/answwers'
   Request Body: {receiverName: string, receiverMessage: string, results: ["question": number, "selectedOption": string, "freeText": number] }
2. Read (all answers for a specific product )
   Route: GET '//api/v1/users/userId/products/productId/answers'
   Response Body: {[ Array of answers ]}

# QuestionsRouter

1. Read (all questions)
   Route: GET '/api/v1/questions'
   Response Body: {[ Array of Objects with all questions ] }

## Seed Database with questions

In the seed-db folder you will find the import script and a folder named `data`, with all the `questions` that will be saved in db. Every time you run this file, this specific collection of questions will be drop and created again.

To insert/update all questions in database:

1. npm install
2. npm run seedDb

# Cloudinary Setup

Cloudinary offers a solution to web application's entire image management pipeline.
######Setup

1. npm install cloudinary

2. Create an account in Cloudinary
3. Follow Cloudinary's Node.js SDK link (https://cloudinary.com/documentation/node_integration#node_js_getting_started_guide)
4. Provide CLOUDINARY_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in `.env` file.

# Slösa smartare backend

####Setup  
Eslint must be installed globally: `npm install -g eslint`

Database MongoDB: add connection string to .env file:

1. Use MongoDB database to store data.

- Follow the [MongoDB Atlas registration link](https://www.mongodb.com/cloud/atlas/register).
- Fill all mandatory fields and click create account button.
- Choose "Starter Cluster" option and click Create a cluster.
- The next screen choose: cloud provider, region and click "Create Cluster" button.
- Click Security - Database access tab.
- Click Add new user button.
- Choose method - Password and fill the username and the password fields (remember them, you will use them to connect mongodb database).
- User Privileges - Set read and write to any database.
- Click "Add user" button.
- Click Security - Network Access tab.
- Click "Add IP Address" button.
- Click "Allow access from anywhere" button.
- Click "Confirm" button.
- Generate the connect string, by the following: in Atlas - Clusters tab click "Connect" button.
- On Modal window (Connect to Cluster) click "Connect your Application" button: Copy the connection string.
- Replace username,password and dbname in the connection string.

2. Create `.env` file in the project directory. Add MONGO_URI='YOUR CONNECTION STRING HERE' to `.env` file like:
   MONGO_URI='mongodb+srv://USERNAME:YOURPASSWORD@cluster.i3dl2.mongodb.net/YOURDBNAME?retryWrites=true&w=majority' or local connection: MONGO_URI="mongodb://localhost/dev-cinema"
3. Create `.env.test` file in the project directory. Add MONGO_URI='YOUR CONNECTION STRING HERE' to `.env.test` The database must have a different name than in step 2. See below examples.
   Atlas example: MONGO_URI='mongodb+srv://USERNAME:YOURPASSWORD@cluster.i3dl2.mongodb.net/test-cinema?retryWrites=true&w=majority'  
   Or local connection example: MONGO_URI="mongodb://localhost/test-cinema"
