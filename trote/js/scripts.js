function calcular(){
    // declaração de variável sem tipo
    
    // recupera o valor da ação social digitado
    let soma = 0

    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)
    // recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    // '' valor do leite
    let leite = document.getElementById("leite").value
    soma = soma + Number(2 * Number(leite))

    let kitAvulso = document.getElementById("kitAvulso").value
    soma = soma + Number(30 * kitAvulso)
    
    let oleo = document.getElementById("oleo").value
    soma = soma + Number(oleo)

    let suplementoAvulso = document.getElementById("suplementoAvulso").value
    soma = soma + Number(15 * Number(suplementoAvulso))

    let macarrao = document.getElementById("macarrao").value
    soma = soma + (0.5 * Number(macarrao))

    //devolve o resultadop para HTML
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}