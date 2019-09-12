function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
	const tField = document.getElementsByTagName('input')[0]
	return tField.value
}

function addNewElementAsLi(employeeName){
	jQuery('ul.employee-list').append(`<li>${employeeName}</li>`)
}
