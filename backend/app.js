const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const routesUser = require("./src/routes/users");
const routesFavourites = require("./src/routes/favourites");
const routesPortfolio = require("./src/routes/portfolio");
const routesDescriptions = require("./src/routes/descriptions");

const { port } = require("./src/config");

const app = express();

app.use(cors(), express.json(), cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", routesUser);
app.use("/", routesFavourites);
app.use("/", routesPortfolio);
app.use("/", routesDescriptions);

app.all("*", (req, res) => {
  res.send("Something wrong..");
});

app.listen(port, () => {
  console.log(
    `My backend app is running and listening to port http://localhost:${port}/`
  );
});
