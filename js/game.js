var colors = ['red', 'blue', 'yellow', 'green'], number, total = [], simon =[]; k = 0; j = 0;
 
function randomNumber(){
	number = Math.floor(Math.random() * 4);
	console.log(randomNumber);
}

function startGame(){
	for(i = 0 ; i < 20; i ++){
		randomNumber();
		total[i] = colors[number];
	}

	if (startPushed === true){
		redNumber = 0;
		you = [];
		you.length = 0;
		simon = [];
		simon.length = 0;
		count.value = 1;
		j = 0;
		k = 0;
	}
     
	var j = 0; 
	var redNumber = 1;
	you = [];
	// Off 
	if(square.style.marginLeft === '0px'){
		count.value = '';
		total = [];
		total.length = 0;
		simon = [];
		simon.length = 0;
		you = [];
		you.length = 0;
		j = 0;
		k = 0;
		redNumber = 1;
		return;
	}  

	function playSound () {          
   	setTimeout(function () { 
   		// Off 
   		if(square.style.marginLeft === '0px'){
				count.value = '';
				total = [];
				total.length = 0;
				simon = [];
				simon.length = 0;
				you = [];
				you.length = 0;
				redNumber = 1;
				j = 0;
				k = 0;
				return;
			}

			//Show you array
			if(you.length > 0){
 				console.log("You " + you);
 			} 

			//Strict mode restart
   		if (strictMode && JSON.stringify(you) !== JSON.stringify(simon)){
   			document.getElementById('mistake-sound').play();                   
   			count.value = 'X';
   			startGame();
   			return;
   		// Cancel after wrong answer
   		} else if(JSON.stringify(you) !== JSON.stringify(simon)){ 
				document.getElementById('mistake-sound').play();                   
   			count.value = 'X';
			} else{
   			simon.push(total[j]);
   			count.value =	('0' + redNumber).slice(-2);
			}
  
   		console.log(simon);
   		you = [];
   		var k = 0;

   		//Button pressing session
   		function incremental(){
   			setTimeout(function () {
   				// Off
   				if(square.style.marginLeft === '0px'){
						count.value = '';
						total = [];
						simon = [];
						you = [];
						redNumber = 1;
						j = 0;
						k = 0;
						return;
					}    
           
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
   			},500)
   		}
   		incremental();
   		if(JSON.stringify(you) === JSON.stringify(simon)){ 
				redNumber ++;
				j++; 	
			} else {
				redNumber = simon.length + 1;
				j = simon.length; 
			}
			      
      if (j < 20) {             
        playSound();               
    	}               
  	}, 1000 * redNumber)
  	//(simon.length === 1 ? 2 : simon.length)
	}
	playSound();
}

//Check for victory
function victoryCheck(){
	if(JSON.stringify(you) === JSON.stringify(simon) && you.length === 20){ 
		document.getElementById('victory-sound').play();                   
		count.value = ':)';
		startGame();
	} 
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
