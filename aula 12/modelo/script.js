var agora = new Date()
var horas = agora.getHours()
/*
var div1 = window.document.getElementById('txt1')
var div2 = window.document.getElementById('img1')

horas = 19

if(horas > 12){
    div1.innerHTML = (`Agora são ${horas} horas.`)//boa tarde
    div2.innerHTML = ('<img src="fotomanha.png">')
    
}else if(horas > 18){
    div1.innerHTML = (`Agora são ${horas} horas.`) //boa noite
    div2.innerHTML = ('<img src="https://www.imagensbomdia.com/wp-content/uploads/2019/07/boa-noite_080-1-684x1024.jpg">')
}else if(horas < 12){
    div1.innerHTML = (`Agora são ${horas} horas.`)//bom dia
    div2.innerHTML = ('<img src="https://i.pinimg.com/originals/32/fd/39/32fd3974fb593394c26c4fe2adb89bf0.png">')
}
*/







//Declarando variaveis
var pegardata = new Date()
var horario = pegardata.getHours()
//Pegando os elementos para fazer a modificação do texto e imagem (DOM)
var txt1 = window.document.getElementById('txt1')
var img1 = window.document.getElementById('img1')


//Condição para alterar de acordo com o horario
//<br> quebra o texto
if(horario >= 0 && horario < 12){
    txt1.innerHTML = (`<strong>Bom dia!<strong> <br> Agora são ${horario} Horas.`)
    img1.innerHTML = (`<img src="fotomanha.png" alt="Imagem manhã">`)
    document.body.style.background = '#0000ff'
} else if(horario >= 12 && horario < 18){
    txt1.innerHTML = (`<strong>Boa tarde!<strong> <br>Agora são ${horario} Horas.`)
    img1.innerHTML = (`<img src="fototarde.png" alt="Imagem tarde">`)
    document.body.style.background = '#ffff00'
}else if(horario >= 18 && horario < 24){
    txt1.innerHTML = (`<strong>Boa noite!<strong> <br>Agora são ${horario} Horas.`)
    img1.innerHTML = (`<img src="fotonoite.png" alt="Imagem noite">`)
    document.body.style.background = '#993399'
}