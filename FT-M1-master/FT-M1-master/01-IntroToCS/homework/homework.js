'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let newArray = num.split("").reverse(); //con split transformarmos el numero en un array de todos los elementos.
  let aux = 0;
  for (let i = 0; i < newArray.length; i++) {
    aux += newArray[i]*Math.pow(2, i)
  }
  return aux
}

function DecimalABinario(num) {
  // tu codigo aca
  let arr = [];
  while(num > 0){
    arr.unshift(num%2);
    num = Math.floor(num/2) 
    console.log(num)
  }
  return arr.join("");
}

console.log(DecimalABinario(10))


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}