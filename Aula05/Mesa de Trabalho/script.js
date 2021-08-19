var nomeDoUsuario = prompt('Qual é o seu nome ?');
function saudar(){
    alert(`Olá ${nomeDoUsuario}. Seja bem vindo!`)
}
saudar()

function cotarDolar() {
    var dolares = prompt('Quantos dolares você gostaria de cotar ? ');
    var cotacaoDolar = 5.41; 
    var confirm = window.confirm(`Confirma a quantidade de US$ ${dolares} dólares?`);
    while (confirm == false) {
        dolares = prompt('Quantos dolares você gostaria de cotar ? '); 
        confirm = window.confirm('Deseja continuar ?');
    } 
    alert(`${nomeDoUsuario}. US$ ${dolares} dólares valem R$ ${dolares * cotacaoDolar} reais hoje.`);
}
cotarDolar()

function redirecionamento(){
    window.location = "https://www.bcb.gov.br/conversao"
}
