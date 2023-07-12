// mudança de abas

document.getElementById("default").click();

function mudarAba(evt, tipo) {

  let i, conteudoAba, abas;

  conteudoAba = document.getElementsByClassName("aba-conteudo");
  for (i = 0; i < conteudoAba.length; i++) {
    conteudoAba[i].style.display = "none";
  }

  abas = document.getElementsByClassName("aba");
  for (i = 0; i < abas.length; i++) {
    abas[i].className = abas[i].className.replace(" active", "");
  }

  document.getElementById(tipo).style.display = "block";
  evt.currentTarget.className += " active";
}

// verificar email e senha no formulário de empresas e redirecionar para página do usuário

function redirecionarEmpresa(event) {
  event.preventDefault();
  
  let emailEmpresa = document.getElementById("email-empresa").value;
  let confirmarEmailEmpresa = document.getElementById("confirmar-email-empresa").value;

  let senhaEmpresa = document.getElementById("senha-empresa").value;
  let confirmarSenhaEmpresa = document.getElementById("confirmar-senha-empresa").value;

  if (emailEmpresa != confirmarEmailEmpresa) {
    alert("Parece que os emails digitados não são idênticos! Por favor, verifique se os campos de email estão preenchidos corretamente.");
  } else if (senhaEmpresa != confirmarSenhaEmpresa) {
    alert("Parece que as senha digitadas não são idênticas! Por favor, verifique se os campos de senha estão preenchidos corretamente.")
  } else {
    window.location.href = "pag-usuario.html";
  }
}

// verificar email e senha no formulário de ongs e redirecionar para página do usuário

function redirecionarOng(event) {
  event.preventDefault();

  let emailOng = document.getElementById("email-ong").value;
  let confirmarEmailOng = document.getElementById("confirmar-email-ong").value;

  let senhaOng = document.getElementById("senha-ong").value;
  let confirmarSenhaOng = document.getElementById("confirmar-senha-ong").value;

  if (emailOng != confirmarEmailOng) {
    alert("Parece que os emails digitados não são idênticos! Por favor, verifique se os campos de email estão preenchidos corretamente.");
  } else if (senhaOng != confirmarSenhaOng) {
    alert("Parece que as senha digitadas não são idênticas! Por favor, verifique se os campos de senha estão preenchidos corretamente.")
  } else {
    window.location.href = "pag-usuario.html";
  }
}

// código para preenchimento automático de endereço

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
  if (cep != "") {

  //Expressão regular para validar o CEP.
  var validacep = /^[0-9]{8}$/;

  //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
    } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
};

function verificarUsuario(event) {
  event.preventDefault();

  const emailPadrao = "exemplo@hotmail.com";
  const senhaPadrao = "exemplo";

  let emailUsuario = document.getElementById("email").value;
  let senhaUsuario = document.getElementById("senha").value;

  if (emailUsuario != emailPadrao && senhaUsuario != senhaPadrao) {
    alert("Usuário não cadastrado!")
  } else if (emailUsuario != emailPadrao) {
    alert("O email digitado está incorreto!");
  } else if (senhaUsuario != senhaPadrao) {
    alert("A senha digitada está incorreta!");
  } else {
    window.location.href = "pag-usuario.html";
  }
}

var text = document.getElementById('texto-header');
var btnDec = document.getElementById('diminuir-fontsize');
var btnInc = document.getElementById('aumentar-fontsize');

var size = 16; //Default

btnDec.addEventListener('click', function() {
  text.style.fontSize = size-- + 'px';
});
btnInc.addEventListener('click', function() {
  text.style.fontSize = size++ + 'px';
});
