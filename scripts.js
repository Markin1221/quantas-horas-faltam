let horaFinal;

    function queHoraLarga() {
        // Pega o valor do input e converte para hora final
        const entrada = document.getElementById('entrada').value;
        
        if (entrada) {
            // Divide a hora e os minutos a partir da string de entrada
            let [horas, minutos] = entrada.split(":");

            // Converte as horas e minutos para números
            horas = parseInt(horas, 10); // converte a hora para número
            minutos = parseInt(minutos, 10); // converte os minutos para número

            // Adiciona 5 horas à hora selecionada
            horas = (horas + 4) % 24;  // Garante que a hora não passe de 24 (no caso, passa para o próximo dia)

            // Cria uma nova data com o horário final ajustado
            horaFinal = new Date();
            horaFinal.setHours(horas, minutos, 0, 0); // Define a hora final com base no input e o ajuste

            alert(`Você escolheu o horário: ${entrada}. A contagem regressiva começará!`);
            
            // Limpa qualquer contagem regressiva anterior
            clearInterval(intervalo); 
            intervalo = setInterval(atualizarContagemRegressiva, 1000); // Inicia a contagem regressiva
        } else {
            alert('Por favor, escolha um horário.');
        }
    }

    function atualizarContagemRegressiva() {
        const agora = new Date();

        // Se o horário final já passou, define para o próximo dia
        if (agora >= horaFinal) {
            horaFinal.setDate(horaFinal.getDate() + 1);
        }

        const restante = horaFinal - agora;

        const horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((restante % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = 
            `${horas} horas, ${minutos} minutos e ${segundos} segundos`;

        // Se a contagem terminar
        if (restante < 0) {
            clearInterval(intervalo);
            document.getElementById("contador").innerHTML = "Contagem regressiva finalizada!";
        }
    }

    let intervalo; // Variável global para o intervalo de contagem
