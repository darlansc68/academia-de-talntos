var cliente = document.querySelectorAll(".cliente");

for (var i = 0; i < cliente.length; i++){

    var dataDeNascimento = cliente[i].querySelector(".info-dataDeNascimento").textContent.split('/')[2];
    var anoAtual = new Date().getFullYear();
    idade = anoAtual - dataDeNascimento;

    cliente[i].querySelector(".info-idade").innerHTML = idade;
}