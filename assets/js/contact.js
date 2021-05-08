// https://webhook.site/#!/99cf7ed2-b14f-4745-84ba-9478534b0594/d0efac75-dff3-4a75-891c-e9dcbd156802/1
var webhookUrl = 'https://webhook.site/99cf7ed2-b14f-4745-84ba-9478534b0594';
var webhookEmail = '99cf7ed2-b14f-4745-84ba-9478534b0594@email.webhook.site';

document.addEventListener('submit',(event) => {
	event.preventDefault();
	if(event.target.id != 'contactForm'){
		return;
	}
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	fetch(webhookUrl,{
		headers: new Headers([
			['Accept', 'application/json'],
			['Content-Type', 'application/json']
		]),
		method: 'POST',
		origin: webhookUrl,
		body: {
			name: name,
			email: email,
			message: message
		}
	}).then(response => {
		if(response.status === 200){
			alert('Sucesso ao Enviar Contato');
			return;
		}
		alert('Erro ao Enviar Contato');
	});
});