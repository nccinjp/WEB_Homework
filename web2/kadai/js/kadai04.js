{
    const slider = document.querySelector("#slider");
    const slider_item = content.querySelectorAll("li");
    const interval = 1000;
    let currentIndex = 0;

    //const imgnumber = document.querySelector("#slider-wrap");

    setInterval(
        () =>{

        let nextIndex = (currentIndex < slider_item.length -1)? currentIndex+1 : 0 ;

        slider_item[currentIndex].style.display ="none";
        slider_item[nextIndex].style.display ="block";

            currentIndex = nextIndex;

        },
        interval
    );

}