function BotaoCalcular(){
    var nr = document.getElementById("botao1").value
    var dobro = nr * 2
    var metade = nr / 2
    document.getElementById("resultado").innerHTML += `<br>O dobro do ${nr} é igua a ${dobro} e a metade é igual a ${metade}`
}
function BotaoLimpar(){
    document.getElementById("resultado").innerHTML = ``
    document.getElementById("botao1"). value = ``
}