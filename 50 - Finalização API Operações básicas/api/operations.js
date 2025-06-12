const { sum, sub, mult, div } = require("../func");

function sumApi(req, res) {
  const { num, num2 } = req.body;
  const resultSum = sum(num, num2);

  res.status(200).send({ resultSum });
}

function subApi(req, res) {
  const { num, num2 } = req.body;
  const resultSub = sub(num, num2);

  res.status(200).send({ resultSub });
}

function apiMult(req, res) {
  const { num, num2 } = req.body;
  const resultMult = mult(num, num2);

  res.status(200).send({ resultMult });
}

function apiDiv(req, res) {
  const { num, num2 } = req.body;
  const resultDiv = div(num, num2);

  res.status(200).send({ resultDiv });
}

module.exports = {
    sumApi,
    subApi,
    apiMult,
    apiDiv
};
