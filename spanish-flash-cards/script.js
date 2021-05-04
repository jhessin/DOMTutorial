const cards = document.getElementsByClassName('card');

for (const card of cards) {
  const button = card.querySelector('.card-button');
  button.addEventListener('click', (event) => {
    const answer = card.querySelector('.card-answer');
    if (button.innerHTML === 'Show') {
      answer.style.display = 'Block';
      button.innerHTML = 'Hide';
    } else {
      answer.style.display = 'None';
      button.innerHTML = 'Show';
    }
  })
}
