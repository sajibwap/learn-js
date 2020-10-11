document.addEventListener('DOMContentLoaded',function(e){

	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://webextent.net/wp-json/wp/v2/posts');


	xhr.onload = function(){
		if ( xhr.status >= 200 && xhr.status < 400 ) {
			document.getElementById('loader').remove();
			var ourData = JSON.parse(xhr.responseText);
			renderUser(ourData)
			console.log(ourData)
		}else {
			console.log('Server connected but an arror occured');
		}
	}

	xhr.send();

	xhr.onerror = function(){
		console.log('There is an error occured');
	}

})



function renderUser(posts){
	var formContainer = document.getElementById('formContainer');
	var form 	= document.createElement('form');
	var select 	= document.createElement('select');
	var button 	= document.createElement('button');
	var option 	= document.createElement('option')


	formContainer.appendChild(form);
	form.className = "form-inline justify-content-center"
	form.appendChild(select)
	select.className = 'custom-select form-control';

	posts.forEach(post => select.innerHTML += "<option value='"+post.id+"'>"+post.title.rendered+":</option>");

	form.appendChild(button);
	button.innerText = "READ THIS BLOG";
	button.className = "btn btn-primary"

	form.addEventListener('submit', function(e){
		e.preventDefault();
		var userid = select.value;
		renderHTML(posts,userid);
	})
}


function renderHTML(posts,id){
	posts.forEach( function(post) {
		if (id == post.id) {
			data.innerHTML = `
			<div class="blog-post text-left">
			<h2 class="blog-post-title">${post.title.rendered}</h2><a target="_blank" class="btn btn-danger" href="${post.link}">See original post</a>
			<hr>
			<img class="img-thumbnail" src="${post.jetpack_featured_media_url}" alt="">
			<p class="blog-post-meta">${post.date}</a></p>
			<hr>
			${post.content.rendered}
			</div>
			`
		}
	});
};