function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
 return document.querySelector('[name="name"]').value;
}

function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li> ${employeeName}</li>`)

}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(e){
    addNewElementAsLi();
    clearInput();
  })
}

function clearEmployeeListOnLinkClick() {
  let employeeList = document.querySelector('ul');
  let clearButton = document.querySelector('a')
  clearButton.addEventListener('click', function(e){
    employeeList.innerHTML = ''
  });
}

function clearInput(){
  document.querySelector('input').value = ''
}
