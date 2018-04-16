

//these objects get added to the global problems array


function Problem(userInput) {
    this.problem = userInput;
    this.arguments = [];
    this.argumentCount;

}



Problem.prototype.addArg = function (arg) {
    //this function will add arg to the argument array 
    this.arguments.push(arg);
    this.argumentCount++;
};


Problem.prototype.getargCount = function () {
    return this.argumentCount;

};



//code for drag/ global variables
var problems = JSON.parse(localStorage['problems']);
console.log("this is what problem is : ", problems);
var problemIndex = 0;
var skipText = $('#skip_text');
var problem_div = $('#problem_div');
var fullProblems = [];
var onesStages =[];
var onesStagesValues=[]


var srcEl;
function dropHandler(el) {
    //el.preventDefault();  
    el.stopPropagation();

    //this is where we'd be checking if the element belongs to be dragged there
    //?

    //i think we'd just be checking srcEL to see if  it's a 10 or a 1

    //if thats true drop the canvas in
    console.log("this is what el.id is: ", el.id);
    var origin = srcEl.id;
    console.log("this is what origin is: ", origin);
    origin = origin.toString();
    if( origin == 'ones_box'){
        //this is a one's get the index of onesStages to access the stage
        //add one's if you need to 
        
        console.log("this is what 'this.id[0] refers to: " ,this.id[0]);
        //dropbox?
        var i = this.id[0];
        //
        curStage= onesStages[i];
        if(onesStagesValues[i]==0){
            //we just need to unhide it 

            $('#'+i +'_ones').removeClass('hidden');
            onesStagesValues[i]++;
            return;
            
        }




    }

    this.innerHTML = el.originalEvent.dataTransfer.getData('text/html');

    //you'll need to do some dynamic stuff to get the canvas to resize




}
function handleStart(ev) {
    //ev.preventDefault();  
    //ev.stopPropagation();
    this.style.opacity = '0.4';
    srcEl = this;
    console.log("this is the id of the source element ", this);
    ev.originalEvent.dataTransfer.effectAllowed = 'move';
    ev.originalEvent.dataTransfer.setData('text', this.id);
    return;

}



//








//we have a variable called "problems" in local storage

//the game plan is just to iterate through that 

console.log("this is whats in problems " + localStorage.problems);




//i need to create problem objects to keep track of their div id's?



/* 
Create a container div with divMax 
divs that are draggable=true 

the id's will be used in the code to check if there are 10 1's in the one's box

maybe just one canvas 


*/
function createDivs(problemObject) {

    var i, j;
    var div = '';
    for (i = 0; i < problemObject.arguments.length; i++) {
        var argumentID = $('#' + i + 'box');
        div += '<div class ="row numberDiv">';
        div += '<div id="tens' + i + '" class="col numberDiv" > ';

        div += '<div class="row numberDiv-drag">';
        for (j = 0; j < 5; j++) {
            //should be <div id=2_tens0....9)
            div += '<div class="col numberDiv" id ="' + i + '_tens' + j + '"></div>';

        }
        div += '</div>';

        div += '<div class="row numberDiv-drag">';
        for (j = 5; j < 10; j++) {
            //should be <div id=2_tens0....9)
            div += '<div class="col numberDiv" id ="' + i + '_tens' + j + '"></div>';

        }
        div += '</div> </div>';




        // same for one's 
        //except we only need 10 stacked
        div += '<div id="ones' + i + '" class="col numberDiv" > ';

        div += '<div class="row numberDiv-drag">';
        // for (j = 0; j < 5; j++) {
        //    //should be <div id=2_tens0....9)
        //     div += '<div class="col numberDiv" id ="' + i + '_ones' + j + '"></div>';

        // }
        div += '</div>';

        div += '<div class="row numberDiv-drag">';
        div += '<div class="col-8 numverDiv"> </div>'
        div += '<div class="col-2 hidden numberDiv" id="' + i + '_ones"> </div>'
        //for (j = 0; j < 10; j++) {
        //should be <div id=2_tens0....9)
        //   div += '<div class="row numberDiv" id ="' + i + '_ones' + j + '"></div>';

        // }
        div += '</div></div></div> </div>';

        argumentID.append(div);
        //now clear div?
        div = '';

        //make canvas for ten's

        for (j = 0; j < 10; j++) {
            containerDiv = $('#' + i + '_tens' + j);
            var box_width = containerDiv.width() - 5;
            var box_height = containerDiv.height() - 5;

            var stage = new Konva.Stage({
                container: i + '_tens' + j,
                width: box_width,//$('#tens_box').innerWidth(),
                height: box_height//box_height//box_height //$('#tens_box').innerHeight()
            });

            var layer = new Konva.Layer();

            var rectX = stage.getWidth(); // 2 //- 25;
            var rectY = stage.getHeight();// 2// - 30;

            console.log("this is recy/10 " + rectY / 10);
            console.log("this is rectY ", rectY);

            var box1 = new Konva.Rect({
                x: 1,
                y: 0,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });


            var box2 = new Konva.Rect({
                x: 1,
                y: 10,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });

            var box3 = new Konva.Rect({
                x: 1,
                y: 20,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });


            var box4 = new Konva.Rect({
                x: 1,
                y: 30,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });

            var box5 = new Konva.Rect({
                x: 1,
                y: 40,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });


            var box6 = new Konva.Rect({
                x: 1,
                y: 50,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });

            var box7 = new Konva.Rect({
                x: 1,
                y: 60,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });


            var box8 = new Konva.Rect({
                x: 1,
                y: 70,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });

            var box9 = new Konva.Rect({
                x: 1,
                y: 80,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });


            var box10 = new Konva.Rect({
                x: 1,
                y: 90,
                width: box_width,
                height: rectY / 10,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            });

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


        }

        //same for one's
        containerDiv = $('#' + i + '_ones');
        var box_width = containerDiv.width() - 5;
        var box_height = containerDiv.height() - 5;

        var stage = new Konva.Stage({
            container: i + '_ones',
            width: box_width,//$('#tens_box').innerWidth(),
            height: box_height//box_height//box_height //$('#tens_box').innerHeight()

        });
        onesStages.push(stage);
        onesStagesValues.push(0);
        var layer = new Konva.Layer();

         var rectX = stage.getWidth(); // 2 //- 25;
        var rectY = stage.getHeight();// 2// - 30;

        console.log("this is recy/10 " + rectY / 10);
        console.log("this is rectY ", rectY);

        var box1 = new Konva.Rect({
            x: 1,
            y: 0,
            width: box_width,
            height: rectY / 10,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 1,
            draggable: false,
            shadowOffsetX: 3,
            shadowOffsetY: 3
        });
        layer.add(box1);
        stage.add(layer);

    }


    //iterate through all of the arguments 
    //add a tens box

    //the konvajs stages




    //append divs to screen and build konvajs modal
    //problem_div.append(div);

    //now create the canvas 





}

//now let's get the html ready
function load_problem() {
    //if there is a problem load it 
    //else say thanks for playing 
    //use a modal

    if (problemIndex == problems.length) {
        $('#exitModal').modal('show');
    }

    var currentProblem = problems[problemIndex];
    console.log("this is what curret problem is: ", currentProblem);
    // split on white space 
    // currentProblem.toString().replace(/\s/g, "") ;
    //console.log("this is what curret problem is after removing white space: ", currentProblem);



    currentProblem.split('');

    problemObject = new Problem(currentProblem);


    console.log("this is what curret problem is: ", currentProblem);

    //clear what's currenlty in the div
    $("#problem_div").empty();
    var i;
    var argCount = 0;
    var operatorCount = 0;

    //array of arguments 

    for (i = 0; i < currentProblem.length; i++) {

        if (isNaN(currentProblem[i])) {
            console.log("this is an operator: ", currentProblem[i]);
            var stringtoappend = '<div class="col" id="operator' + operatorCount + '">';
            stringtoappend += '<h3>' + currentProblem[i] + '</h3';
            stringtoappend += '</div>';
            console.log("this is what i tried to append", stringtoappend)
            //this is an operator so lets append an operator div
            problem_div.append(stringtoappend);
            operatorCount++;


        }
        else {
            //this is an arugment 

            //we're going to iterate through the rest until we see an operator

            var argument = currentProblem[i];


            while (!isNaN(currentProblem[i + 1])) {
                argument += currentProblem[i++];
                console.log("this is argument:", argument);
            }
            problemObject.addArg(argument);



            var stringtoappend = '<div class="col" id=arg' + argCount + '>';

            stringtoappend += '<h3>' + argument + '</h3>';

            stringtoappend += '<div id="' + argCount + 'box"' + ' draggable="true" class="drag_box" >';


            stringtoappend += '</div> </div>';
            console.log("this is what i added to the div ", stringtoappend);
            problem_div.append(stringtoappend);
            argCount++;

        }



    }

    //push the problem and create the canvas
    fullProblems.push(problemObject);
    createDivs(problemObject);
    problemIndex++;
    if (problemIndex == problems.length) {


        skipText.text('Finish');
        //skipText.attr('href', '#');
        //direct to finish page 
        //maybe keep some stats on them if you get to it



    }

    //return;



}

$(document).ready(function () {
    //load the first problem to be solved

    load_problem();

    $('#skip').on('click', load_problem);

    $('.drag_box').on('dragenter', function (event) {
        event.preventDefault();

    });

    $('.drag_box').on('dragover', function (event) {
        event.preventDefault();
    })


    $('.drag_box').on('dragstart', handleStart);
    $('.drag_box').on('drop', dropHandler);







});





