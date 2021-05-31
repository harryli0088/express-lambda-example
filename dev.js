// dev.js

const app = require("./app");
const { connect } = require("./mongoose");

connect();

const port = 5000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});