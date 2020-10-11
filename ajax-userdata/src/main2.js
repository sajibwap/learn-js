document.addEventListener('DOMContentLoaded',function(e){

	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');


	xhr.onload = function(){
		if ( xhr.status >= 200 && xhr.status < 400 ) {
			document.getElementById('loader').remove();
			var ourData = JSON.parse(xhr.responseText);
			renderUser(ourData)
		}else {
			console.log('Server connected but an arror occured');
		}
	}

	xhr.send();

	xhr.onerror = function(){
		console.log('There is an error occured');
	}

})



function renderUser(arr){
	var formContainer = document.getElementById('formContainer');
	var form = document.createElement('form');
	var select = document.createElement('select');
	var button = document.createElement('button');
	var option = document.createElement('option')


	formContainer.appendChild(form);
	form.className = "form-inline justify-content-center"
	form.appendChild(select)
	select.className = 'custom-select form-control';

	arr.forEach( el => {
		select.innerHTML += "<option value='"+el.id+"'>"+el.name+":</option>";
	});

	form.appendChild(button);
	button.innerText = "GET USER DATA";
	button.className = "btn btn-primary"

	form.addEventListener('submit', function(e){
		e.preventDefault();
		var userid = select.value;
		renderHTML(arr,userid);
	})
}


function renderHTML(arr,id){
	arr.forEach( function(element, index) {
		if (id == element.id) {
			data.innerHTML = `
			<ul class="list-group">
			<li class="list-group-item active"><h1>Name : ${element.name} </h1></li>
			<li class="list-group-item">UserName : ${element.username}</li>
			<li class="list-group-item">Email : ${element.email}</li>
			<li class="list-group-item">Phone  : ${element.phone}</li>
			<li class="list-group-item">Website  : ${element.website}</li>
			</ul>`
		}
	});
};