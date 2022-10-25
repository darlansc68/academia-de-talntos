var cliente = document.querySelectorAll(".cliente");


for (var i = 0; i < cliente.length; i++){

    var dataDeNascimento = cliente[i].querySelector(".info-dataDeNascimento").textContent.split('/')[2];
    var anoAtual = new Date().getFullYear();
    idade = anoAtual - dataDeNascimento;

    cliente[i].querySelector(".info-idade").innerHTML = idade;
}
var somatoria = 0;
/*for(var j = 0; j < cliente.length; j++){
    var salario = parseFloat(cliente[j].querySelector(".info-renda").textContent);
    somatoria += salario;
    if (salario < 1212){
        prompt("Indicio de trabalho escravo! Favor justificar.")
        cliente[j].classList.add("indicio-escravidao");  
    }
}
document.querySelector(".total").innerHTML = somatoria;*/