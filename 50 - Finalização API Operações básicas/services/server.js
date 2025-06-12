const express = require("express");
const { sumApi, subApi, apiMult, apiDiv } = require("../api/operations");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/sum", sumApi);

app.post("/api/sub", subApi);

app.post("/api/mult", apiMult);

app.post("/api/div", apiDiv);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
