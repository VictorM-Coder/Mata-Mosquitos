var totalTimeInSeconds = 14
var time = setInterval(timerDecrement, 1000)
var timer = document.getElementById('timer')

timer.innerText = 15

function timerDecrement(){
    timer.innerText = totalTimeInSeconds

    if(totalTimeInSeconds > 0){
        totalTimeInSeconds--
    }else{
        clearInterval(time)
    }
}