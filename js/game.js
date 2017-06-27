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
		count.value = '';
		total = [];
		simon = [];
		return;
	}  

	function playSound () {            
   	setTimeout(function () {  
   		if(square.style.marginLeft === '0px'){
				count.value = '';
				total = [];
				simon = [];
				return;
			}   
			simon.push(total[j]);
   		count.value =	('0' + redNumber).slice(-2);
   		var k = 0;
   		function incremental(){
   			setTimeout(function () {
   				if(square.style.marginLeft === '0px'){
						count.value = '';
						total = [];
						simon = [];
						return;
					}   
					console.log(simon);    
		      document.getElementById(simon[k] + '-sound').play();

					if (simon[k] === 'red'){
						redLight();
					} else if (simon[k] === 'blue'){
						blueLight();
					}else if (simon[k] === 'yellow'){
						yellowLight();
					}else if (simon[k] === 'green'){
						greenLight();
					}
   				k++; 
   				if(k < simon.length){
		   			incremental();
		   		}
   			},3000)
   		}
   		incremental();

      j++; 
      redNumber ++;                     
      if (j < 20) {             
        playSound();              
      }                         
  	}, 10000)
	}
	playSound();
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
