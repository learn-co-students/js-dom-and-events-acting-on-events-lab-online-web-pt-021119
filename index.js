function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  let employee = document.querySelector('input').value;
  
  return employee;
}

function addNewElementAsLi() {
  let employee = retrieveEmployeeInformation();
  let ul = document.querySelector('ul.employee-list');
  
  let li = document.createElement('li');
  li.innerHTML = employee;
  
  ul.appendChild(li);
}

fuction addNewLiOnClick() {
  return document.addEventListener('click', addNewElementAsLi, false);
}