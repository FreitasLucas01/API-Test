const { sum, sub, mult, div } = require("../func");

function sumApi(req, res) {
  try{
    const { num, num2 } = req.body;
    const resultSum = sum(num, num2);

    res.status(200).send({ resultSum });
  }
  catch(e){
    res.status(200).send({error: e.message})
  }
}

function subApi(req, res) {
  try{
    const { num, num2 } = req.body;
    const resultSub = sub(num, num2);

    res.status(200).send({ resultSub });
  }
  catch(e){
    res.status(200).send({error: e.message})
  }
}

function apiMult(req, res) {
  try{
    const { num, num2 } = req.body;
    const resultMult = mult(num, num2);

    res.status(200).send({ resultMult });
  }
  catch(e){
    res.status(200).send({error: e.message})
  }
}

function apiDiv(req, res) {
  try{
    const { num, num2 } = req.body;
    const resultDiv = div(num, num2);

    res.status(200).send({ resultDiv });
  }
  catch(e){
    res.status(200).send({error: e.message})
  }
}

module.exports = {
    sumApi,
    subApi,
    apiMult,
    apiDiv
};
