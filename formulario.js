var enviar = document.querySelector("#dados-clientes");
enviar.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var cliente = recebeClienteDoFormulario(form);

    adicionaClienteNaTabela(cliente);

    form.reset();
});

function adicionaClienteNaTabela(cliente){
    var clienteTr = montaTr(cliente);
    var tabela = document.querySelector("#tabela-clientes");
    tabela.appendChild(clienteTr);
}
function recebeClienteDoFormulario(form){
    var cliente = {
        id: form.id.value,
        nome: form.nome.value,
        dtNascimento: form.data_nascimento.value,
        renda: form.renda.value,
        cpf: form.cpf.value,
        matricula: form.matricula.value
        
    }
    return cliente;
}
function montaTr(cliente){
    var clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");

    clienteTr.appendChild(montaTd(cliente.id, "info-id"));
    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(cliente.dtnascimento, "info-dataDeNascimento"));
    clienteTr.appendChild(montaTd(cliente.renda, "info-renda"));
    clienteTr.appendChild(montaTd(cliente.matricula, "info-matricula"));
    clienteTr.appendChild(montaTd(cliente.cpf, "info-cpf"));
    
    return clienteTr;
}
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}