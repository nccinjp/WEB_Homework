{
    // class=blank when clicked, open new window and show that information
    const linkElements = document.querySelectorAll(".blank");   
    console.log(linkElements[0].href);

    linkElements . forEach( 
        ( element ) => {
            element.addEventListener(
                "click",
                (event)=>{
                    event.preventDefault();

                    open(element.href,"New Window");
                    
                }
            );
    }); 
    
}