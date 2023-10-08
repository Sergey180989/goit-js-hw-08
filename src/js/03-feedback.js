import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
}

refs.form.addEventListener('input', throttle(handleInput, 500));
refs.form.addEventListener('submit', handleSubmit);

if (localStorage.getItem(LOCAL_KEY)) {
  const data = JSON.parse(localStorage.getItem(LOCAL_KEY));
  refs.form.elements.email.value = data.email;
  refs.form.elements.message.value = data.message;
}

function handleInput(event) {
  const data = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

function handleSubmit(event) {
  event.preventDefault();
  const data = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  };
  event.currentTarget.reset();
  localStorage.setItem(LOCAL_KEY);
}
