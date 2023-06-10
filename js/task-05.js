document.querySelector('body').style.backgroundColor = '#26FD22';

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    nameRef.textContent = currentTarget.value.trim();
  } else {
    nameRef.textContent = 'Anonymous';
  }
};

inputRef.addEventListener('input', getInputValue);
