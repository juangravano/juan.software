var abrirPopup = document.getElementById('abrirPopup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	botoncerrar = document.getElementById('boton-cerrar'),
	blur = document.getElementById('blur');

abrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
	blur.classList.add('active');
});

botoncerrar.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
	blur.classList.remove('active');
});