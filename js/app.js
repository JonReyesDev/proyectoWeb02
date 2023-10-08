/* DECLARAR VARIABLES */

const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');

// se declaran los valores
let aside = document.getElementById('aside');
let estado = document.getElementById('status');

// se inician las variables
let valorAuto_e = document.getElementById('valorAuto');
let pInicial_e = document.getElementById('porcentaje');
let plazos_e = document.getElementById('plazos');
let pagoInicial_e = document.getElementById('pagoInicial'); 
let totalFin_e = document.getElementById('totalFin');
let pagoMensual_e = document.getElementById('pagoMensual');

btnCalcular.addEventListener('click', function() {
  // se calculan los valores una vez se presione calcular
  let valorAuto = valorAuto_e.value;
  let pInicial = pInicial_e.value;
  let plazos = plazos_e.value;
  
  // hacer los cálculos
  let pagoInicial = valorAuto * (pInicial / 100);
  let totalFin = valorAuto-pagoInicial;
  let pagoMensual = totalFin / plazos;

  // mostrar los datos
  pagoInicial_e.value = pagoInicial;
  totalFin_e.value = totalFin;
  pagoMensual_e.value = pagoMensual;

  if(
    valorAuto >= 0 && 
    pInicial >= 0 && 
    valorAuto.length > 0 &&
    pInicial.length > 0
    )
  {
    let newParagraph = document.createElement('table');
    newParagraph.innerHTML =
    `
    <thead>
      <th>Dato</th>
      <th>Valor</th>
    </thead>
    <tbody>
      <tr>
        <td>Valor de Auto</td> 
        <td>${valorAuto}</td>
      </tr>
      <tr>
        <td>Porcentaje de Pago Inicial</td>
        <td>${pInicial}</td>
      </tr>
      <tr>
        <td>Plazos</td>
        <td>${plazos} meses</td>
      </tr>
      <tr><td style="background-color: gainsboro; padding: 10px;" colspan="2">Cálculos</td></tr>
      <tr>
        <td>Pago Inicial</td>
        <td>${pagoInicial}</td>
      </tr>
      <tr>
        <td>Total a Financiar</td>
        <td>${totalFin}</td>
      </tr>
      <tr>
        <td>Pago Mensual</td>
        <td>${pagoMensual}</td>
      </tr>
    </tbody>
    `;
    aside.appendChild(newParagraph);
    // we update the status
    estado.style.backgroundColor = 'green';
    estado.style.color = 'white';
    estado.innerHTML = 'SE GUARDO EL REGISTRO CORRECTAMENTE';
  }
  else {
    estado.style.backgroundColor = 'red';
    estado.style.color = 'white';
    estado.innerHTML = 'INGRESE VALORES QUE SEAN VALIDOS';
  }
});

//LIMPIAR VALORES
btnLimpiar.addEventListener('click', () => {
  valorAuto_e.value = '';
  pInicial_e.value = '';
  plazos_e.selectedIndex = 0;
  pagoInicial_e.value = '';
  totalFin_e.value = '';
  pagoMensual_e.value = '';

  // se limpia el status
  estado.style.color = "black";
  estado.style.backgroundColor = "white";
  estado.innerHTML = 'SE LIMPIARON LOS VALORES'

});