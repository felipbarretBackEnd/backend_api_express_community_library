import express from 'express';
const app = express()

app.use(express.json());

//METHOD -> GET, POST, PUT/ PATCH, DELETE
// NAME DE ROTA -> / - SEMPRE NO PLURAL
// CALLBACK FUNCTIONS => ONDE EXECUTAMOS O BACKEND (LÓGICA, REGRA DE NEGÓCIO)
const users = [];

app.post('/users', (req, res) => {
    const body = req.body;
    users.push(body);
    res.status(201).send("Usuário criado com sucesso.")        //json(users);
});

app.get('/users', (req, res) => {
    res.status(200).send({message:"Esses são os users",users})
});


app.listen(3000, () => 
    {console.log('Server is runing on port 3000')
});