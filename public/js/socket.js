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



var socket = io()

socket.emit('passName', nomeFinal)



const pessoas = document.querySelectorAll('.list-pessoas')[0];
const quantPessoas = document.querySelector('#quant-pessoas');
socket.on('listNames', (nomes) =>{
    console.log(nomes.length)
    quantPessoas.innerHTML = nomes.length;

    while (pessoas.firstChild) {
        pessoas.removeChild(pessoas.firstChild);
      }

    
    for(let i = 0; i < nomes.length; i++){

        var li = document.createElement('li');
        var p = document.createElement('p');
        var contName = document.createTextNode(nomes[i]);
        p.appendChild(contName);
        li.appendChild(p);


        pessoas.appendChild(li)
    }
})