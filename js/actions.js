var onOff = false;
var strictMode = false;
var startPushed = false;
clickToggle();

//On-off toggle
var square = document.getElementById('square-id');
var count = document.getElementById('count-id');
square.addEventListener('click', function(){
	if(square.style.marginLeft === '0px' ||  square.style.marginLeft === ''){
		square.style.marginLeft = '15px';
		onOff = true;
		count.value = '- -';
		toggleSounds();
		clickToggle();
	} else if (square.style.marginLeft === '15px' && onOff === true){
		square.style.marginLeft = '0px';
		count.value = '';
		onOff = false;
		dot.style.backgroundColor = '#32050C';
		strictMode = false;
		toggleSounds();
		clickToggle();
		startPushed = false;
		count.value = '- -';
		redNumber = 1;
		simon = [];
	}
});

//Strict mode toggle
var strict = document.getElementById('strict-id');
var dot = document.getElementById('dot-id');
strict.addEventListener('click', function(){
	if(onOff === true  && (dot.style.backgroundColor === "rgb(50, 5, 12)" || dot.style.backgroundColor === '') ){
		dot.style.backgroundColor = '#DC0D29';
		strictMode = true;
	}else if (onOff === true && dot.style.backgroundColor === "rgb(220, 13, 41)"){
		dot.style.backgroundColor = '#32050C';
		strictMode = false;
	}
});

//Start button 
var start = document.getElementById('start-id');
start.addEventListener("click", function(){
	if (onOff === true){
		startPushed = true;
		startGame();
		console.log(simon);
	}
});

//User Input
var red = document.getElementById('red-id');
var blue = document.getElementById('blue-id');
var yellow = document.getElementById('yellow-id');
var green = document.getElementById('green-id');

function toggleSounds(){
	var redSound = document.getElementById('red-sound');
	var blueSound = document.getElementById('blue-sound');
	var yellowSound = document.getElementById('yellow-sound');
	var greenSound = document.getElementById('green-sound');
	if( onOff === true && redSound.src === "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" ){
		redSound.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
		blueSound.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
		yellowSound.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
		greenSound.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"; 
	}
	if (onOff === true){
		red.addEventListener("click", function(){
			document.getElementById('red-sound').play();
			red.classList.add('red-clicked');	
			if(red.style.borderColor === 'rgb(159, 15, 23)' || red.style.borderColor === ''){
				setTimeout(function(){
					red.classList.remove('red-clicked');
				}, 500);	
			}
		});
		blue.addEventListener("click", function(){
			document.getElementById('blue-sound').play();
			blue.classList.add('blue-clicked');
			if(blue.style.borderColor === 'rgb(9,74,143)' || blue.style.borderColor === ''){	
				setTimeout(function(){
					blue.classList.remove('blue-clicked');
				}, 500);	
			}
		});
		yellow.addEventListener("click", function(){
			document.getElementById('yellow-sound').play();
			yellow.classList.add('yellow-clicked');	
			if(yellow.style.borderColor === 'rgb(204,167,7)' || yellow.style.borderColor === ''){	
				setTimeout(function(){
					yellow.classList.remove('yellow-clicked');
				}, 500);
			}
		});
		green.addEventListener("click", function(){
			document.getElementById('green-sound').play();
			green.classList.add('green-clicked');	
			if(green.style.borderColor === 'rgb(0,167,74)' || green.style.borderColor === ''){	
				setTimeout(function(){
					green.classList.remove('green-clicked');
				}, 500);
			}
		});
	} else if (onOff === false){
		redSound.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
		blueSound.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
		yellowSound.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
		greenSound.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
	}
}

//Click Toggle

function clickToggle(){
	for (var i = 0; i < 4; i++){
		if(onOff === true){
			document.getElementsByClassName('quarter')[i].style.pointerEvents = "initial";
		}else{
			document.getElementsByClassName('quarter')[i].style.pointerEvents = "none";
		}
	}
}
