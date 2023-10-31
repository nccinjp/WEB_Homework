{
    const categoryNavi = document.querySelector( "#category-navi" );
    const naviWrap = document.querySelector( "#navi-wrap" );

    document.addEventListener(
        "scroll",
        () =>{

            let scrollTop = document.documentElement.scrollTop;
            console.log(scrollTop);

            if(naviWrap.offsetTop < scrollTop){
                categoryNavi.style.top = `${scrollTop}px`;
            }else{
                categoryNavi.style.top = 0;
            }
        }
    );


}