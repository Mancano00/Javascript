//Declarando uma função sem parametro e sem retorno
function exibirInformacao(){
    console.log ('Executei a função exibir inf.')
}
//Chamando a minha função
exibirInformacao()
exibirInformacao()
exibirInformacao()
//Funções com entrada de parâmetros e sem retorno
//Criando a função para gerar no console a tabuada do nr desejado
function ricardoCalculeTabuada(nr){
    for (var i = 0; i <= 20; i++){
        console.log (`${nr} x ${i} = ${nr * i}`)
    }
}
//Chamando a função e passando o nº com PARAMETRO que desejo ver a tabuada
ricardoCalculeTabuada(40)
//Declarando a função para calcular o dobro e receber o valor da variável
function ricardoCalculeTabuada(nr){
    let dobro = nr * 2 
    return dobro
}
//Chamando a função para calcular o dobro e receber o resultado na variável
var resultado = ricardoCalculeTabuada(7)
console.log (resultado)
var resultado = ricardoCalculeTabuada(7000)
console.log (resultado)

//Realizar soma
function soma(n1, n2){
    var soma = n1 + n2
    return soma 
}

var n1 = 2
var n2 = 3
var calculoSoma = soma(n1, n2)
console.log (calculoSoma)

//Calcular média enviando 2 parametro e retornando a média
function calculandoMedia(nota1, nota2){
    var soma = nota1 + nota2
    var media = soma / 2 
    return media
}
var Aluno1 = calculandoMedia(7, 8)
console.log (Aluno1)
var Aluno2 = calculandoMedia(8, 9)
console.log (Aluno2)

var login = "adm"
var senha = 123

var possoAcessar = validarLogin(login, senha)
if (possoAcessar == true){
    console.log ("Você pode acessar o sistema")
}else{
    console.log ("Você não tem permissão")
}
validarLogin(login, senha)
{
    if(login == '' || senha == '')
    {
        return false
    }
    if(login == "adm" && senha == 123)
    {
        return false
    }else{
        return true
    }
}