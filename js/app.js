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
  name.textContent = `Name: ${form.name.value}`;
  spy.appendChild(name);

  const government = document.createElement('h3');
  government.textContent = `Government: ${form.government.value}`;
  spy.appendChild(government);

  const defectability = document.createElement('h3');
  defectability.textContent = `Likelihood of defecting: ${form.defectability.value}`;
  spy.appendChild(defectability);

  const trustworthiness = document.createElement('h3');
  trustworthiness.textContent = `Trustworthiness: ${form.trustworthiness.value}`;
  spy.appendChild(trustworthiness);

  //delete a single list item - still working on this
  // const delete = document.deleteElement()
  // const listOfSpies = document.querySelector('#spy-list');
  // deleteSpy.textContent = 'delete this spy';
  // listOfSpies.removeChild(listOfSpies.childNodes[0]);
  //
  // function removeItem(spy) {
  //         var itemToRemove = document.querySelector(spy);
  //         itemToRemove.parentNode.removeChild(itemToRemove);
  //       }


  return spy;
}

const handleDeleteAllClick = function (event) {
  const listOfSpies = document.querySelector('#spy-list');
  listOfSpies.innerHTML = '';
}
