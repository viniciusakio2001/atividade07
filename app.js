

function calcular() {
    let raio = Number(document.querySelector('.raio').value);
    let pi = 3.14;
    let area = pi * (raio*raio);
    let perimetro =  (2*pi *raio).toFixed(2);
    let resultadoarea = document.querySelector('.resultadoarea');
    resultadoarea.innerHTML = `A área do circulo é: ${area}`;
    let resultadoperimetro = document.querySelector('.resultadoperimetro');
    resultadoperimetro.innerHTML = `O Perimetro do circulo é: ${perimetro}`;
}