const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    const userData = {
        email,
        password,
    };

    if (email !== "" && password !== "") {
        console.log(userData);
    } else {
        return alert('All form fields must be filled in');
    }

    form.reset();
};