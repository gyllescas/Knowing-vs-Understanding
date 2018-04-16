
var srcEl;
function dropHandler(el){
    if(el.stopPropogation){
        el.stopPropagation();
    }

    //this is where we'd be checking if the element belongs to be dragged there
    //?

    //i think we'd just be checking srcEL to see if  it's a 10 or a 1

    //if thats true drop the canvas in

    this.innerHTML= el.originalEvent.dataTransfer.getData('text/html');

    //you'll need to do some dynamic stuff to get the canvas to resize




}
function handleStart(ev){
    ev.stopPropagation();
    this.style.opacity = '0.4';
    srcEl = this;
    ev.originalEvent.dataTransfer.effectAllowed = 'move';
    ev.originalEvent.dataTransfer.setData('text/html', this.innerHTML);

}


$('.drag_box').on('dragstart',handleStart);
$('.drag_box').on('drop',dropHandler);

