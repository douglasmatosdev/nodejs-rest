const express = require('express')

// Create server
const app = express()

// Run server
app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

// Route Home
app.get('/', (req, res) => res.send('Você está na HOME, tente em /atendimentos agora'))

// Route atendimentos
app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'))