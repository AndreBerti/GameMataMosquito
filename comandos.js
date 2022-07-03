var height = window.innerHeight
var width = window.innerWidth
var vida=3
var velocidade =null
function ajusteTamanhoTela(){

	height = window.innerHeight
	width = window.innerWidth
//	console.log('altura ' + height + '<br> Largura ' +width)
}
ajusteTamanhoTela()


//
function moscaRandom(){
	//remover uma mosca anterior SE existir uma anterior
	if(document.getElementById('mosca')){
		document.getElementById('mosca').remove();
		var id='vida'+vida--;
		if(vida>=0){
			document.getElementById(id).src="imagens/coracao_vazio.png";
		}
		if(vida<0){
			//função para fim de jogo e perdeu
			window.location.href="fim.html?"+false;
		}
	}
	//posição e tamanho iniciais
	var posX=0; 
	var posY=0;
	var tamanho=Math.floor(Math.random()*150)+50

	// posicionando o mosquito
	do{
		var posX=Math.floor(Math.random()*width);
		var posY=Math.floor(Math.random()*width);
	}while(posX>=(width-tamanho) || posY>=(height-tamanho));

	//criar o elemento html

	var mosca = document.createElement('img') 
	mosca.id='mosca'
	mosca.src='imagens/mosca.png'   //caminho do elemento
	mosca.className = 'moscaTamanho'	//aplicando a classe do elemento
	mosca.style.left = posX+'px'	//inserindo posição x
	mosca.style.top = posY+ 'px' //inserindo posição y
	mosca.style.width = tamanho+'px'	//tamanho do mosquito
	mosca.style.height = tamanho+'px'	//tamanho do mosquito

	
	//lado do mosquito
	var lado = Math.floor(Math.random()*2)
	if(lado==0){
		mosca.className = 'moscaLado1'
	}else{
		mosca.className = 'moscaLado2'
	}
	mosca.onclick = function(){
		this.remove();
	}
	document.body.appendChild(mosca)

}

//cronometro do jogo
var tempo = 10
function temporizador(){
	document.getElementById("temporizador").innerHTML=tempo;
	tempo--;
	if(tempo==-1){
		window.location.href="fim.html?"+true		
	}
}

//se ganhou o jogo ou não
function ganhou(){
	var ganhou = window.location.search
	if ((ganhou.replace('?',''))=='true') {
		document.getElementById("decisao").src="imagens/vitoria.png"
	}else{
		document.getElementById("decisao").src="imagens/game_over.png"
	}
}

//inicio de jogo

function iniciarJogo(){
	level = document.getElementById('nivel').value;
	if(level===''){
		alert('SELECIONE UM NIVEL')
	}else{
		window.location.href='game.html?'+level;
	}
}

//capturando nivel
function capturaNivel(){
	var level = window.location.search;
	level=level.replace('?','');

	switch(level){
		case 'facil':
			velocidade=3000;
		break;
		case 'normal':
			velocidade=2000;
		break;
		case 'dificil':
			velocidade=1000;
		break;
		case 'insano':
			velocidade=650;
		break;
			default: alert('ERRO NA CAPTURA DE NIVEL')
		}
}