const timeInput = document.getElementById('timeInput');
const startButton = document.getElementById('startButton');
const endButton = document.getElementById('endButton');
const timerDisplay = document.getElementById('timerDisplay');


startButton.addEventListener('click', ()=>{
let timeRemaining = parseInt(timeInput.value, 10)
if (isNaN(timeRemaining) || timeRemaining <= 0){
    alert('Please Enter a number between 0 and 100')
    return;
}


const countdown = setInterval(()=>{
timerDisplay.textContent = `${timeRemaining} seconds left`;
timeRemaining--;


if(timeRemaining < 0 ){
clearInterval(countdown);
alert('Time Up!');
}

// for endButton
// endButton.addEventListener('click', ()=>{
//     clearInterval(countdown);
// })

}, 1000);

});


endButton.addEventListener('click', ()=>{
    clearInterval(countdown);
})