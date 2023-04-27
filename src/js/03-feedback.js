import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle (onTextareaInput, 500));

const formData = {
  email: '',
  message: '',
};
populateFormData();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY)
  console.log(formData)
}

function onEmailInput(e) {
  formData.email = e.target.value;
  save();
}

function onTextareaInput(e) {
  formData.message = e.target.value;
  save();
}
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populateFormData() {
  const rawData = localStorage.getItem(STORAGE_KEY);

  if (rawData!==null) {
    const data = JSON.parse(rawData);
    refs.email.value = data.email
    refs.textarea.value = data.message
  }
}
