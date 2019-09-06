document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const spy = createSpy(event.target);
  const listOfSpies = document.querySelector('#spy-list');
  listOfSpies.appendChild(spy);

  event.target.reset();
}

const createSpy = function (form) {
  const spy = document.createElement('li');
  spy.classList.add('spy-list-item');

  const name = document.createElement('h3');
  name.textContent = form.name.value;
  spy.appendChild(name);

  const government = document.createElement('h3');
  government.textContent = form.government.value;
  spy.appendChild(government);

  const defectability = document.createElement('h3');
  defectability.textContent = form.defectability.value;
  spy.appendChild(defectability);

  return spy;
}

const handleDeleteAllClick = function (event) {
  const listOfSpies = document.querySelector('#spy-list');
  listOfSpies.innerHTML = '';
}
