

// let nome = "Gustavo"

// if(nome == "Gustavo" || nome === null ) {
//     console.log("Oi Gustavo")
// }
// else if (nome === "Fulano"){
//     console.log("Outro mano")
// }
// else {
//     console.log("Quem é voce")
// }

// nome === "Gustavo"|| ? console.log("É voce!") : console.log("Sai daqui")

// Desafio 3
 
// let login = prompt("Digite o login")
// let senha = Number(prompt("Digite uma senha"))

// if (login === 'Gustavo' && senha === 1234 ) {
//     alert(`Bem vindo ao sistema ${login}`)
// }
// else {
//     alert("Usuario ou senha incorretos")
// }

// Desafio 4

let usuario = prompt("Digite seu usuario");
let senha = Number(prompt("Digite sua senha"));

if(
    (usuario === 'Admin' && senha === 123) ||
    (usuario === 'Gustavo' && senha === 1234) ||
    (usuario === 'Manager' && senha === 12345)
) 
{
    alert('Login efetuado com sucesso')
}
else {
    alert("Usuario ou senha incorreto")
}

// let nome = "Gustavo"
// let sobrenome = "Cavalcanti"
// let apelido = "Gu"

// let nomeFinal = apelido || sobrenome || nome || 'Visitante'

// Considera falso no js 
// false 
// 0 
// "" - string vazia
// null 
// undefined 
// NaN

// || retorna o primeiro valor verdadeiro
// ?? retorna o primeiro valor definido

// let height = 0;
// alert(height || 100) 100
// alert(height ?? 100) 0

switch(nome){
    case "Gustavo":
        console.log("É voce")
        break
    case "Fulano":
        console.log("Voce é o Fulano")
        break
    default:
        console.log("Não te conheço")
}

// Desafio 5 Faça um algoritmo que apresente 3 opções para o usuario: café da manha, almoço e jantar

// codesnap, quokka, fontligature
