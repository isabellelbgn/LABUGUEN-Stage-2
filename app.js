const express = require("express");
const app = express();
const serverPort = 3000;

app.get("/programming-language", (request, response) => {
  response.send("JavaScript");
});

app.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}`);
});
