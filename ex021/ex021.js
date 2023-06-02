var Filmes = []
function Filme(){
    var Nomes = document.getElementById('Filmes').value
    Filmes.push(Nomes)
    document.getElementById('resultado').innerHTML = ``
    for (var i = 0; i < Filmes.length; i++){
        document.getElementById('resultado').innerHTML += `<b>${Filmes[i]}</b><br>`
    }
}
function Limpar(){
    document.getElementById('resultado').innerHTML = ``
    document.getElementById('Filmes').value = ``
}