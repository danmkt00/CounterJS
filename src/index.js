const display = document.getElementById('display');
const plusBtn = document.getElementById('plus-btn');
const resetBtn = document.getElementById('reset-btn');
const minusBtn = document.getElementById('minus-btn');

data = 0;

plusBtn.addEventListener('click', () => {
    data++;
    display.innerText = data;
});

resetBtn.addEventListener('click', () => {
    data = 0;
    display.innerText = data;
});

minusBtn.addEventListener('click', () => {
    data--;
    display.innerText = data;
});
