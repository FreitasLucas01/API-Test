const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/sum', (req, res) => {
    const {num, num2} = req.body
    res.send(`A soma é: ${num + num2}`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})