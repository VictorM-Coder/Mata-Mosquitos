var level
var totalTimeInSeconds = 14
var life = 3

if(String(window.location.href).indexOf("index.html") != -1){
    document.getElementById("btn-jogar").addEventListener('click', play)

}else if(String(window.location.href).indexOf("jogo.html") != -1){
    document.getElementById("spwam").addEventListener('click', spawnMoquisto)

    urlGame = String(window.location.href)
    valueLevel = urlGame.substring((urlGame.indexOf("=") + 1), (urlGame.length))
    level = Number(valueLevel)

    startTime()
    playSpawnMosquito()
}


function play(){
    var select = (document.getElementById("seletor-dificuldade"))
    level = Number(select.options[select.selectedIndex].value)

    if(level != 0){
        window.location.href = "jogo.html?level=" + level
    }else{
        window.alert("Escolha uma dificuldade!")
    }
}

function playSpawnMosquito(){
    timeSpawn = setInterval(spawnMosquitoByTimer, (1000/level) * 1.5)

    function spawnMosquitoByTimer(){
        if(totalTimeInSeconds > 0){
            spawnMoquisto()
        }else{
            clearInterval(timeSpawn)
        }
    }
    
}

function spawnMoquisto(){
    var mosquito = document.createElement('img')
    mosquito.setAttribute('src', '_imagens/mosca.png')

    mosquito.setAttribute("width", String(randomize(40, 70)))

    mosquito.style.position = 'absolute'
    mosquito.style.top =  String(randomize(0, window.innerHeight - 100) + "px")
    mosquito.style.left = String(randomize(0, window.innerWidth - 100) + "px")
    
    document.getElementById("game-screen").appendChild(mosquito)
    despawnMosquitoByTime(mosquito)
}

function randomize(min, max){
    return Math.floor((Math.random() * (max) + (min)))
}

function startTime(){
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
}

function despawnMosquitoByTime(mosquito){

    var time = setTimeout(function(){
        mosquito.parentNode.removeChild(mosquito)

        var hearth = document.getElementById(String("hearth" + life))
        life--
        hearth.setAttribute("src", '_imagens/coracao_vazio.png')

    }, (3/level * 1000))
}

