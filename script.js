//grabbing enter button
const button = document.querySelector('#enter');


//function
const submitted = (event) => {
    
    event.preventDefault();
    //creating a new list element
    const createListEl = document.createElement("li");
    const value = document.getElementById("newtodo").value;

    createListEl.textContent = value;
    console.log(event);
    
    //grab new element
    const newtodo = document.getElementById('list');

    newtodo.appendChild(createListEl);
    console.log("button clicked");
}
//adding event listener
button.addEventListener('click', submitted);

// Form.addEventListener('submit', doSubmit);

