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





