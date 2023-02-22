//agregando en package.json "type": "module"
import express from "express";
import {pool} from './db.js';
import {PORT} from './config.js';
import path from "path";
import { fileURLToPath } from 'url';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
app.use(express.urlencoded({extended: false}));

//archivos estaticos (frontend)
app.use(express.static(path.join(__dirname, 'public')));

//endpoints
app.get('/ping', async function(req, res){
    const [rows] = await pool.query('select * from alumnos');
    res.send(rows);
});
app.post('/add', async function(req,res){
    const [rows] = await pool.query(`INSERT INTO alumnos (nombres, apellidos, sexo)
    values
    ('${req.body.nombres}', '${req.body.apellidos}', '${req.body.sexo}')`);
    console.log(rows);
    res.redirect('/')
})


app.listen(PORT, ()=>{
    console.log('Servidor en el puerto', PORT );
});