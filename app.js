const myReqLogger = require("./Utilities/RequestLogger");
const express = require("express");
const route = require("./Routes/routing.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.Port || 5000;
app.get("/", (request, response) => {
  response.send("<h1>Awesome!!</h1>");
});

//middleware
app.use(myReqLogger);
app.use("/", route);
//route

app.listen(port, () => {
  console.log(`App running in port ${port}...`);
});
