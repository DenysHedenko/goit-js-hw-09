const keyForLS= 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(keyForLS)) ?? { email: "", message: "" };

const form = document.querySelector('.feedback-form');

form.elements.email.value = formData.email ?? "";
form.elements.message.value = formData.message ?? "";

form.addEventListener('input', event => {
    const { name, value } = event.target;
    if (name === 'email' || name === 'message') {
        formData[name] = value.trim(); 
        localStorage.setItem(keyForLS, JSON.stringify(formData));
    }
});


form.addEventListener('submit', event => {
    event.preventDefault();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!email || !message) {
        alert('Fill please all fields');
        return; 
    }

    console.log('Submit data:', { email, message });

    localStorage.removeItem(keyForLS);
    formData = { email: "", message: "" };
    form.reset();
});