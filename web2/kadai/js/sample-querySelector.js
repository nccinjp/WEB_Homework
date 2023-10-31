{
    //h1
    console.log(document.querySelector( "h1"));

    //h1のテキストを更新
    document.querySelector( "h1" ).innerText = "JSでテキスト更新";

    //p
    console.log( document.querySelector("p") );

    //h1のstyleを設定
    document.querySelector( "h1" ).style.color = "tomato" ;
    document.querySelector( "h1" ).style.backgroundColor = "skyblue";

    //左罫線5px solid tomoto
    document.querySelector( "h1" ).style.borderLeft = "5px solid tomato";
    //左内余白20px
    document.querySelector( "h1" ).style.paddingfLeft = "20px";

    // #text01をクリックした時, #text02's front size change 
    document.querySelector( "#text01" ).onclick = function(){
        document.querySelector( "#text02" ).style.fontSize = "3em";
    }

    // name=set01
    document.querySelector("[name=set01]").oninput = function() {
        //text02　の表示データを[name=set=01]の入力内容に変更する
        document.querySelector("#text02").innerText=
        document.querySelector("[name=set01]").value;

    
    }

}
