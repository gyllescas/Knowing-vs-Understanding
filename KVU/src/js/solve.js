
//we have a variable called "problems" in local storage

//the game plan is just to iterate through that 

console.log("this is whats in problems " + localStorage.problems);

var problems =JSON.parse(localStorage['problems']);
console.log("this is what problem is : ", problems);
var problemIndex  = 0;

//i need to create problem objects to keep track of their div id's?

//now let's get the html ready
function load_problem(){
    var currentProblem= problems[problemIndex];
    console.log("this is what curret problem is: ", currentProblem);
    // split on white space 
    currentProblem.replace(/ /g, '');

    currentProblem = currentProblem.split('');
    console.log("this is what curret problem is: ", currentProblem);

    //clear what's currenlty in the div
    $("#problem_div").empty();
    var i;
    var argCount=0;
    var operatorCount=0;
    for(i=0; i < currentProblem.length ; i++){
        if( isNaN(currentProblem[i])){
            console.log("this is an operator: ",currentProblem[i]);
            var stringtoappend = '<div class="col" id="operator'+operatorCount+'">';
            stringtoappend += '<h3>'+currentProblem[i]+'</h3';
            stringtoappend += '</div>';
            console.log("this is what i tried to append",stringtoappend)
            //this is an operator so lets append an operator div
            $("#problem_div").append(stringtoappend);
            operatorCount++;


        }
        else{
            //this is an arugment 
            var stringtoappend = '<div class="col" id=arg' + argCount + '>';
            stringtoappend += '<h3>' + currentProblem[i] + '</h3>';
            stringtoappend += '<div id="' + argCount +'box"' + ' class="drag_box" >';

            stringtoappend += '</div> </div>';
            console.log("this is what i added to the div ", stringtoappend);
            $('#problem_div').append(stringtoappend);
            argCount++;

        }
    problemIndex++;
    }



}

$(document).ready(function(){
    //load the first problem to be solved

    load_problem();

    $('#skip').on('click',load_problem());







});





