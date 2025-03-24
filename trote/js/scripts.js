function calcular(){
    // recupera o valor da ação social digitado
    // declaração de variável sem tipo
    let acaoSocial = document.getElementById("acaoSocial").value
    // recupera o calor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    // soma de valores 
    let soma = Number(acaoSocial) + Number(homenagem) 
    // alert para dizer o que há na variável
    alert(soma)
}