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

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(e) {
    addNewElementAsLi();

    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let button = document.querySelector('a');
  let employeeList = document.querySelector('ul.employee-list');

  button.addEventListener('click', function() {
    employeeList.innerHTML = '';
  })
}
