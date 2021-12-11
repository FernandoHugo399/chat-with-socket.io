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
  var messages = [];

  // Requisições com o front-end
    io.on('connection', (socket)=>{
      socket.on('passName', (nome)=>{
        var format = nome.toLowerCase()
        if(nomes.indexOf(format) == -1){
          nomes.push(format);
          socketIds.push(socket.id);
          socket.emit('passName', {success: true})
        } else {
          socket.emit('passName', {success: false})
        }
      
      io.emit('listNames', nomes)
    })

    socket.emit('previousMessages', messages)


    socket.on('sendMessage', (data)=>{
      messages.push(data)
      console.log(messages)

      socket.broadcast.emit('receivedMessage', data)
    })


    socket.on('disconnect', ()=>{
      index = socketIds.indexOf(socket.id)
      if(index != -1){
        nomes.splice(index, 1)
        socketIds.splice(index, 1)
      }
      
      io.emit('listNames', nomes)
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