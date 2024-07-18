const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware para parsear dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Rota para receber dados do formulário
app.post('/enviar-resposta', (req, res) => {
    const resposta = req.body.resposta;
    console.log(`Resposta recebida: ${resposta}`);

    // Aqui você pode salvar a resposta em um banco de dados, por exemplo

    res.send('Resposta recebida com sucesso!');
});

// Rota básica para a página inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor backend iniciado na porta ${PORT}`);
});

