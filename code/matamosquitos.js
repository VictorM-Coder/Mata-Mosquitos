if(document.getElementById("btn-jogar") != null){
    document.getElementById("btn-jogar").addEventListener('click', play)
}

if(document.getElementById("spwam") != null){
    document.getElementById("spwam").addEventListener('click', spawnMoquisto)
}

var level

function play(){
    level = document.getElementById("seletor-dificuldade").value

    console.log(level)

    if(level != 0){
        window.location.href = "jogo.html"
    }else{
        window.alert("Escolha uma dificuldade!")
    }
}

function spawnMoquisto(){
    /*var mosquito = document.createElement('img')
    mosquito.setAttribute('src', '_imagens/mosca.png')
    document.body.appendChild(mosquito)*/

    console.log(randomize(1, 10))
}

function randomize(min, max){
    return Math.floor((Math.random() * (max) + (min)))
}