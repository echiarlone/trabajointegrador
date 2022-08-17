var usuario = '';
var visitas = 0;

initialize();

function initialize() {

    document.getElementById('receiver-p').addEventListener('click', identificarUsuario);

    if (localStorage.getItem('visitas') !== null) {
        visitas = localStorage.getItem('visitas');  
    }

    contador();
    localStorage.setItem('visitas', visitas);


    if (localStorage.getItem('usuario') !== null) {
        this.usuario = localStorage.getItem('usuario');
        document.getElementById('receiver-p').innerHTML = 'Hola ' + usuario + '!';
        document.getElementById('receiver-p').setAttribute('title', 'Numero de visitas: ' + visitas);
    }    
}

function identificarUsuario() {

    usuario = prompt('Ingrese su nombre para identificarse');
    while (usuario == '') {
        usuario = prompt('Ingrese su nombre para identificarse no puede estar vacio');
        if (usuario === null) {
            return;
        }
    }
    if (usuario === null) {
        return;
    }

    document.getElementById('receiver-p').innerHTML = 'Hola ' + usuario + '!';
    document.getElementById('receiver-p').setAttribute('title', 'Numero de visitas: ' + visitas);
    localStorage.setItem('usuario', usuario);
}

function contador(){

    visitas++;
}