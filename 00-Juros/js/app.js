document.querySelector('#loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
    //buscar os elementos do DOM
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');        
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');
    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    
    // ajustes de calculo
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    // calculos em si - condicional, se os dados entrados estão corretos, calcule
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        showError('Problema Detectado. Confira os Numeros.')
    }

    e.preventDefault();
}
function showError(error){
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger text-white font-weight-bold';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);
    setTimeout((clearError) => {
        document.querySelector('.alert').remove();
    }, 3000);
}
