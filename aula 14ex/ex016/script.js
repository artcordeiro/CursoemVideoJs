//Puxando os elementos com DOM, para conseguir fazer as modificações

function contar(){

    //Puxando os elementos
    var varInit = document.getElementById('varInit')
    var varFin = document.getElementById('varFin')
    var varCont = document.getElementById('varCont')

    //converter para numero
    varInit = Number(varInit.value)
    varFin = Number(varFin.value)
    varCont = Number(varCont.value)

    if(varInit.value.length == 0){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else if(varFin.value.length == 0){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else if(varCont.value.length == 0){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else if(varCont == 0){
        window.alert(`Passo inválido. Considerando PASSO 1!`)
        varCont = 1 
            for(var i = varInit; i <= varFin; i += varCont){
                res.innerHTML += (`${i} ,`)
                }
    } else {
        for(var i = varInit; i <= varFin; i += varCont){
            res.innerHTML += (`${i} ,`)
            }
    }






    



}


/*
    var txt1 = document.getElementById('txt1')
    var txt2 = document.getElementById('txt2')
    var txt3 = document.getElementById('txt3')
    var res = document.getElementById('res')



        //ver resolução para corrigir validação
    if(varInit == 0){
        res.innerHTML = (`Impossível contar!`)
    }
     else if(varFin == 0){
        res.innerHTML = (`Impossível contar!`)
    }
     else if(varCont == 0){
        res.innerHTML = (`Impossível contar!`)
    }
     else if(varCont == 0){
        window.alert(`Passo inválido. Considerando PASSO 1`)
        varCont = 1
        for(var i = varInit; i <= varFin; i += varCont){
            res.innerHTML += (`${i}, `)
        }
        res.innerHTML +=(` <strong>Fim!<strong>`)

    } else {
        for(var i = varInit; i <= varFin; i += varCont){
            res.innerHTML += (`${i}, `)
        }
        res.innerHTML +=(` <strong>Fim!<strong>`)
    }



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






