// HTTP e URL já vem instalado com Node.js
// Não preciso instalar outra lib pra ele.
const http = require('http');
const url = require('url');


// Uso creareServer para criar um servidor HTTP
// O servidor recebe dois parâmetros: request e response.
http.createServer((req, res) => {
    console.log(req.method) // Exibe o método da requisição no console, que é GET
    console.log(req.url) // Exibe a URL da requisição no console.

    // Preciso pegar os parametros da URL
    // Uso a função parse do módulo url para obter os parâmetros
    const parsedUrl = url.parse(req.url, true) // Analisa a URL e retorna um objeto com os parâmetros
    const queryParams = parsedUrl.query; // Extrai os parâmetros de consulta da URL
    const pathname = parsedUrl.pathname; // Extrai o caminho da URL

    console.log(queryParams) // Exibe os parâmetros de consulta no console

    if(pathname === '/favicon.ico'){
        res.writeHead(404); // Responde com 404 se a URL for /favicon.ico
        res.end();
        return; // Interrompe a execução se for /favicon.ico
    }

    // Verifica o tipo de requisição
    // Se for POST, responde com "Hello World! Nice"
    if(req.method === "POST"){
        res.write('Hello World! Nice'); // Escreve uma resposta para o cliente
        res.end(); // Finaliza a resposta
    } else if(req.method === "GET") {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); // Responde com 200 OK e define o tipo de conteúdo como texto simples. Resolvendo o problema de erro de digitação.
        // Se for GET, responde com a soma dos parâmetros 'num' e 'num2' da URL
        res.write('A soma é: ' + (Number(queryParams.num) + Number(queryParams.num2))); // Responde com a soma dos parâmetros 'num' e 'num2' da URL no navegador
        res.end(); 
    }

    // Abaixo coloco a porta que o servidor vai escutar
    // A porta 3000 é uma escolha comum para desenvolvimento
    // Mas poderia ser qualquer outra porta que não esteja em uso.
}).listen(3000)