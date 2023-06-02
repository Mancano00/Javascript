function FecharMedia(){
    var nome = document.getElementById("aluno").value 
    var nr1 = document.getElementById("nota1").value
    var nr2 = document.getElementById("nota2").value
    
    var valida = ValidarNota(nr1, nr2)
    if (valida == false){
        return
    }
    var Media = calcularMedia(nr1, nr2)

    ExibirAprovação(Media, nome, nr1, nr2)
}
function ValidarNota(nr1, nr2){
    if (nr1 > 10){
        alert("Nota 1 não pode ser maior que 10")
        return false
    }
    if (nr2 > 10){
        alert("Nota 2 não pode ser maior que 10")
        return false
    }
}
function calcularMedia(nr1, nr2){
    var Media = (Number(nr1)+ Number(nr2)) / 2
    return Media
}
function ExibirAprovação(Media, nome, nr1, nr2)
{
    if (Media >= 7){
        document.getElementById("resultado").innerHTML = `O aluno  ${nome} tirou nota ${nr1} e ${nr2} sua média foi ${Media} <br><b>PASSOU DE ANO</b>`
        }
        else{
        document.getElementById("resultado").innerHTML = `O aluno  ${nome} tirou nota ${nr1} e ${nr2} sua média foi ${Media} <br><b>NÃO PASSOU DE ANO</b>`
    }
}