const onBtn = document.querySelector('.on-btn');
const offBtn = document.querySelector('.off-btn');
const bulbContainer = document.querySelector('.bulb-container');

onBtn.addEventListener('click', function () {
    bulbContainer.classList.toggle('show-bulb');
});

offBtn.addEventListener('click', function () {
    bulbContainer.classList.toggle('show-bulb');
});