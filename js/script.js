document.getElementById ("botao-enviar").addEventListener ("click", validaFormulario)

function validaFormulario () {
  if(document.getElementById("nome-usuaria").value != "" && document.getElementById("email-usuaria").value != "" && document.getElementById("numero-usuaria").value != "") {
    alert("Prontinho! Você receberá as novidades por Email.")
  }else{
    alert("Por favor, preencha os campos nome e email!")
  }

}


