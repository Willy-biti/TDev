var cliente = function(){
    this.codigoDoCliente = "";
    this.gravarEmMemoria = function(){ //criando base
        cliente.Base.push(this);
    }
    this.super = pessoa.prototype; // Mandando pra base pai os dados
    this.original = function(){
        console.log("sobrescrevi a função original")
        this.super.original();
    }
}

cliente.prototype = new pessoa();    //herança da classe pessoa
cliente.Base = [];  //propria base