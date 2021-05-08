const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('onsubmit',(event) => {
	event.preventDefault();
	event.cancelBubble();
	alert('Echoo !');
});