{
    // #id  txt_session
    const sessionTextField = document.querySelector( "#txt_session" );

    // #btn_save
    const saveButton = document.querySelector( "#btn_save" );

    // session data
    let sessionData = sessionStorage . getItem ( "sample-session" );

    sessionStorage.setItem( "sample-session" , "SK2A" );


    
    // #btn_save click event
    saveButton.addEventListener(
        "click",
            (event)=>{

                if(sessionData){
                    sessionTextField . innerText = String( sessionData );
            
                }else{
                    sessionTextField . innerText = "セッションにデータはありません"
                }
                
                
            }
    );
}