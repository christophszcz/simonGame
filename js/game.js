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

			if (total[j] === 'red'){
				red.classList.add('red-clicked');	
				if(red.style.borderColor === 'rgb(159, 15, 23)' || red.style.borderColor === ''){
					setTimeout(function(){
						red.classList.remove('red-clicked');
					}, 500);	
				}
			} else if (total[j] === 'blue'){
				blue.classList.add('blue-clicked');
				if(blue.style.borderColor === 'rgb(9,74,143)' || blue.style.borderColor === ''){	
					setTimeout(function(){
						blue.classList.remove('blue-clicked');
					}, 500);	
				}
			}else if (total[j] === 'yellow'){
				yellow.classList.add('yellow-clicked');	
				if(yellow.style.borderColor === 'rgb(204,167,7)' || yellow.style.borderColor === ''){	
					setTimeout(function(){
						yellow.classList.remove('yellow-clicked');
					}, 500);
				}
			}else if (total[j] === 'green'){
				green.classList.add('green-clicked');	
				if(green.style.borderColor === 'rgb(0,167,74)' || green.style.borderColor === ''){	
					setTimeout(function(){
						green.classList.remove('green-clicked');
					}, 500);
				}
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
