var nrSorteado = parseInt(Math.random() * 100) + 1
var ten = 0 

function Chutar(){
    var nr = prompt("Chute um número:")
    ten++
    if ( nr > nrSorteado){
        document.getElementById("resultado").innerHTML += `<br>Você chutou ${nr} pensei em um número MENOR`
    }
    else if (nr < nrSorteado){
        document.getElementById("resultado").innerHTML += `<br>Você chutou ${nr} pensei em um número MAIOR`
    }
    else{
        document.getElementById("resultado").innerHTML = `<b>PARABÉNS VOCÊ ACERTOU NO Nº ${nrSorteado} EM ${ten} TENTATIVAS</b>`
    }
}
function Novo(){
    document.getElementById("resultado").innerHTML = ``
    nrSorteado = parseInt(Math.random() * 100)+ 1
    ten = 0
}