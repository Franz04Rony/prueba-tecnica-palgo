const express = require("express");
const app = express();
// const myconnection = require("express-myconnection");///
// const mysql = require("mysql2");
const path = require('path');

app.set('port', process.env.PORT || 9000);

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), ()=>{
    console.log('Servidor en el puerto 9000', );
});