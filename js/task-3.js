const userName = document.getElementById('name-input');
const userText = document.getElementById('name-output');

userName.addEventListener('input', () => {
    const name = userName.value.trim();
    userText.innerHTML = `${name}` || 'Anonymous';
});