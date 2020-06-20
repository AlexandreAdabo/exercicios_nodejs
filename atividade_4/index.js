// ## Importe a biblioteca ##
let rs = require('readline-sync')
let dia = rs.questionInt("Qual dia você nasceu ?")

let mes = rs.questionInt("Qual mês você nasceu ?")

if ( (mes === 3 && (dia >= 21 && dia <= 31)) || mes === 4 && (dia >= 1 && dia <=19)) {
    console.log("Seu signo é Áries")
}
else if ( (mes === 4 && (dia >= 20 && dia <= 30)) || mes === 5 && (dia >= 1 && dia <=20)) {
    console.log("Seu signo é Touro")
}
else if ( (mes === 5 && (dia >= 21 && dia <= 31)) || mes === 6 && (dia >= 1 && dia <=20)) {
    console.log("Seu signo é Gemeos")
}
 else if ( (mes === 6 && (dia >= 21 && dia <= 30)) || mes === 7 && (dia >= 1 && dia <=21)) {
    console.log("Seu signo é Cancer")
}
 else if ( (mes === 7 && (dia >= 22 && dia <= 31)) || mes === 8 && (dia >= 1 && dia <=22)) {
    console.log("Seu signo é Leão")
}
 else if ( (mes === 8 && (dia >= 23 && dia <= 30)) || mes === 9 && (dia >= 1 && dia <=22)) {
    console.log("Seu signo é Virgem")
}
 else if ( (mes === 9 && (dia >= 23 && dia <= 31)) || mes === 10 && (dia >= 1 && dia <=22)) {
    console.log("Seu signo é Libra")
}
 else if ( (mes === 10 && (dia >= 23 && dia <= 30)) || mes === 11 && (dia >= 1 && dia <=21)) {
    console.log("Seu signo é Escorpião")
}
 else if ( (mes === 3 && (dia >= 22 && dia <= 31)) || mes === 4 && (dia >= 1 && dia <=21)) {
    console.log("Seu signo é Sagitário")
}
 else if ( (mes === 11 && (dia >= 22 && dia <= 30)) || mes === 12 && (dia >= 1 && dia <=20)) {
    console.log("Seu signo é Capricórnio")
}
 else if ( (mes === 12 && (dia >= 21 && dia <= 31)) || mes === 1 && (dia >= 1 && dia <=19)) {
    console.log("Seu signo é Aquario")
}
 else if ( (mes === 1 && (dia >= 20 && dia <= 29)) || mes === 2 && (dia >= 1 && dia <=20)) {
    console.log("Seu signo é Peixes")
}
 else {
    console.log("Você digitou uma data inválida")
 }
// ## Faça o código ##
