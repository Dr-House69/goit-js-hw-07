const inputTextRef = document.querySelector('#text')
const inputRangeRef = document.querySelector('#font-size-control')

inputRangeRef.addEventListener('input', handleInputRange);

function handleInputRange() {
  inputTextRef.setAttribute('style',`font-size: ${inputRangeRef.value}px`);
}