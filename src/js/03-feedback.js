import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    comment: document.querySelector('.feedback-form textarea'),
}

restoreFormData();

refs.form.addEventListener('input', throttle(onInputData, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onInputData(e) {
    const formData = { email: refs.email.value, message: refs.comment.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit (e) {
    e.preventDefault();
    console.log({ email: refs.email.value, message: refs.comment.value });
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function restoreFormData() {
    let data = localStorage.getItem(LOCALSTORAGE_KEY);

    if (!data) {
        return;
    }

    try {
        data = JSON.parse(data);
        refs.email.value = data.email;
        refs.comment.value = data.message;
    } catch (e) {
        console.log(e);
        return;
    }
}