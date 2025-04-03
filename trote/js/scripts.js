function calcular()
{
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

    let suplemento = document.getElementById("suplemento").value
    soma = soma + Number(15 * Number(suplemento))

    let kit = Number(document.getElementById("kit").value)
    soma = soma + Number(30 * kit)
    //recupera cor da equipe

    let equipe = document.getElementById("equipe").value
    let pontosKitSup = 0 // guarda pontuação do kit
    if (equipe == "Laranja")
    {
        // esquipe é laranja
        if  (kit >= 97 && suplemento >=49){
            pontosKitSup = 5000 + ((kit - 97)* 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >=39){
            pontosKitSup = 4000 + ((kit - 78)* 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >=25){
            pontosKitSup = 2500 + ((kit - 49)* 30) + ((suplemento - 25) * 15)
        }
        else if (kit >=19 && suplemento >=10){
            pontosKitSup = 1000 + ((kit - 19)* 30) + ((suplemento - 25) * 15)
        }
    }    

    if (equipe == "Preta")
    {
        if  (kit >= 103 && suplemento >=52){
            pontosKitSup = 5000 + ((kit - 103)* 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82 && suplemento >=42){
            pontosKitSup = 4000 + ((kit - 82)* 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52 && suplemento >=26){
            pontosKitSup = 2500 + ((kit - 52)* 30) + ((suplemento - 26) * 15)
        }
        else if (kit >=21 && suplemento >=10){
            pontosKitSup = 1000 + ((kit - 21)* 30) + ((suplemento - 10) * 15)
        }
    }
    
    if (equipe == "Roxa")
    {
        if  (kit >= 102 && suplemento >=51){
            pontosKitSup = 5000 + ((kit - 102)* 30) + ((suplemento - 51) * 15)
        }
        else if (kit >= 82 && suplemento >=41){
            pontosKitSup = 4000 + ((kit - 82)* 30) + ((suplemento - 41) * 15)
        }
        else if (kit >= 51 && suplemento >=26){
            pontosKitSup = 2500 + ((kit - 51)* 30) + ((suplemento - 26) * 15)
        }
        else if (kit >=20 && suplemento >=10){
            pontosKitSup = 1000 + ((kit - 20)* 30) + ((suplemento - 10) * 15)
        }
    } 

    if (equipe == "Verde")
    {
        if  (kit >= 88 && suplemento >=44){
            pontosKitSup = 5000 + ((kit - 88)* 30) + ((suplemento - 44) * 15)
        }
        else if (kit >= 70 && suplemento >=35){
            pontosKitSup = 4000 + ((kit - 70)* 30) + ((suplemento - 35) * 15)
        }
        else if (kit >= 44 && suplemento >=22){
            pontosKitSup = 2500 + ((kit - 44)* 30) + ((suplemento - 22) * 15)
        }
        else if (kit >=18 && suplemento >=9){
            pontosKitSup = 1000 + ((kit - 18)* 30) + ((suplemento - 9) * 9)
        }
    } 

    if (equipe == "Vermelha")
    {
        if  (kit >= 93 && suplemento >=47){
            pontosKitSup = 5000 + ((kit - 93)* 30) + ((suplemento - 47) * 15)
        }
        else if (kit >= 74 && suplemento >=38){
            pontosKitSup = 4000 + ((kit - 74)* 30) + ((suplemento - 38) * 15)
        }
        else if (kit >= 47 && suplemento >=24){
            pontosKitSup = 2500 + ((kit - 47)* 30) + ((suplemento - 24) * 15)
        }
        else if (kit >=19 && suplemento >=9){
            pontosKitSup = 1000 + ((kit - 19)* 30) + ((suplemento - 9) * 9)
        }
    } 
        

    
       

    alert(pontosKitSup)    
    
    let oleo = document.getElementById("oleo").value
    soma = soma + Number(oleo)

    let macarrao = document.getElementById("macarrao").value
    soma = soma + (0.5 * Number(macarrao))

    let arroz5kg = document.getElementById("arroz5kg").value
    soma = soma + (5 * Number(arroz5kg))

    let arroz1kg = document.getElementById("arroz1kg").value
    soma = soma + Number(arroz1kg)

    let feijão2kg = document.getElementById("feijão2kg").value
    soma = soma + (2 * Number(feijão2kg))

    let feijão1kg = document.getElementById("feijão1kg").value
    soma = soma + Number(feijão1kg)

    //devolve o resultado para HTML
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}