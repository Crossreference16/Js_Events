//grabbing enter button
const button = document.querySelector('#enter');
const deleteButton = document.createElement("button");

//function
const submitted = (event) => {
    event.preventDefault();
    //creating a new list element
    const createListEl = document.createElement("li");
    const value = document.getElementById("newtodo").value;
   //delete button

    deleteButton.innerHTML = "Delete";
    alert(createListEl);
    deleteButton.setAttribute("class", "deleteButton");

    createListEl.textContent = value;
    console.log(event);
    
    //grab new element
    const newtodo = document.getElementById('list');

    newtodo.appendChild(createListEl);
    createListEl.appendChild(deleteButton);
    console.log("button clicked");
        document.querySelector("input").value="";
}


//adding event listener
 deleteButton.addEventListener("click", function(event){
    newtodo.removeChild(li);
})
button.addEventListener('click', submitted);

// Form.addEventListener('submit', doSubmit);

