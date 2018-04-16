

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


var srcEl;
function dropHandler(el) {
    //el.preventDefault();  
    el.stopPropagation();

    //this is where we'd be checking if the element belongs to be dragged there
    //?

    //i think we'd just be checking srcEL to see if  it's a 10 or a 1

    //if thats true drop the canvas in

    this.innerHTML = el.originalEvent.dataTransfer.getData('text/html');

    //you'll need to do some dynamic stuff to get the canvas to resize




}
function handleStart(ev) {
    //ev.preventDefault();  
    //ev.stopPropagation();
    this.style.opacity = '0.4';
    srcEl = this;
    ev.originalEvent.dataTransfer.effectAllowed = 'move';
    ev.originalEvent.dataTransfer.setData('text/html', this.innerHTML);
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

        div += '<div id="ones' + i + '" class="col numberDiv" > ';

        div += '<div class="row numberDiv-drag">';
        for (j = 0; j < 5; j++) {
            //should be <div id=2_tens0....9)
            div += '<div class="col numberDiv" id ="' + i + '_ones' + j + '"></div>';

        }
        div += '</div>';

        div += '<div class="row numberDiv-drag">';
        for (j = 5; j < 10; j++) {
            //should be <div id=2_tens0....9)
            div += '<div class="col numberDiv" id ="' + i + '_ones' + j + '"></div>';

        }
        div += '</div></div> </div>';

        argumentID.append(div);

    }


    //iterate through all of the arguments 
    //add a tens box

    //the konvajs stages




    //append divs to screen and build konvajs modal
    //problem_div.append(div);

    //now create the canvas 
/*
    for (i = 0; i < problemObject.arguments.length; i++) {
        containerDiv = '#' + i + 'box';
        var box_width = $(containerDiv).width() - 5;
        var box_height = $(containerDiv).height() + 5;

        var stage = new Konva.Stage({
            container: containerDiv,
            width: box_width,//$('#tens_box').innerWidth(),
            height: 90//box_height//box_height //$('#tens_box').innerHeight()
        });


    }
*/


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





