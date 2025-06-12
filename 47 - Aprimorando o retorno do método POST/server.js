// const { sum, sub, mult, div } = require('./func');
// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.post('/api/sum', (req, res) => {
//     const {num, num2} = req.body
//     const resultSum = sum(num, num2);
//     res.status(200).send({ resultSum })
// })

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })




const express = require('express');
const { sum, sub, mult, div } = require('./func');
const app = express();
const port = 3000;

app.use(express.json())

app.post("/api/sum", (req, res) => {
    const {num, num2} = req.body
    const resultSum = sum(num,num2)

    res.status(200).send({ resultSum })
})


app.post('/api/sub', (req, res) => {
    const {num,num2} = req.body
    const resultSub = sub(num,num2)

    res.status(200).send({ resultSub })
})


app.post('/api/mult', (req,res) => {
    const {num,num2} = req.body
    const resultMult = mult(num,num2)

    res.status(200).send({ resultMult })
})


app.post('/api/div', (req, res) => {
    const {num,num2} = req.body
    const resultDiv = div(num,num2)

    res.status(200).send({ resultDiv })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})