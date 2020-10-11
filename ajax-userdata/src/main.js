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



function renderUser(users){
	var formContainer = document.getElementById('formContainer');
	var form 	= document.createElement('form');
	var select 	= document.createElement('select');
	var button 	= document.createElement('button');
	var option 	= document.createElement('option')


	formContainer.appendChild(form);
	form.className = "form-inline justify-content-center"
	form.appendChild(select)
	select.className = 'custom-select form-control';

	users.forEach(user => select.innerHTML += "<option value='"+user.id+"'>"+user.name+":</option>");

	form.appendChild(button);
	button.innerText = "GET USER DATA";
	button.className = "btn btn-primary"

	form.addEventListener('submit', function(e){
		e.preventDefault();
		var userid = select.value;
		renderHTML(users,userid);
	})
}


function renderHTML(users,id){
	users.forEach( function(user) {
		if (id == user.id) {
			data.innerHTML = `
			<ul class="list-group">
			<li class="list-group-item active"><h1> ${user.name} </h1></li>
			<li class="list-group-item"><b>UserName :</b> ${user.username}</li>
			<li class="list-group-item"><b>Email :</b> ${user.email}</li>
			<li class="list-group-item"><b>Phone  :</b> ${user.phone}</li>
			<li class="list-group-item"><b>Website  :</b> ${user.website}</li>
			</ul>`
		}
	});
};