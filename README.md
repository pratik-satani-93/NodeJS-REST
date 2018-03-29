# NodeJS-REST
Simple REST API with NodeJS


In order to run the project you need to have Node.js, Express and MongoDb up and running in your machine.

If you don't have these installed follow these steps.

Install Node.js
----------------

Go to "https://nodejs.org/en/" and download the LTS vesrsion.

Install Express Generator
-------------------------

Go to terminal or command prompt and install it globally. Type the following command:

npm install -g express-generator

Install MongoDB
---------------

Go to "https://www.mongodb.com/download-center?jmp=nav#community" and install the community server version for you machine.

Now we are all set to run the project!

How to run the Project?
-----------------------

--> In a command prompt window, navigate to wherever you keep MongoDB, you should be in the "bin" folder of your mongoDB.(for example: C:\mongodb\bin) and type: 

mongod --dbpath c:\downloads\nodetest2\data


--> Here the path is of the "data" folder in the project "nodetest2". 

Note: In case of MAC if you had installed mongodb globally than go to the root folder of your system from your terminal and directly type the above command. Path in case of MAC will have forward slash i.e. mongod --dbpath /Users/Pratik/nodetest2/data

--> Let that terminal be open as it it necessary for connection with MongoDB.

--> Open the new terminal window in the project directory and type the following command:

npm start

And the project should be running. Go to the browser and navigate to "http://localhost:3000".

Functionalities
---------------

--> Listing user. Users will be listed automatically as you add it.

--> Add a user

--> If you try to add another user with same "username" than it will show error. Note that username are case sensitive i.e. "Pratik" and "pratik" are different username and it will not generate error.

--> If you want to check the info of the particular user than navigate to "http://localhost:3000/users/username" i.e. if the username is "pratik" than "http://localhost:3000/users/pratik" which will show info of that user in JSON format.

--> Delete a user


