# fintech, #Node, #React, #Typescript, #NoSql, MUI, #Machine_Learning

INSTRUCTIONS FOR DEV AND PRODUCTION DEPLOY OF Finance dashboard produced with Node, React, Typescript, NoSql, MUI &amp; Machine Learning

DEV ENVIRONMENT

The process here is in the root folder go to terminal and type 

npm init

This will be for Node for the whole project and will have its own package.son

Then in the backend run in terminal

npm start

Then in frontend run in terminal

npm run dev

Commit your code to your github account repository

Get your mongodb account ready for its connection string ie MONGODB_URI, Note for you need to have your database name, because immediately after the last "/" you will need to put your database name. Follow MongoDB manual if necessary to get it and where to place it. Or your tutor.

In render.com in the settings and env variables, enter the appropriate information. 


BUILD AND DEPLOY

If you are using npm then change yarn commands to npm
The default for npm build and deploy is. Note with yarn it automatically installs with just yarn.

npm install // build command

npm start // start command

In Environment Variables
Enter your:

MONGODB_URI


PRODUCTION ENVIRONMENT

Publish To Render.com account
    a. create and config node project
    b. serve build folder in frontend folder
    c. Create Render account
	d. connect it to github
    e. Create mongodb atlas database
    f. Set database connection in Render env variables
    g. Commit and push
	
The process here is in the root folder go to terminal and type 

npm init

This will be for Node for the whole project and will have its own package.son

Then in the backend run in terminal

npm start

Then in frontend run in terminal

npm run build

Commit your code to your github account repository

Get your mongodb account ready for its connection string ie MONGODB_URI, Note for you need to have your database name, because immediately after the last "/" you will need to put your database name. Follow MongoDB manual if necessary to get it and where to place it. Or your tutor.

In render.com in the settings and env variables, enter the appropriate information. 


BUILD AND DEPLOY

If you are using npm then change yarn commands to npm
The default for npm build and deploy is. Note with yarn it automatically installs with just yarn.

npm install

npm start

In Environment Variables
Enter your:

JWT_SECRET
MONGODB_URI

Then deploy, it will deploy automatically anytime you push code to github.

Note: With render there might be an issue with Mongoose currency versioning at the moment or just server load issues, but it will run perfectly on your localhost.
Feel free to use the issues tracker to notify me and also to give positive feedback here as well. Thanks
