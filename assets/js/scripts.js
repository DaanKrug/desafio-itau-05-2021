/**
	JS por Daniel Augusto Krug
*/
function contentTop(){
	document.getElementById('main').scrollTo(0,0);
}
function resized(){
	document.getElementById('nav').style.maxHeight = (window.innerHeight - 60) + 'px';
	document.getElementById('main').style.maxHeight = (window.innerHeight - 60) + 'px';
}
var opts = [
	{id: 'homeBt', contentId: 'homeContent', title: 'Página Inicial'},
	{id: 'aboutBt', contentId: 'aboutContent', title: 'Sobre'},
	{id: 'contactBt', contentId: 'contactContent', title: 'Contato'},
	{id: 'seeMoreBt', contentId: 'seeMoreContent', title: 'Saiba Mais'}
];
function clicked(id){
	var size = opts.length;
	var viewTitle = document.getElementById('viewTitle');
	for(var i = 0; i < size; i++){
		var bt = document.getElementById(opts[i].id);
		var content = document.getElementById(opts[i].contentId);
		bt.parentNode.className = '';
		content.style.display = 'none';
		if(opts[i].id == id){
			bt.parentNode.className = 'active';
			viewTitle.innerHTML = opts[i].title;
			content.style.display = 'block';
			continue;
		}
	}
	contentTop();
}
setTimeout(() => {
	clicked('homeBt');
},100);
/**
	Fim
	JS por Daniel Augusto Krug
*/