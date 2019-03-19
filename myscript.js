var myRequest = new XMLHttpRequest();
myRequest.open('GET','https://codepen.io/eclairereese/pen/BzQBzR.html');
myRequest.onreadystatechange = function(){
	if (myRequest.readyState === 4) {
		document.getElementByid('ajax-content').innerHTML = myRequest.responseText;
	}
};

function sendTheAJAX(){
	myRequest.send();
	document.getElementByid('reveal').style.display = 'none';
}