function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function clearForm(){
  document.querySelectorAll('form input')[0].value = '';
}

function retrieveEmployeeInformation(){
  const input = document.querySelector('form input');
  return input.value;
}

function addNewElementAsLi(){
  const name = retrieveEmployeeInformation();
  const ul = document.querySelector('ul.employee-list');
  const li = document.createElement('li')
  li.innerHTML = name;
  ul.appendChild(li);

}

function addNewLiOnClick(e){
  const submit = document.querySelector('form');
  submit.addEventListener('click', e => {
    addNewElementAsLi();
    clearForm();
  })
}


function clearEmployeeListOnLinkClick(){
  const clearButton = document.querySelector('a')
  clearButton.addEventListener('click', e => {
    e.preventDefault();
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
  });

}
