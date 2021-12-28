function capturarAluno(){
    for(i=0; i<3; i++)
    {
        nome = prompt("Digite o nome do aluno");
        notas = []
        for(x=1; x<=2; x++){
            nota = prompt("Digite a nota de numero" + x + "do alunos" + nome );
            nota = parseInt(nota);
            notas.push(nota)
        }
        aluno = {}
        aluno.nome = nome
        aluno.notas = notas
        alunos.push(aluno);
    }
    return alunos
}