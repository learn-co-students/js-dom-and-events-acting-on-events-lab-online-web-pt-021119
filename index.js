function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  let element = document.createElement('li')
  element.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(element);
}

function addNewLiOnClick(){
  document.querySelector('input[type="submit"]').addEventListener('click', function(e){
    addNewElementAsLi();
    resetInput();
  });
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener('click', function(e){
    document.querySelector('ul').innerHTML = ''
  });
}

function resetInput(){
  document.querySelector('input').value = ''
}
