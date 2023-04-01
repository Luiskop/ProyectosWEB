const d = document;
export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limiteTime = countdownDate - now,
      days = Math.floor(limiteTime / (1000 * 60 * 60 * 24)),
      hours = (
        "0" +
        Math.floor((limiteTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limiteTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limiteTime % (1000 * 60)) / 1000)).slice(-2);

    $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes}
    minutos ${seconds} segundos</h3>`;

    // console.log(countdownDate, now, limiteTime);

    if(limiteTime<0){
        clearInterval(countdownTempo);
        $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
