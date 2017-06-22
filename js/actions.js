var onOff = false;
var strictMode = false;

//On-off toggle
var square = document.getElementById('square-id');
var count = document.getElementById('count-id');
square.addEventListener('click', function(){
	if(square.style.marginLeft === '0px' ||  square.style.marginLeft === ''){
		square.style.marginLeft = '15px';
		onOff = true;
		count.value = '- -';
		toggleSounds();
	} else if (square.style.marginLeft === '15px' && onOff === true){
		square.style.marginLeft = '0px';
		count.value = '';
		onOff = false;
		dot.style.backgroundColor = '#32050C';
		strictMode = false;
		toggleSounds();
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
		});
		blue.addEventListener("click", function(){
			document.getElementById('blue-sound').play();
		});
		yellow.addEventListener("click", function(){
			document.getElementById('yellow-sound').play();
		});
		green.addEventListener("click", function(){
			document.getElementById('green-sound').play();
		});
	} else if (onOff === false){
		redSound.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
		blueSound.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
		yellowSound.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
		greenSound.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
	}
}
