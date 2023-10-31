{
    // .txt  //const 4 定数 
    const textElements = document.querySelectorAll(".txt");   
    console.log(textElements);

    // .txt:last-child 
    const textElement = document.querySelectorAll(".txt:last-child");
    console.log(textElement);

    // textElementsの先頭要素
    textElements[0].style.color = "skyblue";
    // textElementsの最終要素
    textElements[ textElements.length -1 ].style.color = "pink";

    // .txt change fontsize
    for( let i = 0 ; i < textElements.length ; i++ ){
        textElements[i].style.fontSize = "2rem" ;
    }

    // .txt change the font bold
    // forEach (method -- Array,NodeList)
    textElements . forEach( ( value, key ) => {
        // data's numbers process 
        value.style.fontWeight = (key +1) * 200 ;

        value.addEventListener(
            "click",
            ()=>{
                alert( `要素番号：${key}` );
            }
        );



    }); 


}