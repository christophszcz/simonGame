var colors = ['red', 'blue', 'yellow', 'green'], number, total = [], simon =[];
 
function randomNumber(){
	number = Math.floor(Math.random() * 4);
	console.log(randomNumber);
}

var redNumber = 1;

function startGame(){
	for(i = 0 ; i < 20; i ++){
		randomNumber();
		total[i] = colors[number];
	}
     
	var j = 0; 
	you = [];
	// Off 
	if(square.style.marginLeft === '0px'){
		count.value = '';
		total = [];
		simon = [];
		you = [];
		var redNumber = 1;
		return;
	}  

	function playSound () {            
   	setTimeout(function () { 
   		// Off 
   		if(square.style.marginLeft === '0px'){
				count.value = '';
				total = [];
				simon = [];
				you = [];
				var redNumber = 1;
				return;
			}

			//Show you array
			if(you.length > 0){
 				console.log("You " + you);
 			} 

			//Cancel after wrong answer
			if(JSON.stringify(you) !== JSON.stringify(simon)){ 
				document.getElementById('mistake-sound').play();                   
   			count.value = 'X';
			} else{
   			simon.push(total[j]);
			}
			
			count.value =	('0' + redNumber).slice(-2);
   	// 	}else if (JSON.stringify(you) !== JSON.stringify(simon)){ 
   	// 		document.getElementById('mistake-sound').play();                   
   	// 		count.value = 'X';
   	// 		total = [];
				// simon = [];
				// you = [];
   	// 		return;
   	// 	} 
   
 		 // 	if(you.length > 0){
 			// 	console.log("You " + you);
 			// } 
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
						var redNumber = 1;
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
   			},1000)
   		}
   		incremental();
   		if(JSON.stringify(you) === JSON.stringify(simon)){ 
				redNumber ++; 	
			} else {
				redNumber = 2;
			}
			j++;
			      
      if (j < 20) {             
        playSound();             
      }                     
  	}, 2500 * 5)
	}
	playSound();
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
