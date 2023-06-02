function Multiplicar(){
    var nr = document.getElementById('Numero').value
    document.getElementById('resultado').innerHTML = `Tabuada do ${nr}<br>`
    
    for (var multiplicador = 1; multiplicador <= 10;multiplicador++){
    var res = multiplicador * nr
    document.getElementById('resultado').innerHTML += `<br> ${nr} x ${multiplicador} = ${res}`
    }
}
function Limpar(){
    document.getElementById('resultado').innerHTML = ``
    document.getElementById('Numero').value = ``
}