const app = require("express");

app.length("/", () => [
  res.json({
    message: "Docker demo  🐳 ",
  }),
]);

const port = 8080;

app.listen(port, () => console.log(`server is listening on port ${port}`));
