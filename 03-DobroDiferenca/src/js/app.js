document.getElementById('butone').addEventListener('click', dobro)

function dobro (e) {
    const x = document.getElementById('valorX').value;
    const y = document.getElementById('valorY').value;
    const xDob = x * 2;
    const yDob = y * 2;
    const xyDif = x - y;
    const xyDob = xyDif * 2;
    document.getElementById('valorXDobro').value = xDob;
    document.getElementById('valorYDobro').value = yDob;
    document.getElementById('diferenca').value = xyDif;
    document.getElementById('dobroDiferenca').value = xyDob;    

    //console.log(xyDob)
    e.preventDefault();
}
