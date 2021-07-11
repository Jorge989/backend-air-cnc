const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3333;
const HOST = `http://localhost:${PORT}`;
mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0.yv5la.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);
// const server = https.createServer(app);
app.listen(PORT, () => console.log("🔥 Servidor rodando!"));
// app.listen(3333, console.log("🔥 Servidor rodando!"));
