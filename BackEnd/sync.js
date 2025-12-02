// Manually set environment variables from .env content
process.env.DB_NAME = 'db_ecom';
process.env.DB_USER = 'root';
process.env.DB_PASS = '2007';
process.env.DB_HOST = 'localhost';
process.env.DB_PORT = '3306';

const conn = require('./src/db/conn')

// Manually set environment variables from .env content
process.env.DB_NAME = 'db_ecom';
process.env.DB_USER = 'root';
process.env.DB_PASS = '2007';
process.env.DB_HOST = 'localhost';
process.env.DB_PORT = '3306';

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const { 
    Usuario, 
    Pedido, 
    Produto, 
    ItemPedido, 
    Entrega, 
    Estoque 
} = require('./src/models/rel') 

async function syncDataBase(){
    try{
        await conn.sync({ force: true }) 
        
        console.log('----------------------------')
        console.log('Banco de Dados sincronizado!')
        console.log('----------------------------')

    }catch(err){
        console.error('ERRO: Não foi possível sincronizar o banco de dados!', err)
    } finally {
        await conn.close()
        console.log('Conexão com o banco de dados fechada.')
    }
}

syncDataBase()