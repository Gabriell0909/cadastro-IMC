function limparcampos() {
  document.getElementById("nome").value = ""
  document.getElementById("senha").value = ""
  document.getElementById("confirmar").value = ""
}

const senhas = (valorIgual, valorComparar) => valorIgual === valorComparar
const nomear = (seuNome) => /^[a-zA-Z]+$/.test(seuNome)

function validar() {
  let confirmarInput = document.getElementById("confirmar").value.trim()
  let senhaInput = document.getElementById("senha").value.trim()
  let nomeInput = document.getElementById("nome").value.trim()

  if (!nomear(nomeInput)) {
    limparcampos()
    alert("O nome deve ter apenas letras")
  }

  if (!senhas(senhaInput, confirmarInput)) {
    limparcampos()
    alert("Senhas não conferem")
  } else if (senhaInput === "" || confirmarInput === "") {
    limparcampos()
    alert("preencha os campos")
  }
}