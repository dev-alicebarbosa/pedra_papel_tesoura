btn= document.getElementById("btn");
img1= document.getElementById("img1");
img2= document.getElementById("img2");
ganhou= document.getElementById("ganhador");


let pedra="pedra";
let papel="papel";
let tesoura="tesoura";

btn.addEventListener('click', function(event){
    event.preventDefault()
    jog1 =document.getElementById("jog1").value;
    jog2 =document.getElementById("jog2").value;
 
    if(jog1== 1){
        img1.src = `img/${pedra}.png`
    }else if(jog1== 2){
        img1.src = `img/${papel}.png`
    }else if(jog1== 3){
        img1.src = `img/${tesoura}.png`
    }

    if(jog2== "a"){
        img2.src = `img/${pedra}.png`
    }else if(jog2== "s"){
        img2.src = `img/${papel}.png`
    }else if( jog2== "d"){
        img2.src = `img/${tesoura}.png`
    }

    if((jog1== 1 && jog2== "a") || (jog1== 2 && jog2== "s") || (jog1== 3 && jog2== "d")){
       ganhou.innerHTML= "Houve empate"
    } else if ((jog1== 1 && jog2=="d") || (jog1==2 && jog2== "a") || (jog1==3 && jog2== "s")){
        ganhou.innerHTML= "Jogador 1 venceu"
    } else if ((jog1== 1 && jog2=="s") || (jog1==2 && jog2== "d") || (jog1==3 && jog2== "a")){
        ganhou.innerHTML= "Jogador 2 venceu"
    }
})







