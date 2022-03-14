const app = require("express");

app.get("/", () => [
  res.json({
    message: "Docker demo  🐳 ",
  }),
]);

const port = process.env.port || 8080;

app.listen(port, () => console.log(`server is listening on port ${port}`));
