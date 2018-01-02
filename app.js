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

    trackItem ++;
    newToDoText.value = '';

    renderTheUI();
  }

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newToDO = document.createElement('li');
    
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);



    let checkDelete = document.createElement('button');
    newLi.appendChild(checkDelete);
    checkDelete.addEventListener('click', deleteToDo, toDo.id);

    toDoList.appendChild;


    function deleteToDo(id) {
      toDos.filter(item => item.id !== id);
    renderTheUI();
    }


  });
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
