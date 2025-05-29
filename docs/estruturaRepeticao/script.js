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
    let codigo, valor = 0, v = 0, p = 0, pp = 0, somaV = 0, somaP = 0, somaPP = 0;

    for(let cont = 1; cont <= 5; cont++){

        codigo = prompt(`Informe o código do tipo de transação`);
        valor = Number(prompt(`\nInforme o valor da transação`));

        if(codigo == `V`){
            v += valor
        }else if(codigo == `P`){+-.-+.+-+
            p += valor
            pp += valor / 3
        }else{
            alert(`o código digitado é inválido`)
        }

        somaV += v
        somaP += p
        somaPP += pp

        console.log(`valor total das contas a vista: R$${somaV}\n`)
        console.log(`valor total das contas a prazo: R$${somaP}\n`)
        console.log(`valor total primeiras parcelas: R$${somaPP}\n`)

        
    }
}

