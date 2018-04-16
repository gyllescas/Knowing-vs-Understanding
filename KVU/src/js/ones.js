

//var width = window.innerWidth;
//var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'ones_box',
    width: $('#ones_box').innerWidth(),
    height: $('#ones_box').innerHeight()
});

var layer = new Konva.Layer();
    var rectX = stage.getWidth() / 2 //- 25;
    var rectY = stage.getHeight() / 2// - 30;

    var box1 = new Konva.Rect({
        x: rectX,
        y: rectY,
        width: 12,
        height: 25,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });
    

    var box2 = new Konva.Rect({
        x: rectX+20,
        y: rectY,
        width: 12,
        height: 25,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });
    

    var yellowGroup = new Konva.Group({
        x: 100,
        y: 100,
        draggable: true
    });

    //yellowGroup.add(box1);
    //yellowGroup.add(box2);
    layer.add(box1);
    layer.add(box2);
    stage.add(layer);

