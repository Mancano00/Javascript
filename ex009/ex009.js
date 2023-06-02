function Verificar(){
    var nome = document.getElementById("nome").value 
    var idade = document.getElementById("idade").value
    nr1 = Number(idade)
    if (idade >= 18){
        document.getElementById("resultado").innerHTML = `PARABÉNS ${nome}, você pode tirar CNH <br>
        <img src="/CNH-Perguntas-e-Respostas-Frequentes.jpg" style="width: 400px; height: 250px;">`
    }
        else{
        document.getElementById("resultado").innerHTML = `${nome}, você NÃO pode tirar CNH <br>
        <img src="/cancelado.jpg" style="width: 400px; height: 250px;">`
    }
}