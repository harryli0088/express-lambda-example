// app.js
const { connect } = require("./mongoose");
const express = require("express");

let connection = null;

const app = express();
app.use(express.urlencoded({ extended: false }));



app.get("/", async (req, res) => {
  try {
    await checkConnected()
    const Note = require("./models/Note");
    const notes = await Note.find({});
    return res.status(200).send(
      `<!DOCTYPE html>
      <html lang="en">

      <head>
          <title>My Notes</title>
          <meta name='viewport' content='width=device-width,initial-scale=1'>
          <style>
              html {
                background-color: #2E4053;
                font-family: Arial;
                letter-spacing: 1px;
                color: white;
              }

              body {
                margin: 0;
                padding-left: 1em;
                padding-right: 1em;
              }
              @media only screen and (min-width: 600px) {
                body {
                  padding-left: calc(50vw - 250px - 1em);
                  padding-right: calc(50vw - 250px - 1em);
                }
              }
              @media only screen and (min-width: 1000px) {
                body {
                  padding-left: calc(50vw - 400px - 1em);
                  padding-right: calc(50vw - 400px - 1em);
                }
              }

              form {
                display: flex;
              }

              input {
                border: 2px solid #9ca3af;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                background-color: #f3f4f6;
                padding: 0.5rem;
                width: 100%;
              }

              button {
                padding-left: 2rem;
                padding-right: 2rem;
                padding-top: 7px;
                padding-bottom: 7px;
                color: white;
                font-weight: bold;
                background-color: #28B463;
                border: 2px solid #9ca3af;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
              }

              p {
                background-color: #555;
                border-radius: 5px;
                padding: 0.5rem;
              }

              a {
                color: #85C1E9;
                text-decoration: underline;
              }
              
              a:visited {
                color: #BB8FCE;
              }
          </style>
      </head>

      <body>
          <h1>My Notes</h1>

          <div><a href="https://github.com/harryli0088/express-lambda-example" target="_blank" rel="noopener noreferrer">Github Repo</a></div>
          <br/>

          <form method="POST">
              <input required name="text" rows="5" cols="50" placeholder="Create a new note"/>
              <button type="submit">Save</button>
          </form>

          <hr/>

          ${notes.map((n) => `<p>${n.text}</p>`).join("")}

      </body>

      </html>`
    );
  } catch (e) {
    return res.send(e);
  }
});

app.post("/", async (req, res) => {
  try {
    await checkConnected()
    const Note = require("./models/Note");
    const note = new Note(req.body);
    await note.save();
    return res.redirect('back');
  } catch (e) {
    return res.send(e);
  }
});

async function checkConnected() {
  if (connection === null) connection = await connect();
}

module.exports = app;