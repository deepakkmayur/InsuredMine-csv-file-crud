# InsuredMine-csv-file-crud
This project contains,
* API to upload the attached XLSX/CSV data into MongoDB.<br>
* CRUD operation for User, Account, and Policy.<br>

This project is all about uploading XLSX/CSV file and saving the data in this file to 6 different(Agent, User,Account, LOB, Carrier, Policy) collections in the database and can perform CRUD operations on
"User, Account, and Policy " collection .






# To run the project, use the following command:
 npm install<br>
 npm start

# Database
This project uses MongoDB for data storage. To connect to your own MongoDB database, update the following variable in .env file.<br>
* MONGO_CONNECT<br>
* PORT<br>



# API Endpoints
The following endpoints are available:<br>
   To upload the csv file<br>  
  * POST /api/uploadFile - It will upload the XLSX/CSV file to the project and will save to database<br> 
  
  
   User API <br>
   * POST /api/user - Create a new user and return that user<br>
   * GET/api/user/:id - Read the specific user that matches the "id" and returns that user<br>
   * PUT/api/user/:id  - Updates the user that matches the "id" and return the updated user<br>
   * DELETE/api/user/:id - Deletes the user that matches the "id"<br>
   
    Account API
   
     ("id" passed through params in ACCOUNT AND POLICY API is the generated "_id" in user collection for each user)
    
   
    
   * POST/api/account/:id  -Create new account delails if the specific user exists and return that account details<br>
   * GET/api/account/:id - Read the account details that matches the "id" if the specific user already exists and returns that account details<br>
   * PUT/api/account/:id - Updates the account that matches the "id" if the specific user already exists and return the updated account details<br>
   * DELETE/api/account/:id - Deletes the account details that matches the "id" if specific the user already exists<br>
   
   
   
   Policy API<br>
   
   
   
   * POST/api/policy/:id  -Create new policy delails if the specific user exists and return that policy details<br>
   * GET/api/policy/:id - Read the policy details that matches the "id" if the specific user already exists and returns that  policy details<br>
   * PUT/api/policy/:id - Updates the account that matches the "id" if the specific user already exists and return the updated account details<br>
   * DELETE/api/policy/:id - Deletes the account details that matches the "id" if the specific user already exists<br>
   
   
   
   



