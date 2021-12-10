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

  var nomes = [];
  var socketIds = [];
  


  io.on('connection', (socket)=>{
    socket.on('passName', (nome)=>{
     

      nomes.push(nome);
      socketIds.push(socket.id);
      console.log(nomes)
      console.log(socketIds)
    })


    socket.on('disconnect', ()=>{
      index = socketIds.indexOf(socket.id)
      nomes.splice(index, 1)
      socketIds.splice(index, 1)
    })
  })



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