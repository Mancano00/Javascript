function login(){
    var usuario = document.getElementById("Usuario").value 
    var senha = document.getElementById("senha").value
    if (usuario == "adm" && senha == "123"){
        document.getElementById("resultado").innerHTML = `<b>Confirmar</b>`
    }
        else{
            document.getElementById("resultado").innerHTML = `<b>Usuário ou senha incorreta</b>`
        }
}