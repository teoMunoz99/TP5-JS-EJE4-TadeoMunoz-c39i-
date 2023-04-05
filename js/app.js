//obtener la fecha actual

function obtenerFechaHora() {
    let fechaActual = new Date();
    console.log(fechaActual);
    console.log(fechaActual.getDate());//1-31
    console.log(fechaActual.getDay());//0-6 dia de la semana
    console.log(fechaActual.getMonth());

    const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre']

    //traigo el parrafo fecha
    let parraFecha = document.getElementById('fecha');
    parraFecha.innerHTML = `${diaSemana[fechaActual.getDate()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;

    let parraHora = document.getElementById('hora');

    if(fechaActual.getHours() >= 12){
        parraHora.innerHTML = `${fechaActual.getHours() % 12}: ${fechaActual.getMinutes()}: ${fechaActual.getSeconds()} PM`;
    }else{
        parraHora.innerHTML = `${fechaActual.getHours()}: ${fechaActual.getMinutes()}: ${fechaActual.getSeconds()} AM`;
    }
    
}

setInterval(obtenerFechaHora, 1000); //guardo el identificador unico del setInterval