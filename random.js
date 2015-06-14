// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

console.log('\n ACZ 2015: Java script que devuelve número aleatorio entre 0 y 1. \n' )
var str =' MAYOR que 0,5';

if (numero <= 0.5){
  str = ' MENOR que 0,5';
}

console.log('\n' + numero + str + '\n');
