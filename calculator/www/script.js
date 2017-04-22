init();

function init() {
  getOutput().disabled = true;
  addClickEventListeners();
}

function addClickEventListeners() {
  let buttons = Array.from(document.getElementById('calculator-buttons').children);
  buttons.forEach(function(button) {
    button.addEventListener('click', handleClick);
  });
}

function getOutput() {  
  return document.getElementById('calculator-result');
}

function handleClick(e) {
  let type = e.target.dataset.type;
  let value = e.target.dataset.value;

  if (type == 'digit' && getOutput().value.length < 15) {
    getOutput().value += value;
  }

  if (type == 'function') {
    switch (value) {
      case 'del':
        handleDelete();
        break;
      case 'clear':
      case 'clear-entry':
        handleClear();
        break;
    }
  }
}

function handleClear() {
  getOutput().value = null;
}

function handleDelete() {
  let value = getOutput().value;
  getOutput().value = value.substring(0, value.length - 1);
}