// console.log(`hello`)
document.addEventListener('keypress', function(musicFingers) {
    const tone = document.querySelector(`audio[data-key="${musicFingers.keyCode}"]`);
    if(!tone) return;
    const pianoKey = document.querySelector(`.pianoKey[data-key="${musicFingers.keyCode}"]`);
    tone.currentTime = 0;
    pianoKey.classList.add('pressed');
    tone.play();
    setTimeout(function(){
        pianoKey.classList.remove('pressed')

    },300)
});

