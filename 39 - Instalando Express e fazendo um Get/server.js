// Existem Query Params e Route/Path Params
// Query Params são parâmetros passados na URL após o símbolo de interrogação (?)
// Route/Path Params são parâmetros que fazem parte do caminho da URL
// Exemplo Query Params: http://localhost:3000/?num=1&num2=2 - pegamos com req.query
// Exemplo Route/Path Params: http://localhost:3000/1/2  -  pegamos com req.params


const express = require('express'); // Importing the express module to create a web server
const app = express(); // Creating an instance of an Express application
const port = 3000;  // Defining the port on which the server will listen

app.get('/', (req, res) => { // Defining a route for the root URL
    res.send("Hello World! " + (Number(req.query.num) + Number(req.query.num2))); // Sending a response when the root URL is accessed http://localhost:3000/?num=1&num2=2
})

app.get('/api/:id', (req,res) => {
    const id = req.params.id
    res.send("Nintendo Switch 2 é muito ruim " + id); // Sending a response when the root URL is accessed http://localhost:3000/?num=1&num2=2
})

app.listen(port, () => { // Starting the server and listening on the specified port
    console.log(`Server is running on http://localhost:${port}`);  // Logging a message to the console when the server starts
})

