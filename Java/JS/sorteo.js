const d = document;

export default function winner(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    return `El ganador es: ${winner.textContent}`;
  };
  d.addEventListener("click", (el) => {
    if (el.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
    }
  });
}
