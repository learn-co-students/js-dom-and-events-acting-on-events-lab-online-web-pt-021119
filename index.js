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
  document.querySelector('.employee-list').appendChild(node);
  document.querySelector('input').value = "";
}

function addNewLiOnClick(){
  document.querySelector('a').addEventListener("click", addNewElementAsLi());
}

function clearEmployeeListOnLinkClick(){
  let e = document.querySelector('a').addEventListener('click', function(){document.querySelector('ul').innerHTML = "";}); 
  return e;
}