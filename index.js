const express = require("express");
const { bookRouter } = require("./routes/book.routes.js");
const cors = require("cors");

const main = async () => {
  const { connect } = require("./db.js");
  const database = await connect();

  const PORT = 3000;
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

  const router = express.Router();
  router.get("/", (req, res) => {
    res.send(`Esta es la home de nuestra API. Estamos utilizando la BBDD de ${database.connection.name} `);
  });
  router.get("*", (req, res) => {
    res.status(404).send("Lo sentimos :( No hemos encontrado la página solicitada.");
  });

  server.use("/book", bookRouter);
  server.use("/", router);

  server.listen(PORT, () => {
    console.log(`Server levantado en el puerto ${PORT}`);
  });
};

main();
