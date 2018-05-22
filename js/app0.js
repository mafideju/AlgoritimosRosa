// 1.	Leia a temperatura em graus Celsius e informe o correspondente em Fahrenheit. F=(9*C+160) / 5
let celsius;
function temp (cels) {
    return (9 * cels + 160) / 5
}
console.log(temp(prompt(celsius)))
// document.querySelector('textarea').innerText = temp(prompt(celsius)) + ' graus Fahrenheit';
