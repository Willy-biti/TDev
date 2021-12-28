var singleton = {
    instancia: null,

    iniciar: function(){
        function Sgln(){
            this.nome = "";
            this.mostrarNaTela = function(){
                alert("fkbsk")
            }
        }
        if(singleton.instancia == null){
            singleton.instancia = new Sgln();
        }
    }
}