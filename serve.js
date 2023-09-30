const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middleware
app.use(bodyParser.json());

// Configurar conexão com o banco de dados PostgreSQL
const client = new Client({
    user: 'seu_usuario',
    host: 'localhost',
    database: 'sua_base_de_dados',
    password: 'sua_senha',
    port: 5432, // Porta padrão do PostgreSQL
});

client.connect(); // Conectar ao banco de dados

// Rota para autenticação
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Executar uma consulta no banco de dados para verificar as credenciais
        const query = 'SELECT * FROM usuarios WHERE username = $1 AND password = $2';
        const result = await client.query(query, [username, password]);

        if (result.rowCount === 1) {
            // Autenticação bem-sucedida
            res.json({ success: true });
        } else {
            // Autenticação falhou
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Erro na consulta ao banco de dados:', error);
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});