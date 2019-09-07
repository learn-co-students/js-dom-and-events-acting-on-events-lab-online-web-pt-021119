function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  return document.querySelector("input").value;
}

function addNewElementAsLi(){
  const newLi = document.createElement("li");
  const textnode = document.createTextNode(retrieveEmployeeInformation());
  newLi.appendChild(textnode);
  document.querySelector(".employee-list").appendChild(newLi);
  document.querySelector("input").value = "";
}

function addNewLiOnClick(){
  document.getElementById("newEmpBtn").addEventListener("click", addNewElementAsLi);
}

function clearEmployeeListOnLinkClick(){
  const empList = document.querySelector('ul.employee-list');

  document.querySelector("a").addEventListener("click", function(){empList.innerHTML = "";});
}
