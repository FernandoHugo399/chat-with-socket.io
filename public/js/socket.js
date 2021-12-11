//Validando o prompt
var nome = prompt('Qual o seu nome?');
var format = '';
for(let i = 0; i < 10; i+= 0){
    if(typeof(nome) == 'object'){
        var nome = prompt('É obrigatório ter um nome!');
    } else {
        if (nome.trim().length == 0){
            var nome = prompt('Preencha o campo abaixo!');
        } else {
            i = 10;
            var format = nome.trim().split(' ');
        }
        
    }

};
var nomeFinal = format[0];


//Conectando com o Back-end
var socket = io()

//Requisições com o Back-end
socket.emit('passName', nomeFinal)

socket.on('passName', data=>{
    if(!data.success){

        var nome = prompt('Esse nome já está sendo usado, Digite outro:');
        var format = '';
        for(let i = 0; i < 10; i+= 0){
            if(typeof(nome) == 'object'){
                var nome = prompt('É obrigatório ter um nome!');
            } else {
                if (nome.trim().length == 0){
                    var nome = prompt('Preencha o campo abaixo!');
                } else {
                    i = 10;
                    var format = nome.trim().split(' ');
                }
                
            }

        };
        var nomeFinal = format[0];

        socket.emit('passName', nomeFinal)
            }
})

  //sidebar
  const pessoas = document.querySelectorAll('.list-pessoas')[0];
  const quantPessoas = document.querySelector('#quant-pessoas');
  socket.on('listNames', (nomes) =>{
      quantPessoas.innerHTML = nomes.length;

      while (pessoas.firstChild) {
          pessoas.removeChild(pessoas.firstChild);
        }

    
      for(let i = 0; i < nomes.length; i++){

          let li = document.createElement('li');
          let p = document.createElement('p');
          var contName = document.createTextNode(nomes[i]);
          p.appendChild(contName);
          li.appendChild(p);
          pessoas.appendChild(li);
      }
  })


  //Autofocus
  const form = document.querySelector('#form');
  const input = document.getElementById('input');
  form.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(input.value.trim() == ''){
          console.log('vazio')
      } else {
          renderMessage(input.value.trim())
          content.scrollTo(0, content.scrollHeight)

          var messageObject = {
            author: nomeFinal,
            message: input.value.trim()
          } 

          socket.emit('sendMessage', messageObject)


      }
      input.value = '';
      input.focus();
  })


  //Mensagens
  const messages = document.querySelector("#messages");
  content.scrollTo(0, content.scrollHeight) 

  function renderMessage(message) {
    let li = document.createElement('li');
    let p = document.createElement('p');
    let div = document.createElement('div');
    var contNome = document.createTextNode(nomeFinal);
    var contMessage = document.createTextNode(message);
    li.setAttribute('class', 'they-message')
    p.appendChild(contNome)
    div.appendChild(contMessage)
    li.appendChild(p)
    li.appendChild(div)
    messages.appendChild(li)
}


