// ## Importe a biblioteca ##
let rs = require('readline-sync')
let mascara = rs.question ("Você está usando máscara ?")
let lavarasmaos = rs.question ("Você está lavando as mãos frequentemente ?")

if (mascara && lavarasmaos == "Sim") {
    console.log ("Parabêns você está seguindo as orientações corretamente")
} 
else {
    console.log ("Você não está agindo corretamente, use mascara e lave sempre as mãos")
}
// ## Faça o código ##
