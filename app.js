function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });

    id ++;
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const checkDelete = document.createElement('button');
      checkDelete.textContent = "Delete";


      const title = document.createElement('span');

      const newLi = document.createElement('newLi');
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(checkDelete);

      checkDelete.addEventListener('click', event => {
        event.preventDefault();
        deleteToDo(id);
        renderTheUI();
      });
    });
  }

  function deleteToDo(id){
    toDos = toDos.filter(item => item.id !== id);
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });



  renderTheUI();
}
window.onload = function() {
  onReady();
};
