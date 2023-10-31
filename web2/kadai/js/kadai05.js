{
    //element
    const doc = document;
    const todoListWrap     = doc.querySelector(".todo");
    const todoListItemWrap = todoListWrap.querySelector("tbody");
    const addButton        = doc.querySelector("[type=submit]");
    const commentField     = doc.querySelector("[name=comment]");

    const todoItemElementTemplate = doc.createElement("tr");
    const todoItemCommentElement  = doc.createElement("td");
    const todoItemControlElemnet  = doc.createElement("td");
    const todoItemRemoveButton    = doc.createElement("button");

    todoItemCommentElement . classList . add("comment");
    todoItemControlElemnet . classList . add("control");
    todoItemRemoveButton   . classList . add("remove");
    //todoItemCommentElement . innerText = commentField.value;
    todoItemRemoveButton   . innerText = "delete";

    todoItemControlElemnet .append( todoItemRemoveButton );
    todoItemElementTemplate.append(todoItemCommentElement);
    todoItemElementTemplate.append(todoItemControlElemnet);

    console.log(todoItemControlElemnet);

    addButton.addEventListener(
        "click",(event)=>{
            todoItemCommentElement.innerText = commentField.value;
            event.preventDefault();
            event.stopPropagation();

            let controlClone = todoItemElementTemplate.cloneNode(true);

            todoListItemWrap.append(controlClone);

            controlClone.addEventListener(
                "click",(event) => {
                    if(event.target.tagName == "BUTTON"){
                        event.target.parentElement.parentElement.remove();
                    }
                }
            );
            
        });

    
}