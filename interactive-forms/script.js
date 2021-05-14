const checkbox = document.getElementById('petCheckbox');
const selectionDiv = document.getElementById('petSelection');

checkbox.addEventListener('change', event => {
  if (checkbox.checked) {
    selectionDiv.style.display = 'Block';
  } else {
    selectionDiv.style.display = 'None';
  }
})

const saveForm = document.getElementById('saveForm');

saveForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameText = saveForm.elements[0].value;
  const addressText = saveForm.elements[1].value;
  const ageText = saveForm.elements[2].value;
  const hasPet = saveForm.elements[3].checked;
  let petText = 'No pets';

  if (nameText === '') {
    alert('Please enter a name');
    return;
  }
  if (addressText === '') {
    alert('Please enter an address');
    return;
  }
  if (ageText === '') {
    alert('Please enter an age');
    return;
  }
  if (hasPet) {
    petText = saveForm.elements[4].value;
  }

  if (petText === 'Dog') {
    alert('Sorry, our dog capacity is full :(');
    return;
  }

  alert(`
  Booking saved! Info:
  ${nameText}
  ${addressText}
  ${ageText}
  ${petText}
  `);
})
