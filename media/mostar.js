function mostrarAlunos(alunos){
    for(i=0; i<alunos.length; i++){
        aluno = alunos[i]
        mostarnaTela("O aluno" + aluno.nome + " teve as notas:");
        somaDasNotas = 0;
        for(x=0; x<aluno.notas.length; x++){
            nota = aluno.notas[x];
            somaDasNotas = somaDasNotas + nota
            mostarnaTela('Nota' + (x+1)+ ': ' + nota );
        }
        media = somaDasNotas/aluno.notas.length;
        mostarnaTela("A media do aluno" + media );
        mostarnaTela("======================");
    }
}
