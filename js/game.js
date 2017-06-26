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
     
	var j = 0;                      
	function playSound () {            
   	setTimeout(function () {     
      document.getElementById(simon[j] + '-sound').play();                  
      j++;                      
      if (j < 20) {             
        playSound();              
      }                         
  	}, 3000)
	}
	playSound();
}
