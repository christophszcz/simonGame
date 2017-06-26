var colors = ['red', 'blue', 'yellow', 'green'], number, total = [], you = [], simon =[];
 
function randomNumber(){
	number = Math.floor(Math.random() * 4);
	console.log(randomNumber);
}

function startGame(){
	for(i = 0 ; i < 20; i ++){
		randomNumber();
		total[i] = colors[number];
	}
     
	var j = 0; 
	var redNumber = 1; 
	if(square.style.marginLeft === '0px'){
		return;
	}                    
	function playSound () {            
   	setTimeout(function () {  
   		count.value =	('0' + redNumber).slice(-2);    
      document.getElementById(total[j] + '-sound').play();
      document.getElementById(total[j] + '-id').click();                  
      j++; 
      redNumber ++;                     
      if (j < 20) {             
        playSound();              
      }                         
  	}, 3000)
	}
	playSound();
}
