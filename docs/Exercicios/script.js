 function pesquisaSatisfacao(){
   let totalNotas = 0;
   let satisfeitos = 0;
   let insatisfeitos = 0;
   let contador = 0;

   while(contador < 10 ){
    let nota = window.prompt(`Participante ${contador + 1}: Digite uma nota referente a sua satisfação (0 a 10)`);

    if (nota < 0 || nota > 10){
        alert (`Nota invalida, digite um número entre 0 e 10 `);
        continue;
    }

    totalNotas += nota;

    if (nota >= 8){
        satisfeitos++;
    } else if (nota <= 5 ){
        insatisfeitos++;
    }

    contador++;

    }

    let media = totalNotas / 10

    alert(
        `Resultado da Pesquisa:\n` +
        `Média das notas: ${media.toFixed(2)}\n` +
        `Total de satisfeitos (nota >= 8): ${satisfeitos}\n` +
        `Total de insatisfeitos (nota < 5): ${insatisfeitos}`
    )

   

}
