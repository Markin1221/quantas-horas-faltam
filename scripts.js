let horaFinal;
let intervalo;

function queHoraLarga() {
    const entrada = document.getElementById('entrada').value;
    
    if (entrada) {
        let [horas, minutos] = entrada.split(":");

        horas = parseInt(horas, 10);
        minutos = parseInt(minutos, 10);

        horas = (horas + 4) % 24;

        horaFinal = new Date();
        horaFinal.setHours(horas, minutos, 0, 0);

        alert(`Você escolheu o horário: ${entrada}. A contagem regressiva começará!`);

        clearInterval(intervalo);
        intervalo = setInterval(atualizarContagemRegressiva, 1000);
    } else {
        alert('Por favor, escolha um horário.');
    }
}

function atualizarContagemRegressiva() {
    const agora = new Date();

  
    if (agora >= horaFinal) {
        horaFinal.setDate(horaFinal.getDate() + 1);
    }

    const restante = horaFinal - agora;

    const horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((restante % (1000 * 60)) / 1000);

    document.getElementById("contador").textContent =
        `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
