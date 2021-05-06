function contentTop(){
				document.getElementById('divContent').scrollTo(0,0);
			}
	    	function resized(){
				document.getElementById('divMenuLeft').style.maxHeight = (window.innerHeight - 60) + 'px';
				document.getElementById('divContent').style.maxHeight = (window.innerHeight - 60) + 'px';
			}
    		var opts = [
    			{id: 'bt0', contentId: 'content0', title: 'Início'},
    			{id: 'bt1', contentId: 'content1', title: 'Como Registrar-se para ser Autor e/ou Avaliador de Artigos'},
    			{id: 'bt1-1', contentId: 'content1.1', title: 'Registro Como Autor'},
    			{id: 'bt1-2', contentId: 'content1.2', title: 'Registro Como Autor e Avaliador'},
    			{id: 'bt1-3', contentId: 'content1.3', title: 'Registro Como Avaliador'},
    			{id: 'bt2', contentId: 'content2', title: 'Efetuar Submissão de Trabalho(s)'},
    			{id: 'bt3', contentId: 'content3', title: 'Efetuar Avaliação de Trabalho(s)'},
    			{id: 'bt3-1', contentId: 'content3.1', title: 'Acessar e Analisar Informações'},
    			{id: 'bt3-2', contentId: 'content3.2', title: 'Acessar Formulário Avaliação'},
    			{id: 'bt3-3', contentId: 'content3.3', 
    				          title: 'Após "Gravar Avaliação", clicar em "Confirmar Avaliação"'},
    			{id: 'bt3-4', contentId: 'content3.4', title: 'Verificar Avaliação Confirmada - Importante'},
    			{id: 'bt4', contentId: 'content4', title: 'Login/Recuperação de Senha'},
    			{id: 'bt4-1', contentId: 'content4.1', title: 'Formulário de Login'},
    			{id: 'bt4-2', contentId: 'content4.2', title: 'Formulário de Recuperação de Senha'}
    			
    			
    			
    		];
    		function clicked(id){
    			var size = opts.length;
    			var viewTitle = document.getElementById('viewTitle');
    			for(var i = 0; i < size; i++){
    				var bt = document.getElementById(opts[i].id);
    				var content = document.getElementById(opts[i].contentId);
    				if(opts[i].id == id){
    					if(undefined != bt && null != bt){
    						bt.classname = 'list-group-item list-group-item-action active';
    					}
    					viewTitle.innerHTML = opts[i].title;
    					content.style.display = 'block';
    					continue;
    				}
    				if(undefined != bt && null != bt){
						bt.classname = 'list-group-item list-group-item-action';
					}
    				content.style.display = 'none';
    				contentTop();
    			}
    		}
    		function adminView(){
    			var loc = window.location.href.split('#')[0];
    			loc = loc.split('?')[0];
    			loc = loc.replace('/index.html','');
    			loc += '/admin/index.html';
    			window.location.href = loc;
    		}
    		clicked('bt0');