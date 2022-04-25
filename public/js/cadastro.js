// Checando se a senha é válida
function passCheck() {
    let pass = document.getElementById('inp_pass').value
    let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/

    // Verificando se a senha é forte com regex
    if (pass == '') {
        warning_pass.innerHTML = 'Digite uma senha'
        label_pass.className = 'label-float invalid'
        return false
    } else if (regex.test(pass)) {
        warning_pass.innerHTML = ''
        label_pass.className = 'label-float valid'
        return true
    } else {
        label_pass.className = 'label-float missing'
        warning_pass.innerHTML = 'Use oito ou mais caracteres com uma combinação de letras, números e símbolos: @ ! # $ % ^ & * ( ) / e \\'
        return false
    }
}

// Checando se as duas senhas são iguais
function valPass() {
    let pass = document.getElementById('inp_pass').value
    let passConf = document.getElementById('inp_pass_conf').value

    if (passConf.length >= 6) {
        if (pass == passConf) {
            label_pass_conf.className = 'label-float valid'
            warning_pass_conf.innerHTML = ''
            return true
        } else {
            label_pass_conf.className = 'label-float invalid'
            warning_pass_conf.innerHTML = 'As senhas não conferem'
            return false
        }
    } else {
        label_pass_conf.className = 'label-float missing'
        warning_pass_conf.innerHTML = 'Senha com menos de 6 digitos'
        return false
    }
}

// Validando email
function valEmail() {
    let email = document.getElementById('inp_email').value
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    // Essa expressão não garante a veracidade 100% de um email

    // Validando email se os caracteres do email é válido
    if (email == '') {
        label_email.className = 'label-float invalid'
        warning_email.innerHTML = 'Digite um email válido'
        return false
    } else if (regex.test(email)) {
        warning_email.innerHTML = ''
        label_email.className = 'label-float valid'
        return true
    } else {
        label_email.className = 'label-float missing'
        warning_email.innerHTML = 'Digite um email válido'
        return false
    }
}

// Validando nome
function valName() {
    let name = document.getElementById('inp_name').value
    let regex = /^[a-z].* {1,}[a-z]{1,}/gi

    // Validando a quantidade de palavra e caracteres
    if (name == '') {
        label_name.className = 'label-float invalid'
        warning_name.innerHTML = 'Digite seu nome completo'
        return false
    } else if (regex.test(name)) {
        warning_name.innerHTML = ''
        label_name.className = 'label-float valid'
        return true
    } else {
        label_name.className = 'label-float missing'
        warning_name.innerHTML = 'Digite seu nome completo'
        return false
    }
}

// Validando nome da empresa
function valNameCorp() {
    let name = document.getElementById('inp_name_corp').value

    // Validando a quantidade de palavra e caracteres
    if (name == '') {
        label_name_corp.className = 'label-float invalid'
        warning_name_corp.innerHTML = 'Digite o nome da empresa'
        return false
    } else {
        warning_name_corp.innerHTML = ''
        label_name_corp.className = 'label-float valid'
        return true
    }
}

// Validando CNPJ
function valCnpj() {
    let cnpj = document.getElementById('inp_cnpj').value;
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') {
        label_cnpj.className = 'label-float invalid'
        warning_cnpj.innerHTML = 'Digite um CNPJ válido'
        return false;
    }

    if (cnpj.length != 14) {
        label_cnpj.className = 'label-float missing'
        warning_cnpj.innerHTML = 'Digite um CNPJ válido'
        return false;
    }
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999") {

        label_cnpj.className = 'label-float invalid'
        warning_cnpj.innerHTML = 'Digite um CNPJ válido'
        return false;
    }

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(0)) {
        label_cnpj.className = 'label-float invalid'
        warning_cnpj.innerHTML = 'Digite um CNPJ válido'
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(1)) {
        label_cnpj.className = 'label-float invalid'
        warning_cnpj.innerHTML = 'Digite um CNPJ válido'
        return false;
    } else {
        label_cnpj.className = 'label-float valid'
        warning_cnpj.innerHTML = ''
        return true;
    }
}

// Validando a extensão do arquivo para que seja uma imagem
function valImg() {
    let ext = document.getElementById('inp_img').value
    // Pegar somente a ultima parte, afinal podem ter pastas com . no caminho
    ext = path.split('/').pop();
    // Se não houver extensão, retorna vazio, se houver retorna a extensão
    ext = ext.indexOf('.') < 1 ? '' : ext.split('.').pop();

    let extArr = ext.split(" ");
    // Comparando com as extensões do array
    let arr = ["png", "jpg", "jpeg", "jpe", "jfif"];

    for (let i = 0; i < extArr.length; i++) {
        if (arr.includes(extArr[i])) {
            // Retorna a extenão compativel
        }
    }

    if (condition) {
        warning_img.innerHTML = ''
    } else {
        warning_img.innerHTML = 'Arquivo inválido'
    }
}

function valNext() {
    // if (!valName() | !valEmail() | !passCheck() | !valPass()) {
    //     return false
    // } else {
        document.getElementById('register_1').style.display = 'none'
        document.getElementById('register_2').style.display = 'flex'
        document.getElementById('btn-next').innerHTML = 'CADASTRAR'
        document.getElementById('btn-next').setAttribute('onclick', "register()")
        document.getElementById('btn-prev').style.display = 'inline-block'
        // return true
    // }
}

function valPrev() {
    document.getElementById('register_1').style.display = 'flex'
    document.getElementById('register_2').style.display = 'none'
    document.getElementById('btn-next').innerHTML = 'PRÓXIMO'
    document.getElementById('btn-next').setAttribute('onclick', "valNext()")
    document.getElementById('btn-prev').style.display = 'none'
}

function register() {
    if (!valCnpj() | !valNameCorp() | !valImg()) {
        return false
    } else {
        alert('Cadastro realizado com sucesso')
        return true
    }
}