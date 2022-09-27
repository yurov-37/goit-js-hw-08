import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  let enteredData = localStorage.getItem(LOCAL_STORAGE_KEY);
  enteredData = enteredData ? JSON.parse(enteredData) : {};
  enteredData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(enteredData));
}

function onFormSubmit(evt) {
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  evt.preventDefault();
  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;
  if (email === '' || message === '') {
    return alert('Все поля должны быть заполнены');
  }
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function savedFeedbackData() {
  let savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    savedData = JSON.parse(savedData);
    Object.entries(savedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
savedFeedbackData();
