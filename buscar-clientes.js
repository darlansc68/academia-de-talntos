var botaoAdicionar = document.querySelector("#buscar-cliente");
botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://www.ksamochvalov.com/academia/listarClientes.php?matricula=F3295813");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status === 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            
            var clientes = JSON.parse(resposta);
            for(var x = 0; x < clientes.length; x++){
                var data = clientes[x].data_nascimento;
                var ano = data.split(0,3)[0];
                var anoNovo=parseInt(ano.split('-'));
                var mes = data.split(0,3)[1];
                var mesNovo=parseInt(mes.split('-'));
                var dia = data.split(0,3)[2];
                var diaNovo=parseInt(dia);
                if(diaNovo !== Number){
                    diaNovo = "5";
                }
                var novaData = "0"+diaNovo +'/'+ "0"+ mesNovo +'/'+ anoNovo;
            
               
                dataDeNascimento = novaData;


            }
    
            clientes.forEach(function(cliente){
                data_Nascimento = novaData;
                adicionaClienteNaTabela(cliente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
           
            erroAjax.classList.remove("invisivel");

        } 
    });
    xhr.send();
})