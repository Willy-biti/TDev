function cadastrarPessoas(){                                               //função de acionar o botão cadastrar
    var nome = $('#nome').val();                                        //pegando ID no html
    var sobreNome = $('#sobrenome').val();                     //pegando ID no html
    var cpf = $('#cpf').val();                                              //pegando ID no html
    var telefone = $('#telefone').val();                            //pegando ID no html
    var endereco = $('#endereco').val();                        //pegando ID no html
    
    //validação/verificação js puro

    if(nome == ""){
        alert("Por favor digite seu nome")
        document.getElementById("nome").focus();
        return;
    }
    if(sobreNome == ""){
        alert("Por favor digite seu sobrnome")
        document.getElementById("sobrenome").focus();
        return;
    }
    if(cpf == ""){
        alert("Por favor digite seu cpf")
        document.getElementById("cpf").focus();
        return;
    }
    if(telefone == ""){
        alert("Por favor digite seu telefone")
        document.getElementById("telefone").focus();
        return;
    }
    if(endereco == ""){
        alert("Por favor digite seu endereço")
        document.getElementById("endereco").focus();
        return;
    }

    var html = "<tr> id=linha-" + cpf + "'style='display:none'>";     //variável de pega a tableba no html
    html += "<td>"+ nome +"</td>";
    html += "<td>"+ sobreNome +"</td>";
    html +="<td>"+ cpf +"</td>";
    html += "<td>"+ telefone +"</td>";
    html += "<td>"+ endereco +"</td>";
    html += "</tr>";
    $('#registros').html($('#registros').html() +  html);

    //Limpando o campo imput depois de cadastrar
    $('.campo').val("");

    $('#formCadastro').hide("slow");               //esconder avec SHOW faz animação
    $('#mostrarForm').show("slow");                //Mostra avec SHOW faz animação

    $("#linha-" + cpf).fadeIn("slow");
}

// função para minstrar e esconder formuláriodepois de cadastrar
function mostarFormulario(){
    $('#mostrarForm').hide("show");                         //avec SHOW faz animação
    $('#formCadastro').show("show");                        //avec SHOW faz animação
}