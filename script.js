const count = document.querySelector('.count');
const buttons = document.querySelectorAll('button'); // select all buttons

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('add')) {
      count.innerHTML++;
      setColor();
    } else if (button.classList.contains('subtract')) {
      count.innerHTML--;
      setColor();
    } else {
      count.innerHTML = 0;
      setColor();
    }
  });
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'green';
  } else if (count.innerHTML < 0) {
    count.style.color = 'red';
  } else {
    count.style.color = 'black';
  }
}
