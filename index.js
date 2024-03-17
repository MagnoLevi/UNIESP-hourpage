setInterval(atualiza_hora, 1000);
atualiza_hora();

function atualiza_hora() {
    let date = new Date();

    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    document.querySelector('#horas').innerText = horas;
    document.querySelector('#minutos').innerText = minutos;
    document.querySelector('#segundos').innerText = segundos;
}

