var colors = ['red', 'blue', 'yellow', 'green'], number, simon = [], you = [];
 
function randomNumber(){
	number = Math.floor(Math.random() * 4);
	console.log(randomNumber);
}

function startGame(){
	for(i = 0 ; i < 20; i ++){
		randomNumber();
		simon[i] = colors[number];
	}
	for(j = 0 ; j < 20; j ++){
		var colorValue = simon[j];
		setTimeout(function() {   
			document.getElementById(colorValue + '-sound').play();
			console.log(colorValue);	 
		}, 1000);
	}
}
