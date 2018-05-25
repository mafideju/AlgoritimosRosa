document.querySelector('#numeros-quadrado').addEventListener('submit', calcular);
document.querySelector('#resetar').addEventListener('click', resetar)
 
//função calculadora
function calcular(e){
const n1 = document.getElementById('num1').value;
const n2 = document.getElementById('num2').value;
const n3 = document.getElementById('num3').value;
let quad1 = n1 * n1;
let quad2 = n2 * n2;
let quad3 = n3 * n3;
let soma = quad1 + quad2 + quad3;

document.querySelector('#quadra1').value = quad1;
document.querySelector('#quadra2').value = quad2;
document.querySelector('#quadra3').value = quad3;

document.querySelector('#quadraSoma').value = soma;

 e.preventDefault();
}
function resetar () {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('num3').value = '';
  document.querySelector('#quadra1').value = '';
  document.querySelector('#quadra2').value = '';
  document.querySelector('#quadra3').value = '';
  document.querySelector('#quadraSoma').value = '';
  
}
