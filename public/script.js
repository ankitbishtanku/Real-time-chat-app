 

var socket = io();

var chatBox = document.getElementById('chatBox');
var textMsg = document.getElementById('textMsg');
var msgDivElement = document.getElementById('msgDiv');
var send = document.getElementById('btn-send');
var picker = document.querySelector('emoji-picker');


socket.on('chat message', (msg) => {
	var msgDivElement = document.getElementById('msgDiv');
	var msgElement = document.createElement('p');
	msgElement.textContent = msg;

	msgDivElement.appendChild(msgElement);
	chatBox.appendChild(msgDivElement);
});

picker.addEventListener('emoji-click', (event) => {
  textMsg.value += `${event.detail.unicode}`;
});

send.addEventListener('click', () => {
	var textMsg = document.getElementById('textMsg');
	const msg = textMsg.value;
	socket.emit('chat message', msg);
	textMsg.value = "";
});