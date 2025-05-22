const btnEnviar = document.getElementById('btnEnviar')


btnEnviar.addEventListener('click', function (e){
    e.preventDefault()
    let nome = document.getElementById('nome').value
    let texto = document.getElementById('texto').value
    if (nome === "" || texto === "" ){
        alert("Preencha os campos vazios!")
        return
    }
})