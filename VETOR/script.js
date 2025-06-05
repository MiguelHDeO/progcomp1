function exe1(){
    let vet = [], pares = [], impares=[]
    for(let i=0; i<6;i++){
        vet.push(Number(prompt(`informe o ${i+1}° número`)))
    }

    for(let i=0; i<6; i++){
        if(vet[i] % 2 == 0){
            pares.push(vet[i])
        } else {
            impares.push(vet[i])
        }
    }

    alert(`${pares.length} números pares:  ${pares}`)
    alert(`${impares.length} números impares:  ${impares}`)
}

function exe2(){
    let vet = [], pares = [], impares = []

    for(let i = 0; i < 10; i++){
        vet.push(Number(prompt(`informe o ${i+1}° número`)))
    }

    for(let i=0; i<10; i++){
        if(i % 2 == 0){
            pares[i] = vet[i] + 10
        }else{
            impares[i] = vet[i] * 5
        }
    }

    console.log (`pares: ${pares}`)
    console.log (`impares: ${impares}`)
}

function exe3(){
    let gostouM=0, gostou=0, nGostou=0, vet=[];
    
    for(let i=0;i<10;i++){
        do {
            vet[i] = (Number(prompt(`informe o ${i+1} valor: `)))
        } while (vet[i] != 2 && vet[i] != 1 && vet[i] != 3  );

        if(vet[i] == 1){
            gostouM++
        }else if(vet[i] == 2){
            gostou++
        }else{
            nGostou++
        }
    }
    console.log(`quantidade de pessoas que gostaram muito: ${gostouM}`)
    console.log(`quantidade de pessoas que gostaram: ${gostou}`)
    console.log(`quantidade de pessoas que não gostaram: ${nGostou}`)

    console.log(`porcentagem de pessoas que não gostaram: ${(nGostou/vet.length)*100}`)
}




