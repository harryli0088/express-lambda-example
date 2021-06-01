// index.js
const awsServerlessExpress = require("aws-serverless-express");
const app = require("./app");
const server = awsServerlessExpress.createServer(app);

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
};