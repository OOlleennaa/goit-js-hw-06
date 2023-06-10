

document.body.style.backgroundColor = '#22FDF0';
document.body.style.color = '#F9FD22';

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  

  if (!email.value.trim() || !password.value.trim()) {
    return alert('WARNING! Not all cells are filled!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    e.currentTarget.reset();
  }
};