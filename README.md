# express-lambda-example

![Screenshot](/screenshot.png)

I created a Serverless Node.js Express application that reads and writes data to a MongoDB instance. I followed this tutorial to learn more about AWS Lambda and Serverless functions
https://www.sitepoint.com/a-guide-to-serverless-deployment-with-express-and-mongodb/

I also modified the HTML/CSS and added a deploy script with esbuild (https://www.npmjs.com/package/esbuild).

## Getting Started
1. Clone this repo
2. ```npm i``` to install the dependencies
3. ```npm start``` to start the app in development mode (assumes you have a local Mongo DB running)

## Deploying
This repo is configured to automatically deploy after pushing to the main remote branch. Alternatively, you can modify ```exampleDeploy.txt```, rename it to a ```.sh``` file, then run it.