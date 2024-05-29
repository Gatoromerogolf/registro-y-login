const express = require('express');
app = express();

import {methods as authentication} from './controllers/autent.ctrler.js'

// configuración
app.use(express.static(__dirname + '/public'))

// rutas
app.get('/', (req, res) => {res.send('entro a la aplicación');});
app.get('/login', (req, res) => {res.sendFile(__dirname + '/pages/login.html');});
app.get('/register', (req, res) => {res.sendFile(__dirname + '/pages/register.html');});
app.get('/admin', (req, res) => {res.sendFile(__dirname + '/pages/admin/admin.html');});
app.get('/api/register', authentication.register);
app.get('/api/register', authentication.login);

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`escuchando en puerto ${puerto}`)
})
