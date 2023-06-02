function Impar(){
    var nr = Number(document.getElementById('inicial').value)
    var final = Number(document.getElementById('final').value)
    document.getElementById('resultado').innerHTML = `Relação de Nº ímpares de ${nr} até ${final}<br>`
    
    for(nr; nr <= final; nr++)
    {
        if(nr%2 == 1)
        {
            document.getElementById("resultado").innerHTML += `${nr}<br>`
        }
    }
}
function Limpar(){
    document.getElementById('resultado').innerHTML = ``
    document.getElementById('final').value = ``
    document.getElementById('inicial').value = ``
}