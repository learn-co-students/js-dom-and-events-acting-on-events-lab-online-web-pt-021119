function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  ul.appendChild(li);
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', event => {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  })
}

function clearEmployeeListOnLinkClick() {
  const link = document.querySelector('a');
  link.addEventListener('click', event => {
    document.querySelector('ul').innerHTML = "";
  })
}