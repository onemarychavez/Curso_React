import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRouters from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRouters);

try {
  await db.authenticate();
  console.log("Conexion exitosa a la db");
} catch (error) {
  console.log(`El error de conexión es : ${error}`);
}
app.get("/", (req, res) => {
  res.send("Hola mundo");
});
app.listen(8000, () => {
  console.log("Corriendo en el pueso http://localhost:8000/");
});
