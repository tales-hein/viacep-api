document.getElementById(`cep`).addEventListener(`focusout`, getCep);

async function getCep() {
    var cep = document.getElementById(`cep`).value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    var dados = await fetch(url);
    var endereco = await dados.json();
    fillForm(endereco);
};

function fillForm(endereco) {
    document.getElementById(`uf`).value = endereco.uf;
    document.getElementById(`localidade`).value = endereco.localidade;
    document.getElementById(`bairro`).value = endereco.bairro;
    document.getElementById(`logradouro`).value = endereco.logradouro;
};