//Criando um array vazio
var MeuVetor = []
//Criando vetores com dados
var numeros = [4, 1, 8, 5, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var NovoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor
console.log (nomes[2])
console.log (NovoVetor[1])


console.log (numeros.length)
//Indice         0        1         2        3        4
var frutas = ['Maça', 'Laranja', 'Pera', 'Morango', 'Uva']
for (var i = 0; i < frutas.length; i++){
    console.log (frutas[i])
}
 for (var pos in frutas) {
    console.log (frutas[pos])
 }
//Adicionando novo valor no Final do vetor
frutas.PushManager('abacaxi')
for (var i = 0; i < frutas.length; i++){
    console.log (frutas[i])
}
var novaLista = []
frutas.PushManager('abacaxi')
console.log(novaLista)


frutas.forEach (item => {
    console.log ('Item pelo forEach ', item)
})
frutas.forEach ((item, indice) => {
    console.log ('Item pelo forEach ', indice, item)
})
