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
function exe3(){
    let cont = 1
    let  idade, f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0;

    while(cont <= 8){
        
        idade = Number(prompt(`informe idade da pessoa ${cont}`));
        if (idade >= 0 && idade <=15){
            f1++;
        }else if (idade >= 16 && idade<= 30){
            f2++;
        }else if (idade >= 31 && idade<=45){
            f3++;
        }else if (idade >= 46 && idade <= 60){
            f4++;
        }else if (idade >= 61){
            f5++;
        }else{
            prompt(`idade inválida`);
            continue;
        }
        cont++
        
        
    } 
    alert(`F1 ${f1} F2 ${f2} F3 ${f3} F4 ${f4} F5 ${f5}`)
}
function exe1(){
    let a,b,c,d, aux
    let grupo = 1
    while (grupo <= 5){
        let conta = 1
        //sorting
        a = Number(prompt(`informe o valor de A`));
        b = Number(prompt(`informe o valor de B`));
        c = Number(prompt(`informe o valor de C`));
        d = Number(prompt(`informe o valor de D`));
        while(conta <=3){
            if(a > b){
                aux = a; a = b; b = aux;
            }
            if(b > c){
                aux = b; b = c; c = aux;
            }
            if(c > d){
                aux = c; c = d; d = aux;
            }
            conta++;
        }
        alert(`Grupo ${grupo}`)
        alert (`ordem crescente ${a} ${b} ${c} ${d}`);
        alert (`ordem decrescente ${d} ${c} ${b} ${a}`);
        grupo++;
    }
    
}

function exe2(){
    let preco = 5.0;
    let qtd = 120;
    const despesa = 200;
    let lucro = 0;
    let aux = ""
    let lucroM = 0, qtdM = 0, precoM = 0


    while (preco >= 1){
        lucro = ((preco * qtd) - despesa);

        if(lucro > lucroM){
            lucroM = lucro;
            precoM = preco;
            qtdM = qtd;

        }
        aux = aux + (`\nPreço: ${preco} - Quantidade: ${qtd} - Despesa: ${despesa} - Lucro ${lucro}\n`);
        
        if(lucro > lucroM){
            lucroM = lucro
        }

        preco = preco - 0.5;
        qtd = qtd + 26;
        
    }
alert(aux);
alert(`Maior lucro: ${lucroM} Com preço: ${precoM} e Quantidade: ${qtdM}`);
}

function exe4(){
    let numero;
    let resultado

    numero = Number(prompt(`informe o valor para fazer a tabuada`));


    for(let conta = 1; conta <= 10; conta++ ){
        
        resultado = numero * conta;
        console.log(`\n${numero} x ${conta} == ${resultado}`);
    }
}

function exe5(){

    for(let cont = 1; cont <= 10; cont++){
        for(let conta = 1; conta <= 10; conta++){
            
            console.log(`\n${cont} x ${conta} = ${cont*conta}`);
        }
    }
    
}

function exe6(){
    let codigo, valor, v = 0, p = 0, pp = 0, somaV = 0, somaP = 0, somaPP = 0;

    for(let cont = 1; cont <= 5; cont++){
        do{
        codigo = prompt(`Informe o código do tipo de transação(V à vista ou P à prazo)`);
        
        }while( codigo != `V` && codigo !=`P`)
            
        do {
            valor = Number(prompt(`\nInforme o valor da transação`))
        }while (valor < 0)

        if (codigo == `V`){
            v += valor

            somaV += v;
        }
        else {
            p += valor
            pp += p/ 3

            somaP += p;
            somaPP += pp;
        }

        
        

        console.log(`valor total das contas a vista: R$${somaV}\n`);
        console.log(`valor total das contas a prazo: R$${somaP}\n`);
        console.log(`valor total primeiras parcelas: R$${somaPP}\n`);

        
    }
}
function exe7(){
    let idade, altura, peso, maior50 = 0, kg40 = 0, somaAltura= 0, qtde= 0;

    for(let conta = 1; conta <= 5; conta++){
        do{
            idade = Number(prompt(`Informe sua idade: `));
        }while( idade < 0);
        do{
            altura = Number(prompt(`\nInforme sua altura: `));
        }while( altura < 0);
        do{
            peso = Number(prompt(`\nInforme seu peso: `));
        }while(peso < 0);

        if(idade > 50){
            maior50++;
        }

        if(idade >= 10 && idade <= 20){
            somaAltura = somaAltura + altura
            qtde++
        }

        if(peso < 40){
            kg40++;
        }
    }

        console.log(`Quantidade de pessoas com idade a cima de 50: ${maior50}\n`);
        console.log(`Media da altura das pessoas entre 10 e 20 anos: ${somaAltura / qtde}\n`);
        console.log(`Porcentagem de pessoas com peso inferior a 40kg:${kg40 / 5 * 100}%\n`);

}
function exe8(){
    let corOlho, corCabelo, idade, peso, altura, sup50 = 0, mediaidade= 0, contidd= 0, contA = 0, contRnaoAzul = 0;

    for(let conta = 1; conta <= 6; conta++){
        do{
            idade = Number(prompt(`Informe sua idade: `));
        }while( idade < 0);
        do{
            peso = Number(prompt(`Informe seu peso: `));
        }while( peso < 0);
        do{
            altura = Number(prompt(`Informe sua altura: `));
        }while( altura < 0);

        do{
            corOlho = Number(prompt(`Informe a cor do seu Olho (A -- azul, P -- preto, V -- verde, C -- castanho): `));
        }while( corOlho != A || P || V || C);
        do{
            corCabelo = Number(prompt(`Informe a cor do seu Cabelo (L -- louro, P -- preto, R -- ruivo, C -- castanho): `));
        }while( corCabelo != L || P || R || C);

        if(idade >50 && peso < 60){
            sup50++;
        }

        if(altura < 1.5){
            mediaidade += idade;
            contidd++;
        }

        if(corOlho == A){
            contA++;
        }

        if(corCabelo == R && corOlho != A ){
            contRnaoAzul++;
        }
    }

    console.log(`A quantidade de pessoas com idade superior a 50 e peso inferior a 60KG é: ${sup50}`);
    console.log(`A media da idade das pessoa com menos de 1.5 de altura é: ${mediaidade/contidd}`);
    console.log(`A porcentagem de pessoas com olhos azuis dentre o total: ${contA*100/6}`);
    console.log(`Quantidade de pessoas de cabelo ruivo que não tem olhos azuis: ${contRnaoAzul}`);
}

function exe9(){
    let peso, idade, altura, mediaIdade, peso90 = 0, pessoa1_9 = 0, porcentagem = 0;

    for(let i = 0; i < 10; i++){
        peso = Number(prompt(`Pessoa ${i} informe seu peso: `));
        idade = Number(prompt(`Pessoa ${i} informe sua idade: `));
        altura = Number(prompt(`Pessoa ${i} informe sua altura: `));
    }

    for(let i = 0; i <10 ; i++){
       mediaIdade += idade;
       if(peso > 90 && altura < 1.50){
        peso90++;
       }
       if(altura > 1.9){
        pessoa1_9++;
        if(idade >= 10 && idade <= 30){
            porcentagem++;
        }

       }
    }

    console.log(`Média da idade ${mediaIdade/10}`);
    console.log(`quantidade de pessoas com peso superior a 90 e altura inferior a 1.5: ${peso90}`);
    console.log(`porcentagem de pessoas com altura superior a 1.9 e idade entre 10 e 30 anos: ${porcentagem*100/pessoa1_9} `);
}

function exe10(){
    let i = 0;
let num;
let somaPares = 0;
let somaPrimos = 0;

while (i < 10) {
  num = Number(prompt("Digite o número " + (i + 1) + ":"));


  if (num % 2 === 0) {
    somaPares = somaPares + num;
  }


  let div = 1;
  let contDiv = 0;

  while (div <= num) {
    if (num % div === 0) {
      contDiv = contDiv + 1;
    }
    div = div + 1;
  }

  if (contDiv === 2) {
    somaPrimos = somaPrimos + num;
  }

  i = i + 1;
}

console.log("Soma dos números pares: " + somaPares);
console.log("Soma dos números primos: " + somaPrimos);


}

