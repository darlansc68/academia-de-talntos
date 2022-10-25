var cliente = document.querySelectorAll(".cliente");

var somatoria = 0;

for(var j = 0; j < cliente.length; j++){
    var salario = parseFloat(cliente[j].querySelector(".info-renda").textContent);
    somatoria += salario;
    if (salario < 1212){
        prompt("Indicio de trabalho escravo! Favor justificar.")
        cliente[j].classList.add("indicio-escravidao");  
    }
}
document.querySelector("#resultado").innerHTML = somatoria;