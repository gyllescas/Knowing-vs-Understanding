var problems = [];
$(document).ready(function(){
    //goal for today: have a variable of problems and update the page to show them
    //
    //new goal: on start click s
    
    $('#addProblem').on('click', function(){
        console.log("the button got clicked")
        var p_input = $('#problem_input').val();
        //document.getElementById('problem_input').nodeValue

        //TODO: check if it's a valid input

        //add the value to the list "problems"

        problems.push(p_input);
        console.log("this is what's in problems : " + problems);
        
        //now add them to the screen

        $('#problems_in_list').append('<li>'+ p_input + '</li>');



    });
    $('#start').on('click',function(){
        //make sure the user has provided input
        if(problems.length > 0){
            localStorage.problems = JSON.stringify(problems) ;
            window.location.href='solve.html';

        }
        else{
            alert("Please provide add a problem to be solved!")
        }
       

    });


});