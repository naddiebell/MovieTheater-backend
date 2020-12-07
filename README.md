[![Actions Status](https://github.com/naddiebell/MovieTheater-backend/workflows/Movie_Theater_backend/badge.svg)](https://github.com/naddiebell/MovieTheater-backend/actions)

# MovieTheater-backend

Starts with `npm run dev`
Runs on Port 5709

# TicketsRouter

1. Create new ticket
   Route: POST '/api/v1/tickets'
   Request Body: {firstName: string, lastName: string, email: string}

2. Read (all tickets)
   Route: GET '/api/v1/tickets'

3. Read (ticket by Id)
   Route: GET '/api/v1/tickets/:ticketId'

4. Validate a ticket has been paid
   Route: PUT '/api/v1/tickets/:ticketId/validate'
   Request Body: {firstName: string || lastName: string || email: string}

5. Delete(user by Id)
   Route: DELETE '/api/v1/tickets/:ticketId'


# Movie Theater backend

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
