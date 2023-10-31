{
    //local storage key 
    const STORAGE_KEY = "SK2_WEB";
    //txt_local
    const localText = document.querySelector ( "#txt_local" );

    //配列
    let json = [
        {id: 1, name: "A"},  //0
        {id: 2, name: "B"},  //1
        {id: 3, name: "C"},  //2
        {id: 4, name: "D"},  //3
    ];

    //localStorage[ "SK2_WEB" ]を読み込む
    let data = localStorage . getItem(STORAGE_KEY);

    if( data ){
        localText . innerText = data ;
    }else{
        //localStorage[SK2_WEB]沒有儲存到資料
        localText . innerText = "data hasn't be saved";
    }

    //btn_local
    const saveButton = document.querySelector( "#btn_local" );

    saveButton . addEventListener(
        "click",()=>{
            //localStorage[SK2_WEB]has something saved
            localStorage . setItem( STORAGE_KEY, JSON.stringify(json) );
            window.location.reload();
        }
    );

    //btn_remove
    const removeButton = document.querySelector( "#btn_remove" );

    removeButton . addEventListener(
        "click",()=>{
            //localSStorage[SK2_WEB]delete the data
            localStorage . removeItem( STORAGE_KEY );
            location.reload();
        }
    );

}