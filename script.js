const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn-calcular');
const pResul = document.querySelector('#result');
const form = document.querySelector('#form');


form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
    event.preventDefault();
    const sumaInput = Number(input1.value) + Number(input2.value);
    pResul.innerHTML = 'Resultado: ' + sumaInput;
}

