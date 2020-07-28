var array = [];
///function to add item
const getTodos = async () => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/todos`);
    const todos = res.data;
    return todos;
  } catch (e) {
    console.error(e);
  }
};
function addItem(todos) {
  todos.map((todo) =>
    makeRow("Todo: " + todo.title + "(Status: " + todo.completed + ")")
  );
}
var addElement = document.querySelector("button");
// addElement.addEventListener("click", addItem);
var table = document.getElementsByClassName("table");
function makeRow(item) {
  ////creating list
  var li = document.createElement("li");
  li.className = "list-group-item";
  var newItem = item;
  /// adding text entered
  var text = document.createTextNode(newItem);
  li.appendChild(text);
  document.getElementById("to_do_ul").appendChild(li);
  //// adding checkbutton to every item
  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("style", "margin-left:20px");
  /// adding functionality to play ding song
  check.addEventListener("click", function () {
    // document.getElementById("ding").play();
    var list = this.parentElement;

    list.style.display = "none";
    makeRow(item);
  });
  li.appendChild(check);
  ///adding delete button to every item
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-primary";
  deleteButton.setAttribute("style", "margin-left:20px");
  var text = document.createTextNode("Delete");
  deleteButton.appendChild(text);
  /// adding deleting functionality
  deleteButton.onclick = function () {
    var list = this.parentElement;
    list.style.display = "none";
  };
  li.appendChild(deleteButton);
}
const main = async () => {
  addItem(await getTodos());
};

main();
