//code for drag
var srcEl;
function dropHandler(el){
    //el.preventDefault();  
    el.stopPropagation();

    //this is where we'd be checking if the element belongs to be dragged there
    //?

    //i think we'd just be checking srcEL to see if  it's a 10 or a 1

    //if thats true drop the canvas in

    this.innerHTML= el.originalEvent.dataTransfer.getData('text/html');

    //you'll need to do some dynamic stuff to get the canvas to resize




}
function handleStart(ev){
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

var problems =JSON.parse(localStorage['problems']);
console.log("this is what problem is : ", problems);
var problemIndex  = 0;
var skipText = $('#skip_text');
var problem_div = $('#problem_div');

//i need to create problem objects to keep track of their div id's?


//a standard div

//now let's get the html ready
function load_problem(){
    
    var currentProblem= problems[problemIndex];
    console.log("this is what curret problem is: ", currentProblem);
    // split on white space 
   // currentProblem.toString().replace(/\s/g, "") ;
    //console.log("this is what curret problem is after removing white space: ", currentProblem);


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
            problem_div.append(stringtoappend);
            operatorCount++;


        }
        else{
            //this is an arugment 
            
            //we're going to iterate through the rest until we see an operator

            var argument = currentProblem[i];


            while (!isNaN(currentProblem[i+1])){
                argument += currentProblem[i++];
                console.log("this is argument:", argument);
            }
            
            var stringtoappend = '<div class="col" id=arg' + argCount + '>';

            stringtoappend += '<h3>' + argument + '</h3>';
           
            stringtoappend += '<div id="' + argCount +'box"' + ' draggable="true" class="drag_box" >';


            stringtoappend += '</div> </div>';
            console.log("this is what i added to the div ", stringtoappend);
            problem_div.append(stringtoappend);
            argCount++;

        }
    
    if(problemIndex == problems.length){
        

        skipText.text('Finish');
        skipText.attr('href', '/index.html');
        //direct to finish page 
        //maybe keep some stats on them if you get to it


        
    }
    
    }
    problemIndex++;
    //return;



}

$(document).ready(function(){
    //load the first problem to be solved

load_problem();

$('#skip').on('click',load_problem);

$('.drag_box').on('dragenter',function(event){
    event.preventDefault();
   
});

$('.drag_box').on('dragover',function(event){
    event.preventDefault();
})


$('.drag_box').on('dragstart',handleStart);
$('.drag_box').on('drop',dropHandler);







});





