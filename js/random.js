// Manejo de Arrays
const btnGenerarNumeros = document.getElementById('btnGenerarNumeros');
const btnLimpiar = document.getElementById('btnLimpiar');

const btnMostrarArray = document.getElementById('btnMostrarArray');
const btnMostrarPares = document.getElementById('btnMostrarPares');
const btnMostrarMax = document.getElementById('btnMostrarMax');
const btnMostrarPromedio = document.getElementById('btnMostrarPromedio');
const btnMostrarMin = document.getElementById('btnMostrarMin');
const btnMostrarPorcentajeSimetria = document.getElementById('btnMostrarPorcentajeSimetria');

let cantidadNumerosGenerar = document.getElementById('cantidadNumeros');
let cbNumerosGenerados = document.getElementById('numerosGenerados');
let txtPorcentajePares = document.getElementById('porcentaje-pares');
let txtPorcentajeImpares = document.getElementById('porcentaje-impares');
let txtPorcentajeResultados = document.getElementById('porcentaje-resultados');
let textarea = document.getElementById('arrayText');

btnGenerarNumeros.addEventListener('click', function () {
  
  if(cantidadNumerosGenerar.value.length !== 0 || cantidadNumerosGenerar <= 0)
  {
    cbNumerosGenerados.innerHTML = '';
    let numbers = generateRandomNumber(cantidadNumerosGenerar.value);
    for(let i = 0; i < numbers.length; i++) {
      let newOption = document.createElement('option');
      newOption.value = numbers[i];
      newOption.innerHTML = numbers[i];
      cbNumerosGenerados.appendChild(newOption);
    }
    let evenPorcentage = getEvenPorcentage(numbers, cantidadNumerosGenerar.value);
    let oddPorcentage = getOddPorcentage(numbers, cantidadNumerosGenerar.value);
    let difference = Math.abs(evenPorcentage - oddPorcentage);

    txtPorcentajePares.innerHTML = `Porcentajes de pares: ${evenPorcentage}%`;
    txtPorcentajeImpares.innerHTML = `Porcentajes de impares: ${oddPorcentage}%`;
    
    if((evenPorcentage - oddPorcentage) === 0)
      txtPorcentajeResultados.innerHTML = `Es arreglo es simétrico`;
    else
      txtPorcentajeResultados.innerHTML = `No hay simetría, hay una diferencia de ${difference}%`;
  }
  else
    console.error("Inserte un número valido");

});

btnMostrarArray.addEventListener('click', () => {
  let array = getCurrentValues();
  textarea.innerHTML = mostrarArray(array);
});
btnMostrarPares.addEventListener('click', () => {
  let array = getCurrentValues().map(str => parseInt(str));
  textarea.innerHTML = getPares(array);
});
btnMostrarMax.addEventListener('click', () => {
  let array = getCurrentValues().map(str => parseInt(str));
  textarea.innerHTML = getMax(array);
});
btnMostrarPromedio.addEventListener('click', () => {
  let array = getCurrentValues().map(str => parseInt(str));
  textarea.innerHTML = getAvg(array);
});
btnMostrarMin.addEventListener('click', () => {
  let array = getCurrentValues().map(str => parseInt(str));
  textarea.innerHTML = getMin(array);
});
btnMostrarPorcentajeSimetria.addEventListener('click', () => {
  let array = getCurrentValues().map(str => parseInt(str));
  let evenPorcentage = getEvenPorcentage(array, cantidadNumerosGenerar.value);
  let oddPorcentage = getOddPorcentage(array, cantidadNumerosGenerar.value);
  let difference = Math.abs(evenPorcentage - oddPorcentage);
  textarea.innerHTML = `Porcentaje de simetrïa: ${100-difference}%`;
});

btnLimpiar.addEventListener('click', () => {
  limpiar();
});

let arreglo = [4,89,30,10,34,89,10,5,8,28];

// Mostrar los elementos de un arreglo
function mostrarArray(arreglo) {
  let tamaño = arreglo.length;
  let res = '';
  for(let con=0; con < tamaño; ++con) {
    res += `Posicion ${con}: ${arreglo[con]}\n`;
  }
  return res += `El tamaño del arreglo es: ${tamaño}`;
}

// Mostrar los numeros  pares
function getPares(arreglo) {
  let CNumPares = [];
  for(let i = 0; i < arreglo.length; i++) {
    if(arreglo[i] % 2 === 0)
      CNumPares.push(arreglo[i]);
      'Posicion ' + i + ':' + arreglo[i];
  }
  return 'Números pares: ' + CNumPares.join(', ') + `\nCantidad de números pares: ` + CNumPares.length;
}

// Mostrar el valor mayor y su posición
function getMax(arreglo) {
  let max = 0;
  let p = 0;
  for(let i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > max) {
      max = arreglo[i];
      p = i;
    }
  }
  return `Numero máximo del arreglo: ${arreglo[p]}\nPosición: ${p}`;
}

// Mostrar el promedio de una arreglo
function getAvg(arreglo) {
  let sum = 0;
  for (let i = 0; i < arreglo.length; i++)
    sum += arreglo[i];
  return 'El promedio del arreglo es: ' + (sum/arreglo.length).toFixed(2);
}

// Mostrar el valor menor y su posicion 
function getMin(arreglo) {
  let min = arreglo[0];
  let p = 0;
  for(let i = 0; i < arreglo.length; i++) {
    if(min > arreglo[i]) {
      min = arreglo[i];
      p = i;
    }
  }
  return `Menor numero del arreglo: ${arreglo[p]}\nPosición: ${p}`;
}

// Generar numeros aleatorios para meterlos al arreglo
function generateRandomNumber(n) {
  let array = [];
  for(let i = 0; i < n; i++) {
    array.push(Math.ceil(Math.random()*10));
  }
  return array;
}

// Mostrar el porcentaje de simetría de los numeros aleatorios
function comprobar(arreglo) {
  let c_impar = 0, c_par = 0;
  for(let i = 0; i < 10; i++) {
    if(arreglo[i] % 2 === 0) c_par++;
    else c_impar++;
  }
  if(Math.abs(c_par - c_impar) > 1) return false;
  else return true;
}

function getEvenPorcentage(arreglo,n) {
  let c_par = 0;
  for(let i = 0; i < n; i++)
    if(arreglo[i] % 2 === 0) c_par++;
  return c_par * 100 / n;
}

function getOddPorcentage(arreglo,n) {
  let c_impar = 0;
  for(let i = 0; i < n; i++)
    if(arreglo[i] % 2 !== 0) c_impar++;
  return c_impar * 100 / n;
}

function limpiar() {
  cantidadNumerosGenerar.value = '';
  cbNumerosGenerados.innerHTML = '';
  textarea.value = '';
  txtPorcentajePares.innerHTML = 'Porcentajes de pares: ';
  txtPorcentajeImpares.innerHTML = 'Porcentajes de impares: ';
  txtPorcentajeResultados.innerHTML = 'Inserte valores para saber si es simétrico';
}

function getCurrentValues() {
  let array = [];
  for(let i = 0; i < cbNumerosGenerados.options.length; i++) {
    array.push(cbNumerosGenerados.options[i].value);
  }
  return array;
}