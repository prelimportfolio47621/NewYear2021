const container = document.querySelector('.container');

function createFireworks() {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    const x = Math.floor(Math.random() * (window.innerWidth - 200));
    const y = Math.floor(Math.random() * (window.innerHeight - 200));

    firework.style.top = (y > 200 ? y - 200 : y) + 'px';
    firework.style.left = (x > 200 ? x - 200 : x) + 'px';
    console.log(window.innerHeight);

    for (let i = 0; i < 12; i++) {
        const beam = document.createElement('div');

        beam.classList.add('beam');
        beam.style.setProperty('--i', i);

        firework.appendChild(beam);
    }

    container.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);

    const delay = Math.floor(Math.random() * 3000) + 100;

    setTimeout(() => {
        createFireworks();
    }, delay);
}

createFireworks();
setTimeout(() => {
    createFireworks()
}, 1000);