function verificar(){
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var genero = ''
        //criar o elemento IMG no HTML
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0  && idade < 10){
                //criança
                img.setAttribute('src','foto-criança-m.jpg')
            }else if (idade <= 20){
                //jovem
                img.setAttribute('src','foto-jovem-m.jpg')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src','foto-adulto-m.jpg')
            }else if(idade > 50){
                //idoso
                img.setAttribute('src','foto-idoso-m.jpg')
            }      
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0  && idade < 10){
                //criança
                img.setAttribute('src','foto-criança-f.jpg')
            }else if (idade <= 20){
                //jovem
                img.setAttribute('src','foto-jovem-f.jpg')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src','foto-adulto-f.jpg')
            }else if(idade > 50){
                //idoso
                img.setAttribute('src','foto-idoso-f.jpg')
            }  
        }
    
        // criança 0 - 10 
        // jovem < 21 
        // adulto <+ 50
        // idoso > 50
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
        
            
    }
}

