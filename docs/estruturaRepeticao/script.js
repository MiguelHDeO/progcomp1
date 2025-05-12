 function pesquisaSatisfacao(){
   let totalNotas = 0;
   totalNotas = Number(totalNotas)
   let satisfeitos = 0;
   satisfeitos = Number(satisfeitos)
   let insatisfeitos = 0;
   insatisfeitos = Number(insatisfeitos)
   let contador = 0;
   contador = Number(contador)

   while(contador < 10 ){
    let nota = window.prompt(`Participante ${contador + 1}: Digite uma nota referente a sua satisfação (0 a 10)`);
    nota = Number(nota)

    if (nota < 0 || nota > 10){
        alert (`Nota invalida, digite um número entre 0 e 10 `);
        continue;
    }

    totalNotas += nota;

    if (nota >= 8){
        satisfeitos++;
    } else if (nota < 5 ){
        insatisfeitos++;
    }

    contador++;

    }

    let media = totalNotas / 10
    media = Number(media)

    alert(
        `Resultado da Pesquisa:\n` +
        `Média das notas: ${media}\n` +
        `Total de satisfeitos (nota >= 8): ${satisfeitos}\n` +
        `Total de insatisfeitos (nota < 5): ${insatisfeitos}`
    )

   

}
