const userInput = document.getElementById("todo-input");
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = userInput.value;
  const listItem = document.createElement("li");
  const listText = document.createTextNode(inputValue);
  listItem.appendChild(listText);

  const removeBtn = document.createElement("button");
  const btnText = document.createTextNode("Remove");
  removeBtn.appendChild(btnText);
  listItem.appendChild(removeBtn);

  list.appendChild(listItem);

  userInput.value = "";

  removeBtn.addEventListener("click", function () {
    list.removeChild(listItem);
  });
});
