const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/enviar-resposta', (req, res) => {
    const { name, question, answer } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: 'Resposta do questionário',
        text: `Nome: ${name}\nPergunta: ${question}\nResposta: ${answer}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
            res.status(500).json({ error: 'Erro ao enviar a resposta. Tente novamente.' });
        } else {
            console.log('Email enviado:', info.response);
            res.status(200).json({ message: 'Resposta enviada com sucesso!' });
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));