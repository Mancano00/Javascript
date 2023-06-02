
    //Comentário de uma única linha 
    //O alert é utilizado para exibir uma mensagem
    alert("Olá mundo!!!")
    //Tipo de exebição de mensagens no console
    console.log ("Olá mundo,estou utilizando o console")
    console.error("Esta é uma mensagem de erro")
    console.warn("Esta é uma mensagem de alerta")
    console.info("Esta é uma mensagem de informação")
    //Criando uma função chamada quando clicamos no botão
    function Botao1(){
        alert("Você clicou no botão")
    }
    //Alterando no documento html no elemento body o estilo do fundo
    function BotaoCorFundo(){
        document.body.style.backgroundColor = "blue"
    }
    function BotaoNome(){
        var nome2 = prompt("Qual é o seu nome?")
        confirm ("Olá " + nome2 + ", entendeu vareável?") 
    }
    //String - conjunto de caracteres - Declarar com ""
    var nome = "Nícolas"
    var sobrenome = "Gabriel Mancano"
    //Number - todo número em JS é do tipo de number - declarar sem ""
    var idade = 16
    //Boolean - apenas recebe true e false
    var aprovado = true
    //Comando typeof para saber o tipo do dado
    console.log (typeof nome)
    //Concatenando string com o +
    console.log (nome + " " + sobrenome)
    var n1 = 10
    var n2 = 15
    //Irá somar as duas variáveis number (25)
    console.log (n1 + n2)
    var n3 = "10"
    var n4 = "15"
    //Irá concatenar as duas variável  (1015)
    console.log (n3 + n4)
    //Uma vareável pode receber o valor de outra variável
    n1 = n2
    console.log ("n1 = " + n1 + "e o n2 = " + n2)
    //Para atribuir um valor decimal utilizando. não,
    var salario = 1290.85
    //Posso somar a variável com ela mesmo
    salario = salario + 200
    console.log(salario)
    //Antigamente para juntar texto e variáveis faziamos assim
    console.log ("Olá, " + nome + " você tem " + idade + " anos")
    function BotaoSomar(){
        var nr1 = prompt("Digite um número:")
        var nr2 = prompt("Digite outro número:")
        //Convertendo o valor1 e valor2 de string para number
        nr1 = Number(nr1)
        nr2 = Number(nr2)
        console.log(typeof nr1)
        var somar = nr1 + nr2
        //alert(somar)
        document.getElementById("res-soma").innerHTML += "<br>A soma de " + nr1 + "+" + nr2 + " = " + somar
    }
    function BotaoCidade(){
        var cidade = document.getElementById("cidade").value
        document.getElementById("ResultadoCidade").innerHTML += `<br> O nome da cidade ${cidade}`
    }
    //Operadores Aritiméticos e Ordem de precedência
    var opSoma = 5 + 2 //Operador de soma + 
    console.log(opSoma) // 7
        var opSubtracao = 5 - 2 //Operador de subtração -
        console.log(opSubtracao) // 3
    var opMultiplicacao = 5 * 2 //Operador de multiplicação *
    console.log(opMultiplicacao) // 10
        var opDivisao = 5 / 2 //Operador de divisão / 
        console.log(opDivisao) // 2.5
    var opExponenciacao = 5 ** 2 //Operador de exponenciação **
    console.log(opExponenciacao) // 25
        var opResto = 5 % 2 //Operador de resto da divisão %
        console.log(opResto) // 1
        //Ordem de precedencia 
        var ordemPrecedencia1 = 5 + 3 / 2
        console.log(ordemPrecedencia1)// 6.5
        var ordemPrecedencia2 = (5 + 3) / 2
        console.log(ordemPrecedencia2)// 4
        /* 1º ()
           2º **
           3º * /
           4º %
           5º + - 
        */
       //Constante - o valor o valor não pode ser alterado depois de atribuído
       const pi = 3.14

       //Auto atribuição
       var n = 3
       n = n + 3//A variável recebe ela mesmo + 3
       n += 3 //Quer dizer o mesmo que a expressâo acima 
        //Operadores Relacionais
        var n1 = 5
        var n2 = 6
        console.log (n1 > n2) // > Maior que 
        console.log (n1 < n2) // < Menor que 
        console.log (n1 >= n2) // >= Maior ou igual que 
        console.log (n1 <= n2) // <= Menor ou igual que 
        console.log (n1 == n2) // == igual
        console.log (n1 != n2) // != Não igual - diferente

        //Estruturas Condicionais 
        if (n1 > n2){ //Verificando a condição entre parenteses
            //Se a condição for verdadeira "entrar" nesse bloco
            console.log ("O n1 é maior que o n2")
        }
        else{
            //Se a condiçõa não for verdadeira "entrar" nesse bloco
            console.log  ("O n1 não é maior que o n2")
        }
        
        //Exemplo de condição
        var minhaIdade = 18
        if (minhaIdade >= 16){
            console.log ("Você pode votar")
        } 
        else{
            console.log ("Você não pode votar")
        }
        //Operadores Lógicos 
        //&& representa o E
        var login = "adm"
        var senha = "123"
        //Para entrar na condição TRUE as 2 condições precisar ser verdadeiras
        if (login == "adm" && senha == "123") {
            //Executa esse bloco quando as condições são TRUE   
        } else {
            //Executa esse bloco se pelo menos 1 condição for FALSE
        }
        var media = 6
        //Operador ou -> || (pipe)
        //Para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeiro
        if (media == 6 || media == 5) {
            //Executa esse bloco quando 1 condição é TRUE pelo menos 
        }else {
            //Aqui entra se todas as condições forem falsas
        }

        //Estruturas Cindicionais Encadeadas
        if (media >= 7) {
            console.log("APROVADO")
        }
        else if (media >= 5) {
            console.log("RECUPERAÇÃO")
        }
        else {
            console.log("REPROVADO")
        }

        if (media == 10) {
            console.log("Otimo aluno")
        }
        else if (media == 9 || media == 8) {
            console.log("Bom aluno")
        }
        else if (media == 7 || media == 6) {
            console.log("Aluno mediano")
        }
        else if (media == 5 || media == 4 || media == 3) {
            console.log("Aluno abaixo da média")
        }
        else {
            console.log("Aluno ruim")
        }
        //Para sortearmos um valor aleatório utilizamos o Math.random()
        //O Math.random retorna um número decimal e precisamos multiplicar pelo nr
        //Maximo que desejamos 
        //O parseINT utilizamos para obter apenas a parte inteira do número
        var nrSorteado = parseInt(Math.random() * 100)
        console.log(nrSorteado)

        var DiaSemana = NovaData
        switch (DiaSemana){
            case 1:
                console.log("Hoje é: Domingo")
                break
            case 2:
                console.log("Hoje é: Segunda")
                break
            case 3:
                console.log("Hoje é: Terça")
                break
            case 4:
                console.log("Hoje é: Quarta")
                break
            case 5:
                console.log("Hoje é: Quinta")
                break
            case 6:
                console.log("Hoje é: Sexta")
                break
            case 7:
                console.log("Hoje é: Sabado")
                break
            default:
                console.log("Dia invalido")
        }
        //For - laço de repetição
        //Primeira expressão var i = 1
        //(Aqui inicio o controle de vezes)
        //Segunda expressão i<= 10
        //(Aqui verificamos a condição para se manter no loop)
        //Terceira expressão i++
        //(Aqui acrescentamos na variável +1 vez)
        for (var i = 1; i <= 10; i++) {
            alert(i)
        }

        //Verificando se o número é par com while
        var contador = 1
        while (contador <= 10){ //Enquanto a condição for verdadeira 
            if (contador % 2 == 0){ //Condição para o contador 3for par 
                console.log (`${contador} é par`)
            } else {
                console.log (`${contador} é ímpar`)
            }
            contador++ //Adicionamos +1 ao contador para nâo ficar no loop
        }