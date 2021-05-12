
window.onload = function(){
    let $ = document;
    $.addEventListener("click", function( event ) {
        if(event.target.children.length==0)
            if(event.path[2].firstElementChild.getAttribute("style"))
            event.path[2].firstElementChild.setAttribute('style', event.target.getAttribute("coords"));
            else
                event.path[2].firstElementChild.setAttribute('style', event.target.getAttribute("coords"));
        else
            event.path[1].firstElementChild.removeAttribute('style');
    }, false);
}
