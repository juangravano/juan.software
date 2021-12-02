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

window.addEventListener('load', () => {
    const canvas = document.getElementById('matrix');
    const context = canvas.getContext('2d');
    const letters = Array(256).join(1).split('');
    const colors = ['#fc93bf', '#73fb98', '#9c56c3'];

    const resizeCanvas = () => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    };

    resizeCanvas();

    window.onresize = resizeCanvas;

    const drawCanvas = () => {
        context.fillStyle = 'rgba(0,0,0,.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        letters.map((y_pos, index) => {
            text = String.fromCharCode(3e4 + Math.random() * 33);
            x_pos = index * 25;
            context.fillText(text, x_pos, y_pos);
            letters[index] = y_pos > 758 + Math.random() * 1e4 ? 0 : y_pos + 10;
        });
    };

    setInterval(drawCanvas, 45);
});