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
  const ul = document.querySelector('ul')
  const newLi = document.createElement('li')
  newLi.innerHTML = retrieveEmployeeInformation()
  ul.appendChild(newLi)
}

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('submit',
  function(submitEvent) {
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  const clearLink = document.querySelector('a')
  clearLink.addEventListener('click',
    function(clickEvent) {
      let ul = document.querySelector('ul')
      ul.innerHTML = ''
  })
}
