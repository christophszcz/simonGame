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
		onOff = false;
	}
});

//Strict mode toggle
var strict = document.getElementById('strict-id');
var dot = document.getElementById('dot-id');
strict.addEventListener('click', function(){
	if(onOff === true  && (dot.style.backgroundColor === "rgb(91, 68, 72)" || dot.style.backgroundColor === '') ){
		dot.style.backgroundColor = '#DC0D29';
		strictMode = true;
	}else if (onOff === true && dot.style.backgroundColor === "rgb(220, 13, 41)"){
		dot.style.backgroundColor = '#5B4448';
		strictMode = false;
	}
});
