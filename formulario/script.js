function cadastrarPessoas(){    //função de acionar o botão cadastrar
    var nome = document.getElementById('nome').value;    //pegando ID no html
    var sobreNome = document.getElementById('sobrenome').value;   //pegando ID no html
    var cpf = document.getElementById('cpf').value;    //pegando ID no html
    var telefone = document.getElementById('telefone').value;   //pegando ID no html
    var endereco = document.getElementById('endereco').value;  //pegando ID no html
    
    //validação/verificação

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


    //Segundo tipo de validadção
    /*
    var mensagem = "";
    if(nome == ""){
        mensagem += " O nome\n"
    }
    if(cpf == ""){
        mensagem += "O cpf\n"
    }
    if(telefone == ""){
        mensagem += "O telefone\n"
    }
    if(endereco == ""){
        mensagem += "O endereço\n"
    }

    if(mensagem != ""){
        alert("prencher : \n " + mensagem)
        return;
    }
    */

    var html = "<tr>";     //variável de pega a tableba no html
    html += "<td>"+ nome +"</td>";
    html += "<td>"+ sobreNome +"</td>";
    html +="<td>"+ cpf +"</td>";
    html += "<td>"+ telefone +"</td>";
    html += "<td>"+ endereco +"</td>";
    html += "</tr>";
    document.querySelector('#registros').innerHTML += html;

    //Limpando o campo imput depois de cadastrar
    document.getElementById('nome').value = "";
    document.getElementById('sobrenome').value  = "";
    document.getElementById('cpf').value  = ""; 
    document.getElementById('telefone').value  = ""; 
    document.getElementById('endereco').value  = "";

    // alert("Cadastrado com sucesso")
    // document.getElementById('nome').focus();

    document.getElementById('formCadastro').style.display = "none";
    document.getElementById('mostrarForm').style.display = "block";
}


// função para minstrar e esconder formuláriodepois de cadastrar
function mostarFormulario(){
    document.getElementById('mostrarForm').style.display = "none";
    document.getElementById('formCadastro').style.display = "block";
}