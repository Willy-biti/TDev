var pessoa = function(_campos){
    if(_campos!= undefined){
        this.nome = _campos.nome;
        this.telefone = _campos.telefone;
        this.email = _campos.email;
        this.cpf = _campos.cpf;
    } 

    this.mostrar = function(){
        document.write("Nome: " + this.nome + "<br>");
        document.write("Telefone: " + this.telefone + "<br>");
        document.write("Email: " + this.email + "<br>");
        document.write("Cpf: " + this.cpf + "<br>");
    }
    
}

pessoa.prototype = abstracao.prototype;  // chamar a classr abstração hedando

pessoa.prototype.original = function(){
    console.log('function original');
}

pessoa.prototype.gravarEmMemoria = function(){
    pessoa.Base.push(this);
}

pessoa.Base = [];

pessoa.todos = function(){
    html = "<h1> Estou executatndo um metodo de classe </h1>";

    for(i=0; i<pessoa.BaseDePessoas.length; i++){
        pessoa = pessoa.BaseDePessoas[i];

        html += "Nome: " + pessoa.nome + "<br>";
        html += "Telefone: " + pessoa.telefone + "<br>";
        html += "Email: " + pessoa.email + "<br>";
        html += "Cpf: " + pessoa.cpf + "<br>";
        html +=  "<br>";
    }

    document.querySelector('resultado').innerHTML = html;
}