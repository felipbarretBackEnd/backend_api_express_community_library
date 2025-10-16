//METHOD -> GET, POST, PUT/ PATCH, DELETE
// NAME DE ROTA -> / - SEMPRE NO PLURAL
// CALLBACK FUNCTIONS => ONDE EXECUTAMOS O BACKEND (LÓGICA, REGRA DE NEGÓCIO)

import express from 'express';
import userRouters from './src/routes/user.routes.js'
const app = express();

app.use(express.json());
app.use(userRouters)

app.listen(3000, () => 
    {console.log('Server is runing on port 3000')
});