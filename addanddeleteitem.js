

let form =document.getElementById('addForm');
let itemList=document.getElementById('items');


//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);

// Add item
function addItem(e){
    e.preventDefault();
  
    // Get input value
    let newItem = document.getElementById('item').value;
  
    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

  let editBtn=document.createElement('button');

    editBtn.className = 'btn btn-success btn-sm float-right ';

    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editBtn);
    // Create del button element
    let deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
     // Append li to list
     
    

    

    itemList.appendChild(li);
  }


  function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure ?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
  }