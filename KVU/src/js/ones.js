

//var width = window.innerWidth;
//var height = window.innerHeight;
containerDiv = $('#ones_box');
var box_width = containerDiv.width() - 5;
 var box_height = containerDiv.height() - 5;
var stage = new Konva.Stage({
    container: 'ones_box',
    width: box_width,
    height: box_height
});

var layer = new Konva.Layer();
    var rectX = stage.getWidth()//- 25;
    var rectY = stage.getHeight() // - 30;

    var box1 = new Konva.Rect({
        x: 1,
        y: 50,
        width: box_width/2-5,
        height: box_width/2-5,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false,
        shadowOffsetX: 3,
        shadowOffsetY: 3
    });
    layer.add(box1);
    stage.add(layer);

    

