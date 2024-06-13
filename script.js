const userInput = document.getElementById("todo-input");
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");

window.addEventListener("DOMContentLoaded", function (event) {
  const items = JSON.parse(localStorage.getItem("myTodoItems"));
  items.map((item) => makeTodo(item));
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = userInput.value;
  makeTodo(inputValue);
  const items = JSON.parse(localStorage.getItem("myTodoItems"));
  if (items) {
    items.push(inputValue);
    localStorage.setItem("myTodoItems", JSON.stringify(items));
  } else {
    localStorage.setItem("myTodoItems", JSON.stringify([inputValue]));
  }
  userInput.value = "";
});

const makeTodo = function (str) {
  const listItem = document.createElement("li");
  const listText = document.createTextNode(str);
  listItem.appendChild(listText);

  const removeBtn = document.createElement("button");
  const btnText = document.createTextNode("Remove");
  removeBtn.appendChild(btnText);
  listItem.appendChild(removeBtn);

  list.appendChild(listItem);

  removeBtn.addEventListener("click", function () {
    list.removeChild(listItem);
  });
};
