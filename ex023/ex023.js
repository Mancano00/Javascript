var Filmes = []
var Imagens = []
function Filme(){
    var Nomes = document.getElementById('Filmes').value
    var Links = document.getElementById('Imagens').value
    Filmes.push(Nomes)
    Imagens.push(Links)
    document.getElementById('resultado').innerHTML = ``
    for (var i = 0; i < Filmes.length; i++){
        document.getElementById('resultado').innerHTML += `<div><b>${Filmes[i]}</b><br><img src="${Imagens[i]}" width="150px" height="225px" alt=""></div>`
        document.getElementById('Filmes').value = ``
        document.getElementById('Filmes').focus()
        document.getElementById('Imagens').value = ``
    }
}
function Sorteio(){
    var nrSorteado = parseInt(Math.random() * Filmes.length)
    document.getElementById('Escolido').innerHTML = `<div><b>${Filmes[nrSorteado]}</b><br><img src="${Imagens[nrSorteado]}" width="150px" height="225px" alt=""></div>`
}