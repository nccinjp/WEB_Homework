{
    document.addEventListener("mousemove",(event)=>{
        //console.log("mouse move");

        //client position
        document.querySelector("#client-x").value = event.clientX;
        document.querySelector("#client-y").value = event.clientY;

        //screen position
        document.querySelector("#screen-x").value = event.screenX;
        document.querySelector("#screen-y").value = event.screenY;

        //global position
        document.querySelector("#global-x").value = event.clientX + document.documentElement.scrollLeft ;
        document.querySelector("#global-y").value = event.clientY + document.documentElement.scrollTop ;

    });

    console.log(`  
        x: ${ document.quwerSelector("#model-content").offsetLeft }
        y: ${ document.quwerSelector("#model-content").offsetTop }
    `);   //  ` 這標誌是変数転換
}