function Numeros(){
    document.getElementById("resultado").innerHTML = ``
    for (var i = 1; i <= 6; i++) {
        var nr = parseInt(Math.random() * 60) + 1
        document.getElementById("resultado").innerHTML += `${nr}  `
    }
}