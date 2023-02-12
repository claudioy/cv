
let detalleinfo = document.getElementById('detalleinfo')
detalleinfo.style.display= 'none'

document.getElementById('btn-info').addEventListener("click", funcionMostrar1);

function funcionMostrar1(){
    detalleinfo.style.display= 'block';
    detallexp.style.display= 'none'
    detalleformacion.style.display= 'none'
}

let detalleformacion = document.getElementById('detalle-formacion')
detalleformacion.style.display= 'none'

document.getElementById('btn-formacion').addEventListener("click", funcionMostrar2);

function funcionMostrar2(){
    detalleformacion.style.display= 'block';
    detallexp.style.display= 'none'
    detalleinfo.style.display= 'none'
}

let detallexp = document.getElementById('detalle-exp')
detallexp.style.display= 'none'

document.getElementById('btn-exp').addEventListener("click", funcionMostrar3);

function funcionMostrar3(){
    detallexp.style.display= 'block';
    detalleinfo.style.display= 'none'
    detalleformacion.style.display= 'none'
}

