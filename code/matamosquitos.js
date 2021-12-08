if(document.getElementById("btn-jogar") != null){
    document.getElementById("btn-jogar").addEventListener('click', play)
}

if(document.getElementById("spwam") != null){
    document.getElementById("spwam").addEventListener('click', timer)
}

var level

function play(){
    var select = (document.getElementById("seletor-dificuldade"))
    level = Number(select.options[select.selectedIndex].value)

    window.alert(level)

    if(level != 0){
        window.location.href = "jogo.html"
    }else{
        window.alert("Escolha uma dificuldade!")
    }
}

function spawnMoquisto(){
    var mosquito = document.createElement('img')
    mosquito.setAttribute('src', '_imagens/mosca.png')

    mosquito.setAttribute("width", String(randomize(50, window.innerWidth/15)))

    mosquito.style.position = 'absolute'
    mosquito.style.top =  String(randomize(0, window.innerHeight - 150) + "px")
    mosquito.style.left = String(randomize(50, window.innerWidth - 200) + "px")
    
    document.body.appendChild(mosquito)
}

function randomize(min, max){
    return Math.floor((Math.random() * (max) + (min)))
}