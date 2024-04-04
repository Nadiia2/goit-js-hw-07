const form = document.querySelector('.login-form');
form.classList.add('container');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formValues = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim(),
  };
  if (formValues.email === '' || formValues.password === '') {
    alert('All form fields must be filled in');
  } else {
    form.reset();
    console.log(formValues);
  }
}
