// Importando módulos
  const express = require('express');
  const path = require('path');
  

// Configurando express
  const app = express();
  
  app.get('/', (req,res)=>{
      res.sendFile(__dirname + '/views/index.html')
  })



// Configurando Socket.io
  const server = require('http').createServer(app);
  const io = require('socket.io')(server);



// Subindo arquivos estáticos
  app.use(express.static(path.join(__dirname + '/public')))



//404 NOT FOUND
  app.use((req,res)=>{
      res.redirect('/')
  })


// Iniciando servidor
  server.listen(3000, ()=>{
      console.log('Servidor iniciado')
  })