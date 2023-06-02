function FecharMedia(){
    var nome = document.getElementById("aluno").value 
    var nr1 = document.getElementById("nota1").value
    var nr2 = document.getElementById("nota2").value
    nr1 = Number(nr1)
    nr2 = Number(nr2)
    if (nr1 > 10){
        alert("Nota 1 não pode ser maior que 10")
        return
    }
    if (nr2 > 10){
        alert("Nota 1 não pode ser maior que 10")
        return
    }
    var Media = (nr1 + nr2) / 2
    document.getElementById("resultado").innerHTML = `O aluno ${nome} tirou nota ${nr1} e ${nr2} sua média foi ${Media}`
    if (Media >= 7){
        document.getElementById("passou").innerHTML = `PASSOU DE ANO`
        }
        else{
        document.getElementById("passou").innerHTML = `NÃO PASSOU DE ANO`
    }
}