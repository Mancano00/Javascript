function Multiplicar(){
    var nr = document.getElementById('Numero').value
    var multiplicador = 1
    document.getElementById('resultado').innerHTML = `Tabuada do ${nr}<br>`
    while (multiplicador <= 10){
    var res = multiplicador * nr
    document.getElementById('resultado').innerHTML += `<br> ${nr} x ${multiplicador} = ${res}`
    multiplicador++
    }
}
function Limpar(){
    document.getElementById('resultado').innerHTML = ``
    document.getElementById('Numero').value = ``
}