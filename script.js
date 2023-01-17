//grabbing enter button
const button = document.querySelector('#enter');

const todoForm = document.querySelector('.form');

//function
const submitted = (event) => {
    
    event.preventDefault();
    //creating a new list element
    const createListEl = document.createElement("li");
    createListEl.textContent = event.target.newtodo.value;
    
    //grab new element
    const newtodo = document.getElementById('list');
    
    newtodo.appendChild(createListEl);
    console.log("button clicked");

    // button.addEventListener('click', submitted);
}
//adding event listener

 button.addEventListener('click', submitted);

// Form.addEventListener('submit', doSubmit);

