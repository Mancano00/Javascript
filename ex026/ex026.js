var ListaCadastros = []

ListaCadastros = JSON.parse(localStorage.getItem('bdCadastros'))
if (ListaCadastros == null) {
    ListaCadastros = []
}
console.log(ListaCadastros)

function validarUsuario(nome, usuario, senha, confirmar) {
    if (nome == '' || confirmar == '' || senha == '' || usuario == '') {
        alert('Verifique os dados antes de cadastrar')
        return true
    } if (senha != confirmar) {
        alert('Verifique a senha')
        return true
    }else{
        return false
    }
}
function Cadastrar() {
    var nome = document.getElementById('Nome').value
    var usuario = document.getElementById('Usuario').value
    var senha = document.getElementById('Senha').value
    var confirmar = document.getElementById('ConfirmarSenha').value

    var possoCadastrar = validarUsuario(nome, usuario, senha, confirmar)
        if (possoCadastrar == true){
            return
        }

    var Cadastros = {
        nome: nome,
        usuario: usuario,
        senha: senha
    }
    ListaCadastros.push(Cadastros)
    localStorage.setItem('bdCadastros', JSON.stringify(ListaCadastros))

    exibirCadastro()

    document.getElementById('Nome').value = ``
    document.getElementById('Nome').focus()
    document.getElementById('Usuario').value = ``
    document.getElementById('ConfirmarSenha').value = ``
    document.getElementById('Senha').value = ``
}

function exibirCadastro() {
    document.getElementById('resultado').innerHTML = ''
    ListaCadastros.forEach(( item, indice) => {
        document.getElementById('resultado').innerHTML += `<p><b>Nome:</b> ${item.nome} - <b>Login:</b> ${item.usuario} 
        <img src="/ex026/excluir.svg" onclick='Limpar(${indice})' alt=""><br><p>`
    })
}

function Entrar(){
    var usuario =document.getElementById('Usuario').value
    var senha =document.getElementById('Senha').value
    var encontrou = false
    ListaCadastros.forEach (item => {
        if (usuario == item.usuario && senha == item.senha){
            alert(`${ListaCadastros[i].nome}, bem vindo ao sistema!`)
            encontrou = true
        }
    })
    if(encontrou == false){
        alert('Verifique seu DADOS')
    }
}
function BotaoCadastrar(){
    location.href = '/ex026/ex026.html'
}

function Limpar(indice){
    ListaCadastros.splice (indice, 1)
    localStorage.setItem('bdCadastros', JSON.stringify(ListaCadastros))
    exibirCadastro()
}