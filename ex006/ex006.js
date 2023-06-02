function BotaoCalcular(){
    var nr1 = document.getElementById("botao1").value
    var nr2 = document.getElementById("botao2").value
    nr1 = parseFloat(nr1)
    nr2 = parseFloat(nr2)
    var soma = nr1 + nr2
    var subt = nr1 - nr2
    var mult = nr1 * nr2
    var divi = nr1 / nr2
    var rest = nr1 % nr2
    var pote = nr1 ** nr2
    document.getElementById("resultado").innerHTML = 
    `<br>${nr1} + ${nr2} = ${soma}
    <br>${nr1} - ${nr2} = ${subt}
    <br>${nr1} * ${nr2} = ${mult}
    <br>${nr1} / ${nr2} = ${divi}
    <br>${nr1} % ${nr2} = ${rest}
    <br>${nr1} ** ${nr2} = ${pote}`
}