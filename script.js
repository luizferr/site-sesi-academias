const form = document.getElementById('formCadastro');
const nome = document.getElementById('nomeCad');
const endereco = document.getElementById('enderecoCad');
const cpf = document.getElementById('cpfCad');
const telefone = document.getElementById('telefoneCad');
const email = document.getElementById('emailCad');
const usuario = document.getElementById('usuarioCad');
const senha = document.getElementById('senhaCad');
const confirmarSenha = document.getElementById('confirmarSenhaCad');

form.addEventListener("submit", (valida) => {
    let contador = 0;
    let regexCpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    // NOME
    if(nome.value == ''){
        document.getElementById('nomeInvalido').innerText = "Campo obrigatório";
        contador++;
    }

    if(nome.value.length < 6){
        document.getElementById('nomeInvalido').innerText = "Nome deve ter mais de 6 caracteres";
        contador++;
    }

    if(nome.value.length > 30){
        document.getElementById('nomeInvalido').innerText = "Nome deve ter menos de 30 caracteres";
        contador++;
    }
    
    // ENDEREÇO
    if(endereco.value == ''){
        document.getElementById('enderecoInvalido').innerText = "Campo obrigatório";
        contador++;
    }

    else if(endereco.value > 0){
        document.getElementById('enderecoInvalido').innerText = "";
    }

    // CPF

    if(!regexCpf.test(cpf.value)){
        document.getElementById('cpfInvalido').innerText = 'CPF inválido';
        contador++
    }
    
    else if(regexCpf.test(cpf.value))
    document.getElementById('cpfInvalido').innerText = '';

    // TELEFONE
    if(telefone.value.length < 8){
        document.getElementById('telefoneInvalido').innerText = "Deve conter ao menos 8 digitos numéricos";
        contador++;
    }

    if(isNaN(telefone.value)){
        document.getElementById('telefoneInvalido').innerText = "Deve conter somente números";
        contador++;
    }

    else if(!isNaN(telefone.value) && telefone.value.length > 7){
        document.getElementById('telefoneInvalido').innerText = "";
    }

    // E-MAIL

    if(!regexEmail.test(email.value)){
        document.getElementById('emailInvalido').innerText = 'E-mail inválido';
        contador++;
    }

    else if(regexEmail.test(email.value))
    document.getElementById('emailInvalido').innerText = '';

    // USUÁRIO

    if(usuario.value.length == 0 && usuario.value.length < 6){
        document.getElementById('usuarioInvalido').innerText = "Deve conter ao menos 6 caracteres";
        contador++;
    }

    // SENHA

    if(senha.value.length < 8){
        document.getElementById('senhaInvalida').innerText = "Deve conter ao menos 8 caracteres";
        contador++;
    }

    // CONFIRMAR SENHA

    if(confirmarSenha.value != senha.value){
        document.getElementById('senhaConfirmarInvalido').innerText = 'As senhas devem ser iguais';
        contador++;
    }

    if(contador > 0) valida.preventDefault();
});