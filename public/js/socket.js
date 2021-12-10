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
console.log(nomeFinal)