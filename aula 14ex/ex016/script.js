//Puxando os elementos com DOM, para conseguir fazer as modificações

function contar(){
    //declarando variaveis
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    //Validação de dados
    if (ini.value.length == 0 || fim.value.length  == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[Erro] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { 
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            //Contagem regressiva
        }

        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML +=`\u{1F3C1}`
    }


}














/*
var agora = new Date()
var horas = agora.getHours()
Declarando variaveis
var pegardata = new Date()
var horario = pegardata.getHours()
Pegando os elementos para fazer a modificação do texto e imagem (DOM)
var txt1 = window.document.getElementById('txt1')
var img1 = window.document.getElementById('img1')
Condição para alterar de acordo com o horario
<br> quebra o texto
*/






