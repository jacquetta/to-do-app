function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    toDoList.appendChild(newLi);
    newToDoText.value = '';
    let checkDelete = document.createElement('button');
    checkDelete.textContent = "Delete";
    checkDelete.addEventListener('click', deleteToDo);
    newLi.appendChild(checkDelete);
    toDoList.appendChild;


    function deleteToDo() {
    newLi.parentNode.removeChild(newLi);
    }
  });


}

window.onload = function() {

  onReady();
};
