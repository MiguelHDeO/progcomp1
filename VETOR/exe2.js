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