const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function changeName(event) {
  if (event.target.value.trim() === '') {
    return (nameOutput.textContent = 'Anonymous');
  }
  return (nameOutput.textContent = event.target.value);
}

nameInput.addEventListener('input', changeName);
