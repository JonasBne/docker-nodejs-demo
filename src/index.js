const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ message: "Docker is easy 🐳" }));

const port = process.env.port || 8080;

app.listen(port, () => console.log(`server is listening on port ${port}`));
