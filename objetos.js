var ListaCarro = []

//Declarando um objeto e informando os atributos
//Todo objeto declarado com { }
var carro = {
    ano: '2007',
    modelo: 'F250',
    marca: 'Ford'
}
//Para exibir o atributo do objeto faço da seguinte forma
//objeto.atributo
console.log (carro.ano + ' - ' + carro.modelo)
console.log (`${carro.ano} - ${carro.modelo}`)

//Adicionando o objeto carro ao vetor ListaCarro
ListaCarro.push(carro)
console.log(ListaCarro)

carro = {
    ano: '2021',
    modelo: '3500',
    marca: 'Dodge RAM'
}
ListaCarro.push(carro)
console.log(ListaCarro)

for (var pos in ListaCarro){
    console.log(ListaCarro[pos].modelo)
}