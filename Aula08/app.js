// const btnClicar = document.getElementById("btnClicar")
// const paragrafo = document.getElementById("paragrafo")

// btnClicar.addEventListener("click", function () {
//     paragrafo.textContent = "Matheus Bidu"

// })

const form = document.getElementById('form')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputAssunto = document.getElementById('assunto')
const inputMensagem = document.getElementById('mensagem')
const btnEnviar = document.getElementById('btnEnviar')
const mensagemErro = document.getElementById('mensagemErro')
const cadastro = document.getElementById('cadastroUsuarios')

btnEnviar.addEventListener('click', function (event) {
    event.preventDefault() // Previne comportamento padrao
    let nome = inputNome.value
    let email = inputEmail.value
    let assunto = inputAssunto.value
    let mensagem = inputMensagem.value

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        mensagemErro.textContent = "Preencha os campos vazios!"
        mensagemErro.style.color = "#ff0000"
        // mensagemErro.classList.add('mensagemVermelha')     
        // mensagemErro.setAttribute("src", "link da imagem")
        // mensagemErro.src = "link"   
        return
    }
    // alert(`Nome: ${nome}\n E-mail: ${email}\n Assunto ${assunto}\n Mensagem: ${mensagem}`)

    const cardUsuario = document.createElement('div')
    cardUsuario.innerHTML = `
    <h3> Nome: ${nome} </h3>
    <p> E-mail: ${email} </p>
    <p> Assunto: ${assunto} </p>
    `

    cadastro.append(cardUsuario)
    form.reset()
})