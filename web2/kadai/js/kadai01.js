{
    //#box1-bg-btnをCLICKした時
    document.querySelector("#box1-bg-btn").onclick = function(){
        document.querySelector("#box1").style.background = 
        document.querySelector("#set-bg-txt").value;
    }   

    //box2
    document.querySelector("#box2-color-btn").onclick = function(){
        document.querySelector("#box2-text").style.color = 
        document.querySelector("#set-color-txt").value;
    }

    //box3
    document.querySelector("#box3-font-size-btn").onclick = function(){
        document.querySelector("#box3-text").style.fontSize = 
        document.querySelector("#set-font-size-txt").value;
    }

    //box4
    document.querySelector("#box4-border-btn").onclick = function(){
        document.querySelector("#box4").style.border = 
        document.querySelector("#set-border-txt").value;
    }


}