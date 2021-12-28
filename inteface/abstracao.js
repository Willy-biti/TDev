var abstracao = function(){
    if(this.constructor === abstracao){
        throw new Error("Não pode instanciar classe abstrata!")  //execução do erro
    }
}

abstracao.prototype.nome ="";
abstracao.prototype.telefone = "";
abstracao.prototype.email = "";
abstracao.prototype.cpf ="";
abstracao.prototype.gravarEmMemoria = function(){
    throw new Error("Obrigatório a implementanção do metodo grvarMemoraia, para classes filhas");
    //criar um erro condicional
}