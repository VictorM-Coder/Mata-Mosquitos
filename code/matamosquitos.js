
document.getElementById("btn-jogar").addEventListener('click', play)


function play(){
    level = document.getElementById("seletor-dificuldade").value

    if(level != 0){
        window.location.href = "jogo.html"
    }else{
        window.alert("Escolha uma dificuldade!" + level)
    }
}