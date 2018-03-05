
{/* <audio data-key="65" src="sounds/clap.wav"></audio> */ }

window.onload = function () {
    var KeyboardGame = {
        initKeyboardGame: function () {
            const keys = document.querySelectorAll('.key');
            keys.forEach(key => {
                return key.addEventListener('transitionend', this.removeTransition);
            });
        },
        playing: function (e) {
            var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if (!audio) return
            //audio里的方法和属性
            audio.currentTime = 0
            audio.play()
            key.classList.add('playing')
        },
        removeTransition: function (e) {
            console.dir(e);
            if (e.propertyName !== 'transform') return false;
            this.classList.remove('playing');
        }
    }
    KeyboardGame.initKeyboardGame()
    window.addEventListener('keydown', KeyboardGame.playing)
}