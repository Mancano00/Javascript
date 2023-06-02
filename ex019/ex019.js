var vida = 5
function Mais1(){
    vida++
    document.getElementById('vidas').innerHTML += `<img width="100px" height="100px" src="/images.png" alt="">"`
    for (var i = 1; i <= quantidade; i++){
        document.getElementById('vidas').innerHTML += `<img width="100px" height="100px" src="/images.png" alt="">"`
    }
}
function Menos1(){
    vida--
    document.getElementById('vidas').innerHTML += `<img width="100px" height="100px" src="/images.png" alt="">"`
    for (var i = 1; i <= quantidade; i++){
        document.getElementById('vidas').innerHTML += `<img width="100px" height="100px" src="/images.png" alt="">"`
    }
}