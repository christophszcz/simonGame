//On-off toggle
var square = document.getElementById('square-id');
square.addEventListener('click', function toggleSetting(){
	if(square.style.marginLeft === '0px' ||  square.style.marginLeft === ''){
		square.style.marginLeft = '15px';
	} else if (square.style.marginLeft === '15px'){
		square.style.marginLeft = '0px';
	}
});
