var Filmes = []
var Imagens = []
function Filme(){
    var Nomes = document.getElementById('Filmes').value
    var Links = document.getElementById('Imagens').value
    Filmes.push(Nomes)
    Imagens.push(Links)
    document.getElementById('resultado').innerHTML = ``
    //for (var i = 0; i < Filmes.length; i++)
    for (var i in Filmes){
        document.getElementById('resultado').innerHTML += `<br><b>${Filmes[i]}</b><br>`
        document.getElementById('resultado').innerHTML += `<img src="${Imagens[i]}" width="150px" height="225px" alt="">`
    }
    document.getElementById('Filmes').value = ``
    document.getElementById('Imagens').value = ``
    document.getElementById('Filmes').focus()
}
function Limpar(){
    document.getElementById('resultado').innerHTML = ``
    document.getElementById('Filmes').value = ``
    document.getElementById('Imagens').value = ``
}