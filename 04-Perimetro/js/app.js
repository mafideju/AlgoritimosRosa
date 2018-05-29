document.querySelector('#temp-form').addEventListener('submit', calcular);

//função calculadora
function calcular(e){
    // pegar o tamanho
    const tamanho = document.querySelector('#tamanho').value;
    // colocar o valor 
    const perimetro = document.querySelector('#perimetro');

    // calculos
    const radius = tamanho / 2;
    const principal = parseFloat(tamanho.value);
    const converte = parseFloat(2 * Math.PI * radius); 
    const area = parseFloat(Math.PI * radius * radius);
    const areaLateral = parseFloat(2 * Math.PI * radius * tamanho);
    const areaTotal = parseFloat(2 * area * areaLateral);
    
    

    //tela
    document.getElementById('perimetro').value = converte.toFixed(3);
    document.getElementById('radius').value = radius;
    document.getElementById('area').value = area.toFixed(3);
    document.getElementById('areaLateral').value = areaLateral.toFixed(3);        
    document.getElementById('areaTotal').value = areaTotal.toFixed(3);        
    

 e.preventDefault();
}

