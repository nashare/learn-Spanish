export function playSound(containerClass) {
    document.querySelector(containerClass).addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            let audio = document.getElementById(event.target.id + '_audio');
            audio.play();
        }
    });
}