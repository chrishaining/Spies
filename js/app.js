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

  const name = document.createElement('h2');
  name.textContent = `Name: ${form.name.value}`;
  spy.appendChild(name);

  const government = document.createElement('h3');
  government.textContent = `Government: ${form.government.value}`;
  spy.appendChild(government);

  const skill = document.createElement('h3');
  skill.textContent = `Skill at killing: ${form.skill.value}`;
  spy.appendChild(skill);

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

//potential function to pit two randomly selected spies against each other.
//1. randomly selects two spies (this implies there may need to be an array of spies, unless we can use random on listOfSpies)
//2. if spy1 === spy2, the function should reselect spy 2. if spy1 and spy2 have the same government, then the function should also reselect spy2 (or - what about having this as a joker, see step 5.)
//3. compare spy1 and spy2's persuasiveness and/or likelihoodOfDefecting. result is either that one spy defects or there is a draw. if there is a defection, the function ends and returns the result
//4. if step 3 results in a draw, compare spy1 and spy2's killing skill. the result is either that one spy kills the other, or - if both have equal killing skill - they both get killed.
//5. possible additional element is to have a joker. this could bring down the government, or start a killing spree to wipe out the entire list of spies (delete all).

//other possible function is to have a last spy standing game. it would be like the other function, but wouldn't have a joker and would keep going until only one spy was left. to ensure the game runs smoothly, it would need to deal with spies of the same government (it would ignore the defection). the game would keep looping while array.length > 1. (or until array.length === 1)
