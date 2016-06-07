function sayThatWasEasy() { 
    var thatWaseasy = new Audio("that_was_easy.mp3");
    thatWaseasy.play(); 
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) { 
    if (event.keycode==32) { 
        $("#easy").trigger("click");
    }  
}
