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
      document.getElementById(total[j] + '-id').classList.add(total[j] + '-clicked');	
      var colorValue =  componentToHex(document.getElementById(total[j] + '-id').style.borderColor);
      if( document.getElementById(total[j] + '-id').style.borderColor === colorValue || document.getElementById(total[j] + '-id').style.borderColor === ''){
				setTimeout(function(){
					document.getElementById(total[j] + '-id').classList.remove(total[j] + '-clicked');
				}, 500);	
			}                 
      j++; 
      redNumber ++;                     
      if (j < 20) {             
        playSound();              
      }                         
  	}, 3000)
	}
	playSound();
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
