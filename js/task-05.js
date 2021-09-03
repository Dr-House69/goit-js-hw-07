const references = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

references.input.addEventListener('input', onInput);

function onInput(events) {
  const event = events.currentTarget.value;
references.nameOutput.textContent = event.length === 0 ? 'Anonymous' : event;
}