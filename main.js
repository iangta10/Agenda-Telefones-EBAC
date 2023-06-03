const form = document.getElementById("form-dados");
const nome = [];
const telefone = [];
const tipo = [];
const imgWpp = "<img src='./images/whatsapp.png' alt='Logo do Whatsapp'"
const imgTel = "<img src='./images/telefone.png' alt='Telefone'"
const imgBoth = "<img src='./images/whatsapp.png' alt='Logo do Whatsapp'><img src='./images/telefone.png' alt='Telefone'"
const inputNomeDoContato = document.getElementById("nome-contato");
const inputTelefone = document.getElementById("numero-contato");
const inputTipoTelefone = document.getElementById("tipo-telefone");

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(validaContato(inputNomeDoContato.value) && validaTelefone(inputTelefone.value)){
        adicionaLinha();
        atualizaTabela();
    }
});

function adicionaLinha(){
    
    nome.push(inputNomeDoContato.value);
    telefone.push(inputTelefone.value.toString());
    tipo.push(inputTipoTelefone.value);

    let linha = "<tr>";
    linha += `<td>${inputNomeDoContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    if(inputTipoTelefone.value == "wpp"){
        linha += `<td>${imgWpp}</td>`;
    }else if(inputTipoTelefone.value == "tel"){
        linha += `<td>${imgTel}</td>`;
    }else{
        linha += `<td>${imgBoth}</td>`;
    }
    linha += `</tr>`

    linhas += linha
    
    inputNomeDoContato.value = "";
    inputTelefone.value = "";
    inputTipoTelefone.value = "";
        
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function validaContato(inputNomeDoContato){
    if(nome.includes(inputNomeDoContato)){
        alert(`O contato ${inputNomeDoContato} já existe na agenda`)
        return false
    }else
    return true;
}

function validaTelefone(inputTelefone){
    if(telefone.includes(inputTelefone.toString())){
        alert(`O Telefone ${inputTelefone} já existe na agenda`)
        return false
    }else
    return true
}