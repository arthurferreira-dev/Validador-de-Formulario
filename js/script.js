let ErrorName = document.querySelector('p#error-name');
let ErrorPassWord = document.querySelector('p#error-password');
let ErrorEmail = document.querySelector('p#error-email');
let Error = document.querySelector('.error');

/* Nome */
let NameInput = document.getElementById('name');
let NameValue = NameInput.value;
let Name = String(NameValue);

/* Senha */
let SenhaInput = document.getElementById('password');
let SenhaValue = SenhaInput.value;
let Senha = String(SenhaValue);

/* E-mail */
let EmailInput = document.getElementById('email');
let EmailValue = EmailInput.value;
let Email = String(EmailValue);

function Cadastro() {
    if (Name == '' && Senha == '' && Email == '') {
        ErrorName.innerHTML = 'Preencha o campo obrigatório!';
        ErrorPassWord.innerHTML = 'Preencha o campo obrigatório!';
        ErrorEmail.innerHTML = 'Preencha o campo obrigatório!';
        Error.style.display = 'block';
    }
}

function Cad() {
    Cadastro();
}