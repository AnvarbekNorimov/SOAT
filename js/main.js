

setInterval(() => {
    const tiempo = document.querySelector("#tiempo");
    var clock = new Date();

    let hora = clock.getHours();
    let minutos = clock.getMinutes();
    let segundos = clock.getSeconds();
    let dia_noche ="AM";



    if(hora >12){
        dia_noche = "PM";
        hora = hora -12;
    }
    if(segundos <10){
        segundos ="0" + segundos;
    }
    if(minutos <10){
        minutos = "0" +minutos;
    }
    if(hora <10){
        hora = "0" + hora;
    }
    tiempo.innerHTML = hora + ":" + minutos+ ":" +segundos + " " + dia_noche;
    // console.log((hora + ":" + minutos+ ":" +segundos + " " + dia_noche) );
});