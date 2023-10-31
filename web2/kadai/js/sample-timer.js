{
    const intervalText = document.querySelector("#interval_text");
    const startButton =  document.querySelector("#btn_start");
    const stopButton = document.querySelector("#btn_stop");

    let intervalCount = 0;
    let timerId = null;
   
    startButton.addEventListener(
        'click',(event)=>{
                if( ! timerId ){

                    // インターバルタイマーの処理 2個引数要る
                    timerId = setInterval(() => {         //処理
                    intervalCount++;
                    console.log(intervalCount);
                    intervalText.innerText = intervalCount;
                    }, 1000 ); //幾秒後出現的時間 

                }
        }
    );
    
    //TIMER沒有停止的方法、只能廢棄、丟掉、CLEAR的方式
    stopButton.addEventListener(
        'click',
           (event) =>{
                clearInterval(timerId);
                timerId = null;
        }
    );

   

}