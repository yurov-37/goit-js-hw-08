import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedbackFormData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  feedbackFormData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData));
}

function onFormSubmit(evt) {
  //   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function savedFeedbackData() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
savedFeedbackData();
