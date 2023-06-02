var ListaFilmes = []

ListaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (ListaFilmes == null){
    ListaFilmes = []
}
exibirFilme()

console.log(ListaFilmes)

function exibirFilme(){
    document.getElementById('resultado').innerHTML = ``
    for (var i in ListaFilmes){
        document.getElementById('resultado').innerHTML += `<div><b>${ListaFilmes[i].nome}</b><br><img src="${ListaFilmes[i].link}" width="150px" height="225px" alt=""></div>`
    }
}

function validarCadastro(NomeFilme, LinkFilme){
    if (NomeFilme != '' && LinkFilme != ''){
        return true
    } else{
        return false
    }
}
function Filme(){
    var NomeFilme = document.getElementById('Filmes').value
    var LinkFilme = document.getElementById('Imagens').value

    var possoCadastrar = validarCadastro(NomeFilme, LinkFilme)
    if (possoCadastrar == false){
    alert ('Verifique os dados antes de cadastrar')
    return
    }

    var Filme = {
        nome: NomeFilme,
        link: LinkFilme
    }
    ListaFilmes.push(Filme)
    localStorage.setItem('bdFilmes', JSON.stringify(ListaFilmes) )

    exibirFilme()

    document.getElementById('Filmes').value = ``
    document.getElementById('Filmes').focus()
    document.getElementById('Imagens').value = ``
}
function Sorteio(){
    var nrSorteado = parseInt(Math.random() * ListaFilmes.length)
    document.getElementById('Escolido').innerHTML = `<div><b>${ListaFilmes[nrSorteado].nome}</b><br><img src="${ListaFilmes[nrSorteado].link}" width="150px" height="225px" alt=""></div>`
}
function Limpar(){
    ListaFilmes = []
    localStorage.setItem('bdFilmes', JSON.stringify(ListaFilmes) )
    exibirFilme()
    document.getElementById('resultado').innerHTML = ``
    document.getElementById('Escolido').innerHTML = ``
}