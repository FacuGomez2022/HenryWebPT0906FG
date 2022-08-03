'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
       sum = sum + num[i] *  2 ** (num.length - 1 - i);
    }
    return sum;
}


function DecimalABinario(num) {
  // tu codigo aca
  //  7            4
  // 7/2=3(1)   4/2=2(0)
  // 3/2=1(1)   2/2=1(0)
  // 1/2=0(1)   1/2=0(1) 
  let binary = "";
  while (num !== 0) { 
    binary = num%2 + binary;
     num = Math.floor(num / 2)
  }
  return binary
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}