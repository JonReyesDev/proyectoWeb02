// declara objeto alumno

let alumno = {
    matricula: '2021030101',
    nombre: 'Yohan Alek Plazola Arangure',
    grupo: 'TI-73',
    carrera: 'Tecnologías de la Información',
    foto: 'Foto hipotetica',
};

let alumnos = [
    {
        matricula: '2021030311',
        nombre: 'Jonathan Alexis Reyes Lizarraga',
        grupo: '7-3',
        carrera: 'Tecnologías de la Información',
        foto: '../img/elwero.jfif',
    },
    {
        matricula: 'mosuna@upsin.edu.mx',
        nombre: 'Melissa Osuna Cardenas',
        grupo: '7-3',
        carrera: 'Tecnologías de la Información',
        foto: '../img/lamelissa.jpg',
    },
    {
        matricula: '2020030321',
        nombre: 'Ontiveros Govea Yair Alejandro ',
        grupo: '7-3',
        carrera: 'Tecnologías de la Información',
        foto: '../img/govea.jfif',
    },
    {
        matricula: '2021030314',
        nombre: 'Peñaloza Pizarro Felipe Andrés',
        grupo: '7-3',
        carrera: 'Tecnologías de la Información',
        foto: '../img/elpeña.jfif',
    },
    {
        matricula: '2021030077',
        nombre: 'Mateo Arias Tirado',
        grupo: '7-3',
        carrera: 'Tecnologías de la Información',
        foto: '../img/elmateo.jfif',
    },
    {
        matricula: '2021030262',
        nombre: 'Qui Mora Ángel Ernesto',
        grupo: '7-3',
        carrera: 'Tecnologías de la Información',
        foto: '../img/elqui.jfif',
    },
    {
        matricula: '2021030115',
        nombre: 'Abel Sanchez Urrea',
        grupo: '7-2',
        carrera: 'Tecnologías de la Información',
        foto: '../img/elabel.jfif',
    },
    {
        matricula: '2020041267',
        nombre: 'Roberto Gracia Ornelas',
        grupo: '1-2',
        carrera: 'Ing. Aeroespacial',
        foto: '../img/elveto.webp',
    },
    {
        matricula: '2021030142',
        nombre: 'Jonathan Jesus Aguilar Romero',
        grupo: '7-3',
        carrera: 'Tecnologías de la Información',
        foto: '../img/eljona2.jfif',
    },
    {
        matricula: '2021030124',
        nombre: 'Ruanet Alejandro Ozuna Diaz',
        grupo: '7-2',
        carrera: 'Tecnologías de la Información',
        foto: '../img/elruane.jfif',
    }
]

let lista_alumnos = document.querySelector('section.home#home .lista-alumnos');
let template = document.getElementById('template').content;
let frag = document.createDocumentFragment();

const agregarAlumno = ({matricula, nombre, grupo, carrera, foto}) => {
    template.querySelector('.item .item-img img').src = foto;
    template.querySelector('.item .matricula').innerText = matricula;
    template.querySelector('.item .nombre').innerText = nombre;
    template.querySelector('.item .grupo').innerText = grupo;
    template.querySelector('.item .carrera').innerText = carrera;
    let clone = template.cloneNode(true);
    frag.appendChild(clone);
    lista_alumnos.appendChild(frag);
}

alumnos.forEach(item => {
    agregarAlumno(item);
})
