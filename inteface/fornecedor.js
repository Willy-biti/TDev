var fornecedor = function(){
    this.cnpj = ""

    this.super = pessoa.prototype;  //mandar para base pai (que é pessoas)

    this.entregarProdutos = function(){
        alert("blablabla")
    }
    this.gravarEmMemoria = function(){
        fornecedor.Base.push(this);
        this.super.gravarEmMemoria();  //chamar o mandar  para base pai
    }
}

fornecedor.prototype = new pessoa();  //herança da classe pessoa

fornecedor.Base = [];  //propria base