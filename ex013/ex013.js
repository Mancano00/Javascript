function Mes(){
    var Nome = document.getElementById("Nome").value
    var nrSorteado = parseInt(Math.random() * 24) + 1
    switch (nrSorteado){
        case 1:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Janeiro <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 2:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Fevereiro <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 3:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Março <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 4:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Abril <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 5:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Maio <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 6:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Junho <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 7:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Julho <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 8:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Agosto <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 9:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Setembro <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 10:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Outubro <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 11:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Novembro <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
        case 12:
            document.getElementById("resultado").innerHTML = `${Nome}, você vai casar no mês de Dezembro <br>
            <img "100px" height="300px" src="/ex013/tristeza.jpg" alt="">`
            break
    
        default:
            document.getElementById("resultado").innerHTML = `${Nome}, você não vai casar <br> 
            <img "100px" height="300px" src="/ex013/Comemoração.jpg" alt="">`
    }
}