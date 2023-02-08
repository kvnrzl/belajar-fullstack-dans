const express = require("express");
const UserRoute = require("./routes/UserRoute");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("API service ready!!!");
});

app.use(UserRoute);

app.listen(port, () => {
  console.log("listening on port " + port);
});
