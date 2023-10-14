//Declarar Variables

const btnCalcular = document.getElementById('btnCalcular')

// Obtener los datos de los input
let peso = document.getElementById('valorPeso');
let altura = document.getElementById('valorAltura');
let imc = document.getElementById('imc');
let img_imc = document.getElementById('img-imc');
let edad = document.getElementById('valorEdad');
let calH = document.getElementById('calHombres');
let calM = document.getElementById('calMujeres');

btnCalcular.addEventListener('click', function(){
    // Hacer los calculos
    let imc2 = peso.value / (altura.value*altura.value);
    
    imc.value = imc2.toFixed(2)
    // Mostrar 

    let image = getImgIMC(imc2);
    img_imc.src = `${image}`;

    if(edad.value <= 0 ){
        calH.value = 'Ingrese una edad ';
        calM.value = 'Ingrese una edad ';
    }
    else if(edad.value < 10 ){
        calH.value = 'Necesita una edad mayor';
        calM.value = 'Necesita una edad mayor';
    }
    else if(edad.value >= 10 && edad.value <18){
      calH.value = ((17.686 * peso.value) + 658.2).toFixed(2) + '  cal';
      calM.value = ((13.384 * peso.value) + 692.6).toFixed(2) + '  cal';
    }
    else if(edad.value >= 18 && edad.value < 30){
      calH.value = ((15.057 * peso.value) + 692.2).toFixed(2) + '  cal';
      calM.value = ((14.818 * peso.value) + 486.6).toFixed(2) + '  cal';
    }
    else if(edad.value >= 30 && edad.value < 60){
        calH.value = ((11.472 * peso.value) + 873.1).toFixed(2) + '  cal';
        calM.value = ((8.126 * peso.value) + 845.6).toFixed(2) + '  cal';
    }
    else{
        calH.value = ((11.711 * peso.value) + 587.7).toFixed(2) + '  cal';
        calM.value = ((9.082 * peso.value) + 658.5).toFixed(2) + '  cal';
    }
})

function getImgIMC(imc1)
{
  if(imc1 < 18.5)
    return "../img/01.png";
  else if(imc1 <= 25)
    return "../img/02.png";
  else if(imc1 <= 30)
    return "../img/03.png";
  else if(imc1 <= 35)
    return "../img/04.png";
  else if(imc1 <= 40)
    return "../img/05.png";
  else
    return "../img/06.png";
}



