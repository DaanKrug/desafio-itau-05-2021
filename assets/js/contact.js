document.addEventListener('submit',(event) => {
	console.log(event);
	event.preventDefault();
	if(event.target.id != 'contactForm'){
		return;
	}
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	console.log([name,email,message]);
});