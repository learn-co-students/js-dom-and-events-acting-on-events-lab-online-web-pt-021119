function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
}

function addNewElementAsLi(){
  let node = document.createElement("li");                 
  let textnode = document.createTextNode(retrieveEmployeeInformation()); 
  node.appendChild(textnode); 
  document.querySelector('input').appendChild(node);
}