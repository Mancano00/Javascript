var Filmes = ['Filme Interestelar', 'Filme Star Wars', 'Filme Harry Potter', 'Filme Vingadores', 'Filme Barbie']
function Filme(){
    for (var i = 0; i < Filmes.length; i++){
        document.getElementById('resultado').innerHTML += `Posição no vetor ${i} - <b>${Filmes[i]}</b><br>`
    }
}