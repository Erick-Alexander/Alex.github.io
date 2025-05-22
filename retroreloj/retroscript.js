//En esta parte de declaran las contantes del html XDXDXDDD
const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');

let stopwatchInterval;
let runningTime = 0;

//Aquí es donde la constante de pausa guardará el tiempo de ejecución XDDDDD
const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}

//En esta parte supongo que se ejecuta el pausado del tiempo XD
const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

//En esta parte tambien supongo que se ejecuta el botoncito de parar XD
const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00:000';
}

//En esta parte es donde se ejecuta el inicio del cronometro XD
const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval(() => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 10);
}

//En esta parte es donde se realiza los cálculos matemáticos para los segundos
const calculateTime = runningTime => {
    const totalMilliseconds = runningTime % 1000;
    const totalSeconds = Math.floor(runningTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);

    const displayMilliseconds = totalMilliseconds.toString().padStart(3, "0");
    const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
    const displayMinutes = totalMinutes.toString().padStart(2, "0");

    return `${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

//Ya no se que más escribir

//LALALALALALALALALALALALALALALALALALALA

//Yo no lo descargo por que ya lo tengo
