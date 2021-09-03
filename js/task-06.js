const inputRef = document.querySelector('#validation-input')
const dataRef = Number(inputRef.getAttribute('data-length'))

inputRef.addEventListener('blur', outFocus);

function outFocus() {
    inputRef.classList.add("valid", "invalid")
    inputRef.value.length === dataRef ? inputRef.classList.remove('invalid') : inputRef.classList.remove('valid')
}