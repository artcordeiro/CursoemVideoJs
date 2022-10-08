var idade = 11


if(idade < 18){
    console.log("Você é menor de idade")
} else {
    console.log("Você é maior de idade")
}



if(idade > 18 && idade < 65){
    console.log("Vota!")
    }else if(idade < 16){
        console.log("Não Vota")
    } else if(idade > 65){
        console.log("Voto Opcional!")
    }
    else{
        console.log("Voto Opcional!")
    }

console.log(`Você tem ${idade}.`)
if(idade >= 18 && idade < 65){
    console.log("Voto obrigatório!")
} else if (idade > 15 && idade < 18){
    console.log("Voto Opcional!")
} else if(idade >= 65){
    console.log("Voto Opcional")
} else {
    console.log("Não vota!")
}