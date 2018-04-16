

var box_width = $('#tens_box').width()-5;
var box_height = $('#tens_box').height()+5;
//var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'tens_box',
    width: box_width,//$('#tens_box').innerWidth(),
    height: 90//box_height//box_height //$('#tens_box').innerHeight()
});

var layer = new Konva.Layer();

    var rectX = stage.getWidth(); // 2 //- 25;
    var rectY = stage.getHeight() ;// 2// - 30;

    var box1 = new Konva.Rect({
        x: 1,
        y: 0,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 3,
        draggable: false,
        shadowOffsetX : 5,
        shadowOffsetY : 5
    });
    

    var box2 = new Konva.Rect({
        x: 1,
        y: 10,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false
    });
    
    var box3 = new Konva.Rect({
        x: 1,
        y: 20,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false
    });
    

    var box4 = new Konva.Rect({
        x: 1,
        y: 30,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false
    });

    var box5 = new Konva.Rect({
        x: 1,
        y: 40,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false
    });
    

    var box6 = new Konva.Rect({
        x: 1,
        y: 50,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false
    });
    
    var box7 = new Konva.Rect({
        x: 1,
        y: 60,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false
    });
    

    var box8 = new Konva.Rect({
        x: 1,
        y: 70,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false
    });
    var yellowGroup = new Konva.Group({
        x: 100,
        y: 100,
        draggable: true
    });
    var box9 = new Konva.Rect({
        x: 1,
        y: 80,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false
    });
    

    var box10 = new Konva.Rect({
        x: 1,
        y: 90,
        width: box_width,
        height: 10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1,
        draggable: false
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
    layer.add(box3);
    layer.add(box4);
    layer.add(box5);
    layer.add(box6);
    layer.add(box7);
    layer.add(box8);
    layer.add(box9);
    layer.add(box10);
    stage.add(layer);

