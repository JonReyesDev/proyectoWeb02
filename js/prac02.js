//Declarar Variables

const btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', function(){
    // Obtener los datos de los input
    let peso = document.getElementById('valorPeso').value;
    let altura = document.getElementById('valorAltura').value;

    // Hacer los calculos
    let imc2 = peso / (altura*altura);
    
    let imc1 = imc2.toFixed(2)
    // Mostrar 

    document.getElementById('imc').value = imc1;
    
})
