//Declarar Variables

const btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', function(){
    // Obtener los datos de los input
    let valorAuto = document.getElementById('valorAuto').value;
    let pInicial = document.getElementById('porcentaje').value;
    let plazos  = document.getElementById('plazos').value;

    // Hacer los calculos
    let pagoInicio = valorAuto * (pInicial/100);
    let totalFin = valorAuto - pagoInicio;
    let pagoMensual = totalFin / plazos;

    // Mostrar 
    document.getElementById('pagoInicial').value = pagoInicio;
    document.getElementById('totalFin').value = totalFin;
    document.getElementById('pagoMensual').value = pagoMensual;
})
