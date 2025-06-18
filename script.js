let count = 0;
const form = document.getElementById('petitionForm');
const nameInput = document.getElementById('nameInput');
const counter = document.getElementById('counter');
const signatures = document.getElementById('signatures');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  if (name === "") return;

  count++;
  counter.textContent = `Unterschriften: ${count}`;

  const li = document.createElement('li');
  li.textContent = name;
  signatures.appendChild(li);

  nameInput.value = '';
});
