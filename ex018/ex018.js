function Impar(){
    var quantidade = Number(document.getElementById('inicial').value)
    document.getElementById('resultado').innerHTML = ``

    for (var i = 1; i <= quantidade; i++)
    {
        document.getElementById('resultado').innerHTML += `<img width="50px" height="50px" src="/images.png" alt="">"`
    }
}
function Limpar(){
    document.getElementById('resultado').innerHTML = ``
    document.getElementById('inicial').value = ``
}