document.addEventListener("DOMContentLoaded", () => {
    
    let form = document.querySelector("#create-task-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      buildToDoList(e.target.elements["new-task-description"].value);
      form.reset();
    });


    function buildToDoList(todo) {
      let list = document.createElement("li");
      let btn = document.createElement("button");
      btn.addEventListener("click", handleDelete);
      btn.textContent = "x";
      list.textContent = todo;
      list.appendChild(btn);
      console.log(list);
      document.querySelector("#tasks").appendChild(list);
    }

    function handleDelete(e) {
    e.target.parentNode.remove();
    }

    css (btn, {
      'background-color': 'red',
      'color': 'black',
      'background' : 'green',
      'color' : '#ffffff',
      'padding' : '6px',
      'margin' : '4px',
      'font-size' : '12px',
    });