document.querySelector('#temp-form').addEventListener('submit', calcular);

//função calculadora
function calcular(e){
    // pegar o valor em Celsius
    const celsius = document.querySelector('#celsius');
    // colocar o valor em fahrenheit
    const fahrenheit = document.querySelector('#fahrenheit');

    // calculos
    const principal = parseFloat(celsius.value);
    const converte = parseFloat((9 * principal + 160) / 5);
    
   
   console.log(converte);
    
   

 e.preventDefault();
}

