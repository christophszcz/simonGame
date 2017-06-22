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
	} else if (square.style.marginLeft === '15px' && onOff === true){
		square.style.marginLeft = '0px';
		count.value = '';
		onOff = false;
		dot.style.backgroundColor = '#32050C';
		strictMode = false;
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
