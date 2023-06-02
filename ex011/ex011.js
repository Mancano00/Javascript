function Verificar(){
    var nome = document.getElementById("Nome").value 
    var idade = document.getElementById("Senha").value
    
    if (idade >= 18 && idade <= 70){
        document.getElementById("resultado").innerHTML = `${nome}, você é obrigado a votar`
    } 
    else if (idade >= 16 && idade < 18 || idade > 70){
        document.getElementById("resultado").innerHTML = `${nome}, você não é obrigado votar`
    } 
    else {
        document.getElementById("resultado").innerHTML = `${nome}, você não pode votar`
    }
}