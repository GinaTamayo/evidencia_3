let num = parseInt(prompt("Ingrese numero"));
let contador = 1;
let resultado = 0;
while (num != 0) { 
    num = parseInt(prompt("Ingrese numero"));
    resultado = resultado + num
    console.log(resultado / contador);
}