{
    const list = document.querySelector("#list");
    let listItems = list.querySelectorAll("li");
    const addButton = document.querySelector("#btn_add");

    const li = document.createElement("li");

    addButton.addEventListener(
        "click",()=>{
        
            const clone = li.cloneNode(true);
            console.log(clone);
            clone.innerText ="リストの項目";

            //タグの追加
            list.append(clone);
    
            // add new li tag
            //element.append(target) element是親的TAG APPEND是最終子要示として追加

            // list.append( li );
            // listItems = list.querySelectorAll("li");
            // listItems.forEach(( element) =>{
            //     element.addEventListener( "click",()=>{
            //         element.remove();
            //     });
            // });
            
        }
    );

    
    //remove 
    // listItems. forEach(
    //     ( element )=>{
    //         element.addEventListener(
    //             "click",()=>{
    //                 element.remove();  //elementを削除
    //             }
    //         );
    //     }
    // );
  
    
    //先祖に孫のイベントを予約する
    list.addEventListener(
        "click",(event)=>{
            console.log(event.target.tagName);
            if( event.target.tagName == "LI"){
                event.target.removeEventListener();
            }

        }
    );


}