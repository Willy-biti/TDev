function cadastrarPessoas(){    //função de acionar o botão cadastrar
    var nome = document.getElementById('nome').value;    //pegando ID no html
    var sobreNome = document.getElementById('sobrenome').value;   //pegando ID no html
    var cpf = document.getElementById('cpf').value;    //pegando ID no html
    var telefone = document.getElementById('telefone').value;   //pegando ID no html
    var endereco = document.getElementById('endereco').value;  //pegando ID no html
    
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

    alert("Cadastrado com sucesso")

    document.getElementById('nome').focus();
}