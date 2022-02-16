const number = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    }
})