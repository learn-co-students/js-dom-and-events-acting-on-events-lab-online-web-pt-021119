function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
      retrieveEmployeeInformation();
      addNewElementAsLi();
      addNewLiOnClick();
      clearEmployeeListOnLinkClick();
    })
}

function retrieveEmployeeInformation(){
  return document.getElementsByName('name')[0].value.trim()
}

function addNewElementAsLi(){
  let li = document.createElement('li');
  let innertext = retrieveEmployeeInformation();
  li.innerHTML = innertext;
  if (innertext){ document.getElementsByClassName('employee-list')[0].appendChild(li)}
}

function addNewLiOnClick(){
  document.querySelector('input').value='';
  return;
  document.querySelector('input[type="submit"]').addEventListener('click', function(e){
    e.preventDefault();
    addNewElementAsLi();
  })
}

function clearEmployeeListOnLinkClick(){
  return document.querySelector('a').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelectorAll('ul')[0].innerHTML='';
  })
}

preventRefreshOnSubmit()
