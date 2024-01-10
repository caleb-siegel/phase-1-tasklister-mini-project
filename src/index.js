// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.


/*
Complete
1. add event to the submit button being clicked

To Do
2. Once clicked, add an li within the ul
3. the li should contain the value from the input field
*/

document.addEventListener("DOMContentLoaded", () => {
  // let theValue = document.querySelector("input").value
  // console.log(theValue)
    
  document.querySelector("#create-task-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let li = document.createElement("li")
    let deleteButton = document.createElement("button")

    li.textContent = document.querySelector("input").value
    document.querySelector("#tasks").append(li)

    deleteButton.textContent = "X"
    li.append(deleteButton)

    const priority = document.querySelector("select").value
  
    if (priority === "high") li.style.color = "red"
    if (priority === "medium") li.style.color = "orange"
    if (priority === "low") li.style.color = "green"
    
    deleteButton.addEventListener("click", (event) => {
      li.remove()
})
    });
  });
