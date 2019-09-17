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
  const ul= document.querySelector('ul')
  const li= document.createElement('li')
  li.innerHTML= retrieveEmployeeInformation()
  ul.appendChild(li)
  }
  
  function addNewLiOnClick() {
  document.querySelector('form').addEventListener('submit',
  function(submitEvent) {
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  const clearList = document.querySelector('a')
  clearList.addEventListener('click',
    function(event) {
      let ul = document.querySelector('ul')
      ul.innerHTML = ''
  })
}